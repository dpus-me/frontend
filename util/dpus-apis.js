import axios from "axios";

// DpusReq 클래스는 DPUS 서버에 대한 요청을 처리합니다.
export class DpusReq {
  // refresh 메소드는 새로운 액세스 토큰을 얻습니다.
  async refresh() {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/refresh",
      {},
      {
        withCredentials: true,
      }
    );
    return response.data.access_token;
  }

  //로그아웃
  async logout() {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );
    return response.data.access_token;
  }

  // isLogin 메소드는 사용자가 로그인했는지 확인합니다.
  async isLogin() {
    try {
      const response = await this.get("/auth/authenticate");

      console.log(response.status);
      if (response.status !== 200) {
        throw new Error("Login failed");
      }
      return { isLoggined: response.status === 200, userData: response.data };
    } catch (error) {
      if (error.response && error.response.status === 403) {
        const newToken = await this.refresh();
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        const response = await this.get("/auth/authenticate");
        return { isLoggined: response.status === 200, userData: response.data };
      }
      return { isLoggined: false, userData: undefined };
    }
  }

  // get 메소드는 GET 요청을 보냅니다.
  async get(url) {
    return this.request("get", url);
  }

  // post 메소드는 POST 요청을 보냅니다.
  async post(url, data) {
    return this.request("post", url, data);
  }

  // delete 메소드는 DELETE 요청을 보냅니다.
  async delete(url) {
    return this.request("delete", url);
  }

  // update 메소드는 PUT 요청을 보냅니다.
  async update(url, data) {
    return this.request("put", url, data);
  }

  // request 메소드는 주어진 메소드로 요청을 보냅니다.
  // 403 에러가 발생하면 새로운 토큰을 얻고 다시 요청을 보냅니다.
  async request(method, url, data = null) {
    try {
      const response = await axios({
        method,
        url: process.env.NEXT_PUBLIC_BACKEND_URL + url,
        data,
        withCredentials: true,
      });
      return response;
    } catch (error) {
      if (error.response && error.response.status === 403) {
        const newToken = await this.refresh();
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        const response = await axios(
          { method, url: process.env.NEXT_PUBLIC_BACKEND_URL + url, data },
          { withCredentials: true }
        );
        return response.data;
      }
      throw error;
    }
  }
}

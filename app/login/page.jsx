"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";

import "@/styles/util/login/login.scss";
import { DpusReq } from "@/util/dpus-apis";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(false);
  const dpusReq = new DpusReq();

  useEffect(() => {
    async function prepare() {
      const loginInfo = await dpusReq.isLogin();
      if (loginInfo.isLoggined) {
        window.location.href = "/";
      }
    }
    prepare();
  }, []);

  function handleKeyDown(event) {
    const key = event.code;
    switch (key) {
      case "Enter":
        login();
        break;
      default:
    }
  }

  function login() {
    if (email === "" || password === "") {
      return;
    }

    toast.promise(
      axios
        .post(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/login",
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((r) => {
          if (r.status !== 200) {
            throw new Error("Login failed");
          }
          setLogin(true);
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        }),
      {
        loading: "로그인을 하고 있어요..",
        success: "로그인을 완료했어요! 3초 후에 메인 페이지로 돌아갈게요!",
        error: "로그인에 실패했어요. 아이디와 비밀번호를 확인해 주세요.",
      }
    );
  }
  return (
    <div className="login-container">
      <div className="title">
        <h2>DPUS 시작하기</h2>
        <p>대평고등학교를 더욱 스마트하게 이용해 보세요.</p>
      </div>
      <div className="login">
        <label>이메일</label>
        <input
          type="text"
          placeholder="이메일을 입력해 주세요."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          disabled={isLogin}
        />
        <label>비밀번호</label>
        <input
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          disabled={isLogin}
        />

        <button onClick={login} disabled={isLogin}>
          로그인
        </button>
      </div>
      <p className={"register"}>
        계정이 없으신가요? <Link href={"/register"}>회원가입</Link>
      </p>
    </div>
  );
}

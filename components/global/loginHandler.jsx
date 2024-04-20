"use client";

import user, { login } from "@/lib/features/user/user";
import { useAppDispatch } from "@/lib/hooks";
import { DpusReq } from "@/util/dpus-apis";
import { useEffect } from "react";

export default function LoginHandler() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const dpusReq = new DpusReq();

      async function setLogin() {
        const loginData = await dpusReq.isLogin();

        if (loginData.isLoggined) {
          const loggedUser = loginData.userData;
          dispatch(
            login({
              loggedIn: true,
              id: loggedUser.id,
              profile: loggedUser.profile,
              username: loggedUser.username,
            })
          );
        }
      }

      setLogin();
    } catch (error) {
      console.log(error.message);
      dispatch(reset());
    }
  }, []);
}

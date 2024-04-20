"use client";

import { useAppSelector } from "@/lib/hooks";
import { DpusReq } from "@/util/dpus-apis";
import { useEffect } from "react";

export default function MyPageInIt() {
  const dpusReq = new DpusReq();
  useEffect(() => {
    async function prepare() {
      const loginInfo = await dpusReq.isLogin();
      if (!loginInfo.isLoggined) {
        window.location.href = "/login";
      }
    }
    prepare();
  }, []);
}

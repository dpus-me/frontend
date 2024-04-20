"use client";

import { useAppSelector } from "@/lib/hooks";
import { DpusReq } from "@/util/dpus-apis";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MyAccount() {
  const user = useAppSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState({});
  const dpusReq = new DpusReq();

  useEffect(() => {
    const prepare = async () => {
      const loginInfo = await dpusReq.isLogin();
      setUserInfo(loginInfo.userData);
      console.log(setUserInfo);
    };
    prepare();
  }, []);

  return (
    <>
      <div className="user-profile-set">
        <div className="user-profile-set-title">
          <h2>이름</h2>
          <input defaultValue={user.username} />
          <h2>설명</h2>
          <input
            defaultValue={user.description}
            placeholder="설명이 존재하지 않습니다."
          />
          <h2>이메일</h2>
          <input
            value={userInfo.email}
            onClick={() => {
              alert("이메일은 수정할 수 없습니다.");
            }}
          />
          <p>
            프로필 저장 이후에도 일정 시간 동안 적용되지 않을 수 있습니다.
            <br />
            또한, 부적절한 정보들은 관리자 또는 선생님 권한을 가진 유저에 의해
            <br />
            언제든지 삭제 및 변경될 수 있습니다.
            <br />
            이와 관련된 자세한 정보는{" "}
            <Link href="/docs/guide">유저 가이드</Link>를 참고하세요.
          </p>
          <button className="profile-save">프로필 저장</button>
        </div>
        <button className="profile-change-button">
          <img src={user.profile} />
          <div className="profile-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className="my-danger">
        <h2>Danger Zone</h2>
        <div className="my-danger-divider"></div>
        <h3>로그아웃</h3>
        <p>현제 계정에서 로그아웃합니다.</p>
        <button
          onClick={() => {
            dpusReq.logout();
          }}
        >
          로그아웃
        </button>
        <h3>계정 삭제</h3>
        <p>
          게정을 DPUS 데이터베이스에서 삭제합니다.
          <br />
          삭제된 계정은 복구가 불가능합니다.
        </p>
        <button>계정 삭제</button>
      </div>
    </>
  );
}

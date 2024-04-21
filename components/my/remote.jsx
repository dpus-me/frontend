"use client";

import { useState } from "react";
import MyAccount from "./modules/my-accounts";
import Users from "./modules/user";
import SetTeachers from "./modules/teachers";

export default function MyRemote() {
  const [path, setPath] = useState("account");

  const menus = {
    account: <MyAccount />,
    user: <Users />,
    teacher: <SetTeachers />,
  };

  return (
    <div className="my-container">
      <div className="remote">
        <button
          className={path === "account" ? "active" : ""}
          onClick={() => {
            setPath("account");
          }}
        >
          내 정보 관리
        </button>
        <button
          className={path === "user" ? "active" : ""}
          onClick={() => {
            setPath("user");
          }}
        >
          유저 관리
        </button>
        <button
          onClick={() => {
            setPath();
          }}
        >
          내가 쓴 글 관리
        </button>
        <button
          onClick={() => {
            setPath();
          }}
        >
          권한
        </button>
        <button
          className={path === "teacher" ? "active" : ""}
          onClick={() => {
            setPath("teacher");
          }}
        >
          선생님
        </button>
        <button
          onClick={() => {
            setPath();
          }}
        >
          지원 센터
        </button>
        <button
          onClick={() => {
            setPath();
          }}
        >
          개발자 메뉴
        </button>
      </div>
      <div className="my-divider"></div>
      <div className="my-view">{menus[path]}</div>
    </div>
  );
}

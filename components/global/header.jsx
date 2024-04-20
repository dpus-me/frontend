"use client";

import Image from "next/image";
import logo from "@/public/brand/logo.png";
import Link from "next/link";
import "@/styles/global/header.scss";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { usePathname } from "next/navigation";

export default function Header() {
  const user = useAppSelector((state) => state.user);
  const [menuOpened, setMenuOpen] = useState(false);

  const path = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  useEffect(() => {
    const header = document.querySelector(".header-container");
    document.addEventListener("scroll", (e) => {
      if (window.scrollY > 0) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    });
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    const headerMenu = document.querySelector(".header-menu");
    if (menuOpened) {
      body.classList.add("body-disabled");
      headerMenu.classList.remove("menu-disabled");
    } else {
      body.classList.remove("body-disabled");
      headerMenu.classList.add("menu-disabled");
    }
  }, [menuOpened]);

  return (
    <>
      <div className="header-container">
        <div className="header">
          <Link href={"/"} className="header-logo">
            <Image src={logo} alt={"logoimg"} priority={true} />
          </Link>
          <div className="header-items">
            <Link href={"/meals"}>
              <p>🍔 급식</p>
            </Link>
            <Link href={"/community"}>
              <p>📫 커뮤니티</p>
            </Link>
            <Link href={"/bamboo"}>
              <p>🎍 대나무숲</p>
            </Link>
            <Link href={"/library"}>
              <p>🗂️ 자료실</p>
            </Link>
            <Link href={"/records"}>
              <p>📈 성적 관리</p>
            </Link>
            <Link href={"/lost"}>
              <p>📦 분실물 관리소</p>
            </Link>
          </div>
          {user.loggedIn ? (
            <div className="header-profile">
              <Link className="header-alert" href="/notifications"></Link>
              <Link className="header-profile-img" href="/my">
                <img src={user.profile} alt="profile" />
              </Link>
            </div>
          ) : (
            <Link href="/login">
              <button className="login-button">로그인</button>
            </Link>
          )}
        </div>
        <div className="header-mobile">
          <Link href={"/"} className="header-logo">
            <Image src={logo} alt={"logoimg"} priority={true} />
          </Link>
          <button
            className="menu"
            onClick={() => {
              setMenuOpen(true);
            }}
          >
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="header-menu menu-disabled">
        <div className="close-menu">
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {user.loggedIn ? (
          <div className="menu-devider">
            <p>유저</p>
            <div className="divider"></div>
          </div>
        ) : (
          <></>
        )}
        <div className="header-menu-buttons">
          {user.loggedIn ? (
            <div className="header-menu-avatar">
              <img src={user.profile} />
              <div className="header-menu-avatar-text">
                <username>{user.username}</username>
                <Link href="/my">
                  <p>정보 수정하기 →</p>
                </Link>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <button className="login-button">로그인</button>
            </Link>
          )}
        </div>

        <div className="menu-devider">
          <p>메뉴</p>
          <div className="divider"></div>
        </div>

        <div className="header-menu-items">
          <Link href={"/meals"}>
            <p>🍔 급식</p>
          </Link>
          <Link href={"/community"}>
            <p>📫 커뮤니티</p>
          </Link>
          <Link href={"/bamboo"}>
            <p>🎍 대나무숲</p>
          </Link>
          <Link href={"/library"}>
            <p>🗂️ 자료실</p>
          </Link>
          <Link href={"/records"}>
            <p>📈 성적 관리</p>
          </Link>
          <Link href={"/lost"}>
            <p>📦 분실물 관리소</p>
          </Link>
        </div>
        <p className="header-copyright">
          Copyright © {new Date().getFullYear()}, Damie Original Series
        </p>
      </div>
    </>
  );
}

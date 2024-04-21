"use client";

import "@/styles/util/login/register.scss";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import JSConfetti from "js-confetti";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import { DpusReq } from "@/util/dpus-apis";
import Link from "next/link";

export default function Register() {
  // 상태를 관리하는 useState 훅들입니다.
  const [index, setIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [isEmailSended, setEmailSended] = useState(false);
  const [isEmailVerified, setEmailVerified] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [agreedPolicy, setAgreePolicy] = useState(false);

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

  // 다음 페이지로 이동하는 함수입니다.
  const nextPage = () => {
    setIndex(index + 1);
  };

  // 이메일을 보내는 함수입니다.
  async function SendEmail() {
    // 이메일이 입력되지 않았다면 에러 메시지를 표시합니다.
    if (email === "") {
      toast.error("이메일을 입력해주셔야 합니다.");
      return;
    }

    // 이메일을 보내는 요청을 보냅니다.
    await toast.promise(
      axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/mail/get-code",
        {
          email,
        },
        {
          withCredentials: true,
        }
      ),
      {
        loading: "메일을 보내고 있어요..",
        success: "메일을 전송했어요!",
        error: "메일 전송에 실패했어요. 잠시 후 다시 시도해 주세요.",
      }
    );

    // 이메일이 성공적으로 보내졌음을 표시합니다.
    setEmailSended(true);
  }

  // 이메일을 인증하는 함수입니다.
  async function verifyEmail() {
    // 인증번호가 입력되지 않았다면 에러 메시지를 표시합니다.
    if (verifyCode === "") {
      toast.error("인증번호를 입력해 주셔야 합니다.");
      return;
    }

    // 이메일 인증 요청을 보냅니다.
    await toast.promise(
      axios
        .post(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/mail/verify",
          {
            email,
            code: verifyCode.toString(),
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          // 인증 코드가 일치하지 않는다면 에러를 던집니다.
          if (res.status !== 201) {
            throw new Error("Code not matched");
          }

          // 인증이 성공적으로 이루어졌음을 표시하고, 이메일을 등록 데이터에 추가합니다.
          setRegisterData({ ...registerData, email: email });
          setEmailVerified(true);
        }),
      {
        success: "인증 작업을 완료했어요!",
        loading: "인증 작업을 진행하고 있어요..",
        error: "인증에 실패했어요. 코드를 확인하고 잠시 후 다시 시도해 주세요.",
      }
    );
  }

  // 회원가입을 진행하는 함수입니다.
  async function register() {
    // 등록 데이터를 콘솔에 출력합니다.
    console.log(registerData);

    // 회원가입 요청을 보냅니다.
    await toast.promise(
      axios
        .post(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/register",
          {
            ...registerData,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          // 회원가입이 성공적으로 이루어지지 않았다면 에러를 던집니다.
          if (res.status !== 201) {
            throw new Error("회원가입에 실패했어요.");
          }

          // 회원가입이 성공적으로 이루어졌음을 표시합니다.
          setIndex(2);
        }),
      {
        loading: "회원가입을 진행하고 있어요..",
        success: "회원가입을 완료했어요!",
        error: "에러가 발생했어요. 잠시 후 다시 시도해 주세요.",
      }
    );
  }

  // 컴포넌트를 렌더링합니다.
  return (
    <div className="register-container">
      {index === 0 ? (
        <>
          <div className="title">
            <h2>회원가입</h2>
            <p>회원으로 가입해 더욱 스마트한 학교 생활을 누려보세요.</p>
          </div>
          <div className="register-form">
            <label>이메일</label>
            <div className="register-inputs">
              <input
                id="send-email-input"
                type="email"
                placeholder="이메일을 입력해 주세요."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                disabled={isEmailSended}
              />
              <button
                id="send-email"
                onClick={SendEmail}
                disabled={isEmailSended || email.length === 0}
              >
                인증하기
              </button>
            </div>
            <label>인증번호</label>
            <div className="register-inputs">
              <input
                id="verify-input"
                type="text"
                placeholder="인증 번호를 입력해 주세요."
                onChange={(e) => {
                  setVerifyCode(e.target.value);
                }}
                disabled={!isEmailSended || isEmailVerified}
              />
              <button
                id="verify"
                onClick={verifyEmail}
                disabled={!isEmailSended || isEmailVerified}
              >
                확인
              </button>
            </div>
            <button
              id="next-button-first"
              onClick={() => {
                if (!isEmailVerified) {
                  return;
                }
                nextPage();
              }}
              disabled={!(isEmailSended && isEmailVerified)}
            >
              다음으로 (1/2)
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
      {index === 1 ? (
        <>
          <div className="title">
            <h2>세부 정보 설정하기</h2>
            <p>당신의 자세한 정보들을 알려주세요!</p>
          </div>
          <div className="register-form">
            <label>이름</label>
            <input
              placeholder="이름을 입력해 주세요. 실명이 아니어도 좋아요!"
              onChange={(e) => {
                setRegisterData({
                  ...registerData,
                  username: e.target.value,
                });
              }}
            />
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              onChange={(e) => {
                setRegisterData({
                  ...registerData,
                  password: e.target.value,
                });
              }}
            />
            <div className="agree-policy">
              <input
                id="policy"
                name="policy"
                type="checkbox"
                onChange={(e) => {
                  setAgreePolicy(e.target.checked);
                }}
              />
              <label for="policy">
                <Link href="/docs/privacy_policy" target="_blank">
                  개인정보처리방침
                </Link>
                과{" "}
                <Link href="/docs/service_policy" target="_blank">
                  서비스 이용약관
                </Link>
                에 동의해요.
              </label>
            </div>
            <button
              onClick={register}
              disabled={
                registerData.email === "" ||
                registerData.password === "" ||
                registerData.username === "" ||
                !agreedPolicy
              }
            >
              완료하기 (2/2)
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
      {index === 2 ? <DoneRegister /> : <></>}
    </div>
  );
}

// 회원가입이 완료된 후 보여지는 컴포넌트입니다.
function DoneRegister() {
  // 컴포넌트가 마운트될 때, 컨페티 애니메이션을 실행합니다.
  useEffect(() => {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      confettiColors: [
        "#6cff74",
        "#38caff",
        "#ff7096",
        "#ffef85",
        "#2279e5",
        "#9a3dfa",
      ],
    });
  }, []);

  // 컴포넌트를 렌더링합니다.
  return (
    <div className="title">
      <h2>회원가입을 완료했어요!</h2>
      <p>이제 DPUS의 모든 서비스를 사용하실 수 있어요!</p>
      <button
        onClick={() => {
          window.location.href = "/login";
        }}
      >
        로그인하기
      </button>
    </div>
  );
}

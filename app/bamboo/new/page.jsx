"use client";
import { DpusReq } from "@/util/dpus-apis";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "@/styles/bamboo/upload.scss";

export default function NewBamboo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAnon, setAnon] = useState(true);
  const [checked, setChecked] = useState(false);

  const dpusReq = new DpusReq();
  useEffect(() => {
    async function prepare() {
      const loginInfo = await dpusReq.isLogin();
      console.log(loginInfo);

      if (!loginInfo.isLoggined) {
        window.location.href = "/login";
      }
    }
    prepare();
  }, []);

  async function uploadBamboo() {
    if (title === "" || content === "") {
      toast.error("제목과 내용이 모두 포함되어 있어야 해요!");
      return;
    }
    toast.promise(
      dpusReq.post("/bamboo/upload", {
        title,
        contents: content,
        anonymity: isAnon,
      }),
      {
        loading: "포스트를 업로드하고 있어요..",
        success: () => {
          setTimeout(() => {
            window.location.href = "/bamboo";
          }, 3000);
          return "업로드를 완료했어요! 3초 이후 메인 페이지로 돌아갈게요.";
        },
        error: "에러가 발생했어요. 잠시 후 다시 시도해 주세요",
      }
    );
  }
  console.log(!checked && title.length > 0 && content.length > 0);

  return (
    <div className="new-bamboo-container">
      <div className="title">
        <h2>🎍 새로운 대나무 🎍</h2>
        <p>대나무숲의 새 글을 작성해요!</p>
      </div>
      <div className="new-bamboo-form">
        <label>제목</label>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>내용</label>
        <textarea
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <div className="set-anon">
          <input
            type="checkbox"
            id="set-check"
            name="set-check"
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
          <label for="set-check">
            작성 후 다시는 수정할 수 없음을 확인했어요.
          </label>
        </div>
        <div className="set-anon">
          <input
            type="checkbox"
            id="set-anon"
            name="set-anon"
            defaultChecked
            onChange={(e) => {
              setAnon(e.target.checked);
            }}
          />
          <label for="set-anon">익명 포스트인가요?</label>
        </div>
        <button
          onClick={uploadBamboo}
          disabled={!(checked && title.length > 0 && content.length > 0)}
        >
          작성하기
        </button>
      </div>
    </div>
  );
}

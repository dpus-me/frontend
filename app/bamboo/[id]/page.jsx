"use client";
import "@/styles/bamboo/posts.scss";
import { useEffect, useState } from "react";
import { DpusReq } from "@/util/dpus-apis";
import NotFound from "@/app/not-found";
import toast from "react-hot-toast";

export default function BambooPost(props) {
  const [bamboo, setBamboo] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [isLoggedin, setLogin] = useState(false);
  const [comment, setComment] = useState("");
  const dpusReq = new DpusReq();

  useEffect(() => {
    async function prepare() {
      try {
        console.log("Loading bamboos..");
        const response = await dpusReq.get(`/bamboo/post/${props.params.id}`);
        console.log(response.data);
        setBamboo(response.data);
        console.log(bamboo);

        const loginInfo = await dpusReq.isLogin();
        if (loginInfo.isLoggined) {
          setLogin(true);
        }
      } catch (error) {
        if (error.response.status === 404) {
          setNotFound(true);
        }
      }
    }
    prepare();
  }, []);

  if (notFound) {
    return NotFound();
  }

  async function refreshComment() {
    try {
      console.log("Loading New Comments..");
      const response = await dpusReq.get(`/bamboo/post/${props.params.id}`);
      setBamboo(response.data);

      const loginInfo = await dpusReq.isLogin();
      if (loginInfo.isLoggined) {
        setLogin(true);
      }
    } catch (error) {}
  }

  function sendComment() {
    if (comment === "") {
      return;
    }
    toast.promise(
      dpusReq
        .post("/bamboo/comment", {
          postId: props.params.id,
          contents: comment,
        })
        .then(() => {
          refreshComment();
        }),
      {
        loading: "댓글을 작성하고 있어요..",
        success: "댓글 작성을 성공했어요!",
        error: "댓글 작성을 실패했어요.. 잠시 후 다시 시도해 주세요!",
      }
    );
  }

  return (
    <div className="post-container">
      <div className="post-header"></div>
      <p className="post-title">{bamboo.title}</p>
      <div className="user-detail">
        <p>{bamboo.anonymity ? "익명" : bamboo.author}</p>
        <p>{bamboo.timeAgo}</p>
      </div>
      <div className="post-detail-container">
        <p className="post-detail">{bamboo.contents}</p>
      </div>
      {isLoggedin ? (
        <div className="comment-writer">
          <div className="comment-writer-body">
            <input
              placeholder="댓글 추가하기"
              onChange={(e) => {
                setComment(e.target.value);
              }}
              value={comment}
            />
            <div className="comment-writer-buttons">
              <button
                onClick={() => {
                  setComment("");
                }}
              >
                취소
              </button>
              <button onClick={sendComment}>작성</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="divider"></div>
      )}
      <div className="comments-container">
        {bamboo.comments?.map((comment, i) => {
          return (
            <Comments
              contents={comment.contents}
              username={comment.author.username}
              timeago={comment.timeAgo}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

function Comments(props) {
  return (
    <div className="comment">
      <div className="comment-detail">
        <p>
          {props.username} - {props.timeago}
        </p>
        <p>{props.contents}</p>
      </div>
      <div className="comment-likes"></div>
    </div>
  );
}

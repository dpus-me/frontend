"use client";

import { useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

export default function RecordUser() {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="record-user-profile">
      <img src={user.profile} />
      <div className="record-user-info">
        <h1>{user.username}님의 성적을 불러왔어요</h1>
        <p>작년 이맘때보다 18% 상승했어요.</p>
        <div className="record-user-goal">
          <p>목표 대학인</p>
          <img src="https://www.ck.ac.kr/wp-content/themes/ck/images/univ-intro/ui_img01.png" />
          <p> 청강대(게임개발과)까지 달려봐요!</p>
        </div>
      </div>
    </div>
  );
}

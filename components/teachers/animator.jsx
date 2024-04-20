"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function TeachersAnimator() {
  const container = useRef();

  return (
    <section ref={container} className="teachers background">
      <section class="section-01 scroll-section">
        <div class="main-elem">
          <h1>DPUS 프로젝트</h1>
          <a href="">
            선생님을 <span>찾습니다</span>
          </a>
        </div>
        <div class="canvas-elem">
          <canvas id="hero-lightpass"></canvas>
        </div>
        <div class="msg-elem msg-elem-01">
          <p>
            학생들과의 쉽고 빠른 소통으로
            <br />
            관계를 더욱 가깝게
          </p>
        </div>
        <div class="msg-elem msg-elem-02">
          <p>
            학습 자료를 더욱 쉽게
            <br />
            학생들과 공유할 수 있는
          </p>
        </div>
        <div class="msg-elem msg-elem-04">
          <p>내가 원하는 시간과 장소에서</p>
        </div>
      </section>
    </section>
  );
}

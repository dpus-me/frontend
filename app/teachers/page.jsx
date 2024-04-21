import logo from "@/public/brand/logo_white.png";
import ipad from "@/public/ui/mockup/ipad.png";
import "@/styles/teachers/main.scss";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "선생님 - DPUS",
  description: "대평고등학교 선생님이신가요? DPUS의 커뮤니티를 함께 키워봐요!",
};

export default function Teachers() {
  return (
    <main className="teachers-main">
      <section className="teachers-title">
        <div className="project-dpus">
          <p>프로젝트</p>
          <Image src={logo} alt="logo" />
        </div>
        <h1>선생님을 찾고 있어요!</h1>
      </section>
      <section className="teachers-info-first">
        <h2>DPUS는 대평고 학생들을 위해 운영되는</h2>
        <h2>
          <highlight>100% 무료</highlight> 커뮤니티 플랫폼이에요.
        </h2>
        <Image src={ipad} alt="ipad" />
      </section>
      <section className="teachers-info-second">
        <div className="teachers-why-dpus">
          <div className="teachers-why-item">
            <div className="teachers-why-emoji">
              <p>⏰</p>
            </div>
            <div className="teachers-why-item-contents">
              <h4>시간에 상관없이 언제든지</h4>
              <p>
                다른 유저에게 알림을 보내지 않아 24시간 부담없이 사용할 수
                있어요.
              </p>
            </div>
          </div>
          <div className="teachers-why-item">
            <div className="teachers-why-emoji">
              <p>🌏</p>
            </div>
            <div className="teachers-why-item-contents">
              <h4>장소에 상관없이 어디서든</h4>
              <p>
                DPUS는 온라인 플랫폼이기 때문에 장소에 관계없이 사용할 수
                있어요.
              </p>
            </div>
          </div>
          <div className="teachers-why-item">
            <div className="teachers-why-emoji">
              <p>🗂️</p>
            </div>
            <div className="teachers-why-item-contents">
              <h4>자료 공유를 쉽고 빠르게</h4>
              <p>
                다른 드라이브를 경유할 필요 없이 빠르게 자료 공유가 가능해요.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="teachers-footer">
        <h1>대평고 선생님이라면 누구나 이용하실 수 있어요!</h1>
        <div className="teachers-footer-buttons">
          <Link href={"/register"}>더 많은 정보 알아보기</Link>
          <Link href={"https://forms.gle/n1BwFn76PDEnqatr9"}>
            신청하러 가기
          </Link>
        </div>
      </section>
    </main>
  );
}

import Countdown from "@/components/etc/countdown";

export const metadata = {
  title: "개인정보 보호 정책 - DPUS",
  description: "DPUS의 개인정보 보호 정책이에요.",
};

export default function Privacy() {
  return (
    <div>
      <h1 className="page-title">🔒 개인정보 보호 정책</h1>
      <p className="page-subtitle">
        DPUS는 개인정보 보호를 위해 아래 정책을 따라요.
      </p>
      <div className="docs-info">
        <h2>//시험 종료 후 작성 예정</h2>
        <p>
          <Countdown event="작성 시작" time="2024-05-01T00:00:00" />
        </p>
      </div>
    </div>
  );
}

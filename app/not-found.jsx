import Link from "next/link";

export default function NotFound() {
  return (
    <div className="err">
      <h2>페이지를 찾을 수 없었어요..</h2>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}

import Head from "next/head";

export const metadata = {
  title: "커뮤니티 - DPUS",
  description: "대평고에서 지금 무슨 일이 일어나고 있는 걸까요?",
};

export default function Community() {
  return (
    <div>
      <h1 className="page-title">📫 커뮤니티</h1>
      <p className="page-subtitle">
        우리 학교에서 지금 무슨 일이 일어나고 있는 걸까요?
      </p>
    </div>
  );
}

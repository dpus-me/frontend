import CommunityAdvertise from "@/components/community/advertise";
import CommunityMenu from "@/components/community/menu";
import CommunityNotice from "@/components/community/notice";
import "@/styles/community/main.scss";
import Link from "next/link";

export default function CommunityLayout({ children }) {
  return (
    <main>
      <Link href="/community">
        <h1 className="page-title">📫 커뮤니티</h1>
      </Link>
      <p className="page-subtitle">
        우리 학교에서 지금 무슨 일이 일어나고 있는 걸까요?
      </p>
      <div className="community-main">
        <CommunityMenu />
        <CommunityNotice />
        <CommunityAdvertise />
        {children}
      </div>
    </main>
  );
}

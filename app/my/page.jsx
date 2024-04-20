import MyPageInIt from "@/components/my/init";
import MyRemote from "@/components/my/remote";
import "@/styles/my/main.scss";

export const metadata = {
  title: "내 계정 관리 - DPUS",
  description: "DPUS 계정을 빠르고 쉽게 관리해 보세요.",
};

export default function MyPage() {
  return (
    <div>
      <MyPageInIt />
      <h1 className="page-title">⚙️ 마이페이지</h1>
      <p className="page-subtitle">내 DPUS 계정을 빠르고 쉽게 관리해 보세요!</p>
      <div>
        <MyRemote />
      </div>
    </div>
  );
}

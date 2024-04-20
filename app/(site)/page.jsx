import HomeBamboo from "@/components/home/bamboo";
import HomeSwiper from "@/components/home/swiper";
import "@/styles/home/home.scss";

export const metadata = {
  title: "DPUS - 대평고등학교 학생 관리 플랫폼",
  description: "더 나은 대평고등학교 웹사이트 프로젝트, DPUS에요!",
};

export default function Home() {
  return (
    <main>
      <div className="notice"></div>
      <HomeSwiper />
      <h2>📦 제 물건 좀 찾아주세요!</h2>
      <h2>🔥 이번 주 커뮤니티 인기 게시글</h2>
      <h2>🎍 이번 주 대나무숲 인기 게시글</h2>
      <HomeBamboo />
    </main>
  );
}

import RecordChart from "@/components/records/recordChart";
import RecordUser from "@/components/records/user";
import "@/styles/records/main.scss";

export const metadata = {
  title: "성적 관리소 - DPUS",
  description: "언젠가 밝은 빛을 내게 될 당신을 위해",
};

export default function Records() {
  return (
    <div>
      <h1 className="page-title">📈 성적 관리소</h1>
      <p className="page-subtitle">언젠가 밝은 빛을 내게 될 당신을 위해</p>
      <div className="record-menu">
        <div className="record-menu-texts">
          <RecordUser />
        </div>
        <RecordChart />
      </div>
    </div>
  );
}

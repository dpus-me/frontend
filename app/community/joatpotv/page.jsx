import DisableAd from "@/components/community/disableAdvertise";
import JoatpoSchedule from "@/components/community/joatpotv/schedule";
import "@/styles/joatpotv/main.scss";

export default function JoatPoTv() {
  return (
    <div className="joatpotv-body">
      <DisableAd />
      <div className="joatpotv-title">
        <video src="/ui/joatpotv/joatpotv.mp4" muted autoPlay />
        <h1>- ㅈ포티비 게시판 -</h1>
        <div className="joatpotv-info">
          <p>
            이 게시판은 국내 최대 스포츠 중개 플랫폼인 "ㅈ포티비"가 운영하는
            게시판입니다.
          </p>
          <p>해당 게시판에선 ㅈ포티비 운영진에게 관리 권한이 부여됩니다.</p>
        </div>
      </div>
      <div className="joatpotv-contents">
        <div className="joatpotv-main">
          <p>1</p>
        </div>
        <div className="joatpotv-menu">
          <JoatpoSchedule />
        </div>
      </div>
    </div>
  );
}

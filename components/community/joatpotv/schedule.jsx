export default function JoatpoSchedule() {
  return (
    <div className="joatpotv-schedule">
      <div className="joatpotv-schedule-title">
        <h3>해설 스케쥴</h3>
        <div className="joatpotv-schedule-alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <div className="joatpotv-schedule-alert-contents">
            <p>
              ㅈ포티비에서 제공하는 스케쥴 정보에요.
              <br />이 정보는 언제든 변경될 수 있어요.
            </p>
          </div>
        </div>
      </div>
      <div className="joatpotv-schedule-body">
        <div className="joatpotv-schedule-item">
          <div className="joatpotv-bedge bedge-soccer">
            <p>축구</p>
          </div>
          <p>12:00 맨시티 VS 수원FC</p>
        </div>
        <div className="joatpotv-schedule-item">
          <div className="joatpotv-bedge bedge-soccer">
            <p>축구</p>
          </div>
          <p>13:00 맨유 VS 대평FC</p>
        </div>
        <div className="joatpotv-schedule-item">
          <div className="joatpotv-bedge bedge-baseball">
            <p>야구</p>
          </div>
          <p>15:00 한화 VS 삼성</p>
        </div>
        <div className="joatpotv-schedule-item">
          <div className="joatpotv-bedge bedge-baseball">
            <p>야구</p>
          </div>
          <p>17:00 SSG VS 롯데</p>
        </div>
        <div className="joatpotv-schedule-item">
          <div className="joatpotv-bedge bedge-baseball">
            <p>야구</p>
          </div>
          <p>23:00 KT VS 두산</p>
        </div>
      </div>
    </div>
  );
}

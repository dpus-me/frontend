import Link from "next/link";
import CommunitySearch from "./community-search";

export default function CommunityMenu() {
  return (
    <nav className="community-menu">
      <ul className="community-menu-list">
        <li className="community-menu-opener">
          <div className="community-menu-title">
            <Link href="/community">커뮤니티</Link>
          </div>
          <div className="community-menu-active-transparent"></div>
          <ul className="community-menu-active">
            <li className="community-menu-items">
              <Link href="/community/free">
                <div className="community-menu-items-contents">
                  <p>자유게시판</p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>학교생활</p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community/joatpotv">
                <div className="community-menu-items-contents">
                  <p>
                    <b>JOATPOTV</b>
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </li>
        <div className="community-menu-divider"></div>
        <li className="community-menu-opener">
          <div className="community-menu-title">
            <Link href="/community">질문답변</Link>
          </div>
          <div className="community-menu-active-transparent"></div>
          <ul className="community-menu-active">
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>문제풀이</p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>학교공부</p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>취미활동</p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>기타</p>
                </div>
              </Link>
            </li>
          </ul>
        </li>
        <div className="community-menu-divider"></div>
        <li className="community-menu-opener">
          <div className="community-menu-title">
            <Link href="/community">취미생활</Link>
          </div>
          <div className="community-menu-active-transparent"></div>
          <ul className="community-menu-active">
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>스포츠</p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>게임</p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>
                    <b>코딩</b>
                  </p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>연예인</p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>기타</p>
                </div>
              </Link>
            </li>
          </ul>
        </li>
        <div className="community-menu-divider"></div>
        <li className="community-menu-opener">
          <div className="community-menu-title">
            <Link href="/community">사진공유</Link>
          </div>
          <div className="community-menu-active-transparent"></div>
          <ul className="community-menu-active">
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>자랑거리</p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>일상</p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>광고해줘요</p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>차가운 대평고.</p>
                </div>
              </Link>
            </li>
          </ul>
        </li>
        <div className="community-menu-divider"></div>
        <li className="community-menu-opener">
          <div className="community-menu-title">
            <Link href="/community">선생님 게시판</Link>
          </div>
          <div className="community-menu-active-transparent"></div>
          <ul className="community-menu-active">
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>공지사항</p>
                </div>
              </Link>
            </li>
            <li className="community-menu-items">
              <Link href="/community">
                <div className="community-menu-items-contents">
                  <p>잡다한 글들</p>
                </div>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="menu-search">
        <CommunitySearch />
      </div>
    </nav>
  );
}

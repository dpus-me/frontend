import { Noto_Sans_KR } from "next/font/google";
import "@/styles/global/global.scss";
import Header from "@/components/global/header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/global/footer";
import StoreProvider from "./StoreProvider";
import LoginHandler from "@/components/global/loginHandler";
import GlobalNotice from "@/components/global/notice";

const notoSansKorean = Noto_Sans_KR({
  weight: ["200", "300", "500", "600", "700"],
  preload: false,
});

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="ko-KR">
        <body className={notoSansKorean.className}>
          <StoreProvider>
            <LoginHandler />
            <Header />
            <div className="body ">
              <Toaster
                position={"top-center"}
                containerStyle={{
                  margin: "0 auto",
                  marginTop: "30px",
                  maxWidth: "900px",
                }}
              />
              {children}
            </div>
            <Footer />
          </StoreProvider>
        </body>
      </html>
    </>
  );
}

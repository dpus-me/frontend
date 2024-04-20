import TeachersAnimator from "@/components/teachers/animator";
import "@/styles/teachers/main.scss";

export const metadata = {
  title: "선생님 - DPUS",
  description: "대평고등학교 선생님이신가요? DPUS의 커뮤니티를 함께 키워봐요!",
};

export default function Teachers() {
  return (
    <main>
      <TeachersAnimator />
    </main>
  );
}

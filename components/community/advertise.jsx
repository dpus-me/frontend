import Image from "next/image";
import advertise from "@/public/advertise/advertise_me.png";

export default function CommunityAdvertise() {
  return (
    <div className="community-advertise" id="ad">
      <Image src={advertise} alt="ad" />
    </div>
  );
}

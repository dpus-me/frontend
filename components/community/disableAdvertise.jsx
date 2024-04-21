"use client";
import { useEffect } from "react";

export default function DisableAd() {
  useEffect(() => {
    const ad = document.getElementById("ad");
    if (ad) {
      ad.remove();
    }
  }, []);
  const ad = document.getElementById("ad");
  if (ad) {
    ad.remove();
  }
  return <></>;
}

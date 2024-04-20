"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

import firstBanner from "@/public/banners/first.png";
import secondBanner from "@/public/banners/second.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import Link from "next/link";

export default function HomeSwiper() {
  const [slide, setSlide] = useState(0);
  const colors = ["#2f53c9", "#6526d1", "#2f53c9"];

  return (
    <>
      <div
        style={{
          height: "430px",
        }}
      ></div>
      <div
        className="swiper-container"
        style={{
          backgroundColor: colors[slide],
        }}
      >
        <div className="swiper-body">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 6000,
            }}
            onSlideChange={(swipe) => {
              setSlide(swipe.realIndex);
            }}
            className="swiper-main"
            style={{
              backgroundColor: colors[slide],
            }}
          >
            <SwiperSlide>
              <div href="/" className="swiper-bg">
                <Image src={firstBanner} alt="banner-first" />
                <Link href="/" className="swiper-text">
                  <h2>DPUS가 세상에 공개되었어요! 🥳</h2>
                  <p>
                    대평고 학생들의 더 나은 학교 생활을,
                    <br />
                    DPUS와 함께 만들어 가요!
                  </p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div href="/" className="swiper-bg">
                <Image src={secondBanner} alt="banner-first" />
                <Link href="/" className="swiper-text">
                  <h2>관리자를 모집하고 있어요! 📢</h2>
                  <p>
                    Dpus의 새로운 관리자를 모집하고 있어요!
                    <br />
                    저희와 함께 학생들의 편의를 증진시켜요!
                  </p>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";

export default function Countdown(props) {
  const calculateTimeLeft = () => {
    const difference = +new Date(props.time) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        일: Math.floor(difference / (1000 * 60 * 60 * 24)),
        시간: Math.floor((difference / (1000 * 60 * 60)) % 24),
        분: Math.floor((difference / 1000 / 60) % 60),
        초: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <>
      {props.event}까지 {timeLeft.일}일 {timeLeft.시간}시간 {timeLeft.분}분{" "}
      {timeLeft.초}초 남음
    </>
  );
}

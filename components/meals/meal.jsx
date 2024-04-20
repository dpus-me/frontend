"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "@/styles/meals/main.scss";
import { DpusReq } from "@/util/dpus-apis";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const dpusReq = new DpusReq();
  useEffect(() => {
    const prepare = async () => {
      const response = await dpusReq.get("/meals");
      setMeals(response.data.data);
      console.log(response.data);
    };
    prepare();
  }, []);

  if (meals[0] === "Not Founded") {
    return (
      <div>
        <h1 className="page-title">🍔 급식</h1>
        <p className="page-subtitle">오늘의 급식을 알려드릴게요!</p>
        <div className="err">
          <h2>급식 정보가 없어요..</h2>
          <p>오늘은 급식이 없는 날인 것 같아요!</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="page-title">🍔 급식</h1>
      <p className="page-subtitle">오늘의 급식을 알려드릴게요!</p>
      <div className="meals-container">
        {meals?.map((meal, i) => {
          return <CurrentMeal menu={meal} key={i} />;
        })}
      </div>
    </div>
  );
}

function CurrentMeal(props) {
  return (
    <Link
      href={`https://google.com//search?q=${props.menu}`}
      className="current-meal"
      target="_blank"
    >
      <div>
        <h2>{props.menu}</h2>
        <p>여기를 눌러 {props.menu}에 대한 정보를 검색하세요!</p>
      </div>
    </Link>
  );
}

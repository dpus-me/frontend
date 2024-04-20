"use client";
import { DpusReq } from "@/util/dpus-apis";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeBamboo() {
  const [isLoading, setLoading] = useState(true);
  const [bambooData, setBambooData] = useState([]);

  const dpusReq = new DpusReq();

  useEffect(() => {
    const prepare = async () => {
      const response = await dpusReq.get("/bamboo/popular");
      console.log(response.data);
      setBambooData(response.data);
      setLoading(false);
    };
    prepare();
  }, []);

  if (isLoading) {
    return (
      <div className="home-bamboo-container">
        <div className="home-bamboo home-bamboo-loading"></div>
        <div className="home-bamboo home-bamboo-loading"></div>
        <div className="home-bamboo home-bamboo-loading"></div>
        <div className="home-bamboo home-bamboo-loading"></div>
      </div>
    );
  }

  return (
    <div className="home-bamboo-container">
      {bambooData.map((bamboo, i) => {
        if (i > 3) {
          return;
        }

        return (
          <Bamboo
            title={bamboo.title}
            contents={
              bamboo.contents.length > 20
                ? bamboo.contents.slice(0, 20) + "..."
                : bamboo.contents
            }
            viewd={bamboo.viewd}
            timeAgo={bamboo.timeAgo}
            id={bamboo.id}
            key={i}
          />
        );
      })}
      {() => {
        if (bambooData.length > 4) {
          return;
        }

        return Array(4 - bambooData.length)
          .fill()
          .map((_, index) => (
            <div key={index} className="home-bamboo home-no-bamboo">
              <p>bamboo not found</p>
            </div>
          ));
      }}
    </div>
  );
}

function Bamboo(props) {
  return (
    <Link href={"/bamboo/" + props.id} className="home-bamboo">
      <h2>{props.title}</h2>
      <p>{props.contents}</p>
      <p className="bamboo-date">
        조회수 {props.viewd}회 • {props.timeAgo}
      </p>
    </Link>
  );
}

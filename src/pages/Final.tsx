import React from "react";
import { useLocation } from "react-router-dom";
import LastCard from "../components/lastCard";
export default function Final() {
  const location = useLocation();
  console.log("Location:", location);
  const CUR1 = new URLSearchParams(location.search).get("CUR1");
  const toCUR2 = new URLSearchParams(location.search).get("toCUR2");
  return (
    <div className="mt-20 max-w-screen ">
      <div className="bg-blue-100 h-[300px]">
        <h1 className="text-center text-[32px] font-roboto text-gray-900 text-6xl font-bold pt-10 sm:pt-[42px]">
          Convert {CUR1} to {toCUR2}
        </h1>
      </div>
      <div className="mt-[-126px] overflow-x-hidden pb-[108px]">
        <LastCard />
      </div>
    </div>
  );
}

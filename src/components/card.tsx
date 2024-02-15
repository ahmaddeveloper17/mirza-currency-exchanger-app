import React from "react";
import { useLocation } from "react-router-dom";
import arrow from "../assets/images-removebg-preview.png";
interface CardProps {
  description: string;
}
const Card: React.FC<CardProps> = (props) => {
  const location = useLocation();
  const currency = new URLSearchParams(location.search).get("currency");
  const { description } = props;
  const shouldNotShowResult = currency === description;
  return (
    <div className="text-black">
      {!shouldNotShowResult && (
        <div className="ml-[20px] mt-[50px]  flex flex-col sm:flex-row bg-gray-100 p-8 w-[250px]">
          <p className="text-lg font-bold">{currency}</p>
          <div className="w-[40px] mt-[5px] mx-[14px]">
            <img src={arrow} alt="" />
          </div>
          <p className="text-lg font-bold">{description}</p>
        </div>
      )}
    </div>
  );
};
export default Card;

import React from "react";
import heroImg from "../assets/images/hero-img.png";

export default function Hero() {
  return (
    <div className="w-full sm:h-[90vh] h-auto  flex justify-between   mt-5 flex-col lg:flex-row p-4">
      <div className="h-full flex flex-col justify-center text-left p-2">
        <h1 className="text-5xl font-bold ">
          Stable & Profitable <br /> Yield Farming dApp
        </h1>
        <br />
        <div class="h-[2px] bg-[#C51E00] mt-2"></div>
        <br />
        <h1 className="text-5xl font-bold">
          Up to 20% Daily on <br /> Ethereum Staking
        </h1>
      </div>
      <div className="">
        <img src={heroImg} alt="eth" className="h-full" />
      </div>
    </div>
  );
}

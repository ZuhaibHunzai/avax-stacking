import React from "react";
import Navbar from "../components/header";
import Hero from "../components/hero";
import ContractStart from "../components/contractStart";
import Earning from "../components/earning";

export default function Homepage() {
  return (
    <div className="w-full bg-[#F6F9FB] flex justify-center items-center">
      <div className=" w-full md:w-[85%] flex flex-col p-2">
        <Navbar />
        <Hero />
        <ContractStart />
        <Earning />
      </div>
    </div>
  );
}

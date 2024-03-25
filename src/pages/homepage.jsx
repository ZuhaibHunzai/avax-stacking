import React from "react";
import Navbar from "../components/header";
import Hero from "../components/hero";
import ContractStart from "../components/contractStart";
import Earning from "../components/earning";
import Footer from "../components/footer";

export default function Homepage() {
  return (
    <div className="w-full bg-[#F6F9FB] flex justify-center items-center">
      <div className=" w-full md:w-[85%] flex flex-col px-2 pb-2">
        <Navbar />
        <Hero />
        <ContractStart />
        <Earning />
        <Footer />
      </div>
    </div>
  );
}

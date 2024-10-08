import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollAnimation, setScrollAnimation] = useState(false);

  /*
     FOR OPENING SIDE BAR
  */

  const openSideBar = () => {
    setOpen(!open);
    setActive(!active);
  };

  const navClickFunc = (value) => {
    setActiveLink(value);
    setOpen(false);
    setActive(false);
    window.scrollTo({
      top: 0,
    });
  };

  const navItems = ["Contract", "Audit", "Twitter", "Telegram", "Medium"];

  return (
    <nav className="width navbar h-[80px] flex items-center justify-between px-3">
      <div className="logo py-3 ">
        <a
          to="/"
          className="flex items-center gap-x-3 "
          onClick={() => navClickFunc("img")}
        >
          <img
            src={logo}
            className="sm:w-[60px] w-[60px] object-cover"
            alt=""
          />
          <span className="font-primary sm:text-[35px] text-[20px] font-bold uppercase">
            {" "}
            AVAXER
          </span>
        </a>
      </div>
      {/* LARGE SCREEN NAV-LINKS */}
      <div className="links_section lg:block hidden">
        <ul className="list-none flex items-center gap-x-6">
          {navItems.map((element, index) => {
            return (
              <li key={index}>
                <a
                  href={`#${element}`}
                  className="uppercase text-[16px] font-primary font-semibold transition duration-500 hover:text-red focus:text-red"
                  onClick={() => navClickFunc(element)}
                >
                  {element}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="lg:block hidden">
        <div className="flex gap-x-3">
          <button className="px-3 py-2 rounded-lg bg-[#C51E00] text-white font-secondary text-[13px] transition duration-300 hover:scale-105 ">
            Contract balance : 0.0 AVAX
          </button>
          <div className="">
            <ConnectButton showBalance={false} />
          </div>
        </div>
      </div>
      {/* ANIMATED HAMBURGER */}
      <div className="lg:hidden">
        <button
          type="button"
          className="hamburger flex flex-col md:gap-y-[7px] gap-y-[6px]"
          onClick={openSideBar}
        >
          <span
            className={`md:w-[30px] w-[25px] md:h-[2.4px] h-[2.2px] bg-[#43525B] rounded-full transform transition duration-500 ease-in-out ${
              open
                ? "rotate-45 md:translate-y-[0.5rem] translate-y-[0.6rem]"
                : ""
            }`}
          ></span>
          <span
            className={`md:w-[30px] w-[25px] md:h-[2.4px] h-[2.4px] bg-[#43525B] rounded-full transform transition duration-500 ease-in-out ${
              open ? " opacity-0" : ""
            }`}
          ></span>
          <span
            className={`md:w-[30px] w-[25px] md:h-[2.4px] h-[2.2px] bg-[#43525B] rounded-full transform transition duration-500 ease-in-out ${
              open
                ? " -rotate-45 md:translate-y-[-.6rem] translate-y-[-.45rem]"
                : ""
            }`}
          ></span>
        </button>
      </div>

      {/* SMALL SCREEN NAV-LINKS */}
      <div
        className={` lg:hidden block absolute top-0 bg-white shadow-lg  w-[90%] h-screen z-50 duration-300 bg-blue-500 px-4 pt-4 left-[50%] translate-x-[-50%] ${
          active
            ? "top-[5rem] max-h-[350px] h-full opacity-100 "
            : "top-[5rem] max-h-[0px] opacity-0"
        } `}
      >
        {/* LNIKS SECTION */}
        <div className="w-full flex items-start justify-center flex-col pt-[20px] ">
          <ul className="list-none flex items-center justify-center flex-col gap-4 w-full   ">
            {navItems.map((element, index) => {
              return (
                <li key={index}>
                  <a
                    href={`#${element}`}
                    className="uppercase text-[16px] font-primary font-semibold transition duration-500 hover:text-red focus:text-red"
                    onClick={() => navClickFunc(element)}
                  >
                    {element}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="w-full flex flex-col items-center justify-center gap-y-3 mt-4">
            <button className="btn-primary max-w-[300px] w-full px-3 py-2 rounded-lg bg-red text-white font-primary text-[13px] transition duration-300 hover:scale-105 ">
              Contract balance : 0.0 AVAX
            </button>
            <div className="">
              <ConnectButton showBalance={false} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

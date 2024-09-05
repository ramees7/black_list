import React from "react";
import aboutBg from "../../assets/images/about_banner.jpg";
import { IoIosArrowForward } from "react-icons/io";

export default function AboutLanding() {
  return (
    <div
      className="xl:px-48 lg:px-20 md:px-12 px-10 "
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        height: "200px",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-25 h-[300px]"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center h-[80%] flex items-center ">
        <h1 className="text-6xl font-semibold text-white">
          <span className="text-yellow-500">About</span> Bangladesh Blacklist
        </h1>
      </div>
      <div className="relative z-10 text-center h-[20%] flex items-end border-0">
        <div className="px-4 py-3 flex items-center gap-x-2  border-0 bg-white w-fit rounded-tr-md rounded-tl-md">
            <h2 className="text-black hover:text-yellow-500 hover:cursor-pointer">Home</h2>
            <IoIosArrowForward className="text-yellow-500"/>
            <h2 className="text-gray-500">About</h2>
        </div>
      </div>
    </div>
  );
}

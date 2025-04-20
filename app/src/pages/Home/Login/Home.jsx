import React from "react";
import Image from "next/image";
import Navbar from "@/app/src/components/Navbar";
import Footer from "@/app/src/components/Footer";
import TitleCards from "@/app/src/components/TitleCards";
import Hero_Banner from "../../../../../public/assets/hero_banner.jpg";
import Hero_Title from "../../../../../public/assets/hero_title.png";
import Play_icon from "../../../../../public/assets/play_icon.png";
import info_icon from "../../../../../public/assets/info_icon.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Image className="w-full" src={Hero_Banner} alt="Hero_Banner"></Image>
      </div>

      {/* hero par  */}
      <div className="w-32  lg:w-[620px] sm:absolute  relative -top-32 sm:top-80 sm:left-5 left-2 ">
        <Image className="w-20 sm:w-58" src={Hero_Title} alt="heroimage"></Image>
        <p className="text-white text-[5px] sm:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          maxime consequuntur, deleniti repellendus adipisci similique quis
          nostrum quos libero alias cupiditate corporis eaque praesentium
          distinctio ipsum laudantium, debitis voluptate? Incidunt?
        </p>
        <div className="flex mt-1">
          <button className="bg-white flex px-1 py-0.5 mr-1 rounded-sm items-center">
            <Image src={Play_icon} alt="playicon" className="w-2 sm:w-auto"></Image>
            <p className=" font-bold  text-[5px] sm:text-[20px]">Play</p>
          </button>
          <button className="bg-black/60 flex  px-1 py-0.5 rounded-sm items-center">
            <Image src={info_icon} alt="infoicone" className="w-2 sm:w-auto"></Image>
            <p className=" font-bold  text-[5px] sm:text-[20px]">More Info</p>
          </button>
        </div>
      </div>
      <TitleCards />
      <Footer />
    </div>
  );
};

export default Home;


import React from "react";
import Image from "next/image";
import Navbar from "@/app/src/components/Navbar";
import Hero_Banner from "../../../../../public/assets/hero_banner.jpg";
import Hero_Title from "../../../../../public/assets/hero_title.png";
import Play_icon from "../../../../../public/assets/play_icon.png";
import info_icon from "../../../../../public/assets/info_icon.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <Image className="w-full" src={Hero_Banner} alt="Hero_Banner"></Image>
      </div>
      <div className="absolute top-130 left-8 w-[750px]">
        <Image className="w-96 " src={Hero_Title}></Image>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          maxime consequuntur, deleniti repellendus adipisci similique quis
          nostrum quos libero alias cupiditate corporis eaque praesentium
          distinctio ipsum laudantium, debitis voluptate? Incidunt?
        </p>
        <div className="flex mt-5 gap-4">
          <button className="bg-white flex px-5 py-2 rounded-sm">
            <Image src={Play_icon} className="w-6 mr-2"></Image>
            <p className=" font-bold">Play</p>
          </button>
          <button className="bg-black/75 flex px-5 py-2 rounded-sm">
            <Image src={info_icon} className="w-6 mr-2"></Image>
            <p className=" font-bold text-white">More Info</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

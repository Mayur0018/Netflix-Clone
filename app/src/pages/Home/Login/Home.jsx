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
      <div className="relative ">
        <Image className="w-full " src={Hero_Banner} alt="Hero_Banner"></Image>
      </div>

      {/* hero par  */}
      <div className="absolute top-50 left-8 w-[750px] ">
        <Image className="w-96  " src={Hero_Title} alt="heroimage"></Image>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          maxime consequuntur, deleniti repellendus adipisci similique quis
          nostrum quos libero alias cupiditate corporis eaque praesentium
          distinctio ipsum laudantium, debitis voluptate? Incidunt?
        </p>
        <div className="flex mt-5 gap-4">
          <button className="bg-white flex px-5 py-2 rounded-sm">
            <Image src={Play_icon} alt="playicon" className="w-6 mr-2"></Image>
            <p className=" font-bold">Play</p>
          </button>
          <button className="bg-black/60 flex px-5 py-2 rounded-sm">
            <Image src={info_icon} alt="infoicone" className="w-6 mr-2"></Image>
            <p className=" font-bold text-white">More Info</p>
          </button>
        </div>
      </div>

      {/* carddeatils */}
      <TitleCards />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;

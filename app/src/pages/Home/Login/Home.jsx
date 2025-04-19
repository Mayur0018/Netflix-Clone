import React from "react";
import Image from "next/image";
import Navbar from "@/app/src/components/Navbar";
import Hero_Banner from "../../../../../public/assets/hero_banner.jpg";
import Hero_Title from "../../../../../public/assets/hero_title.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <Image className="w-full" src={Hero_Banner} alt="Hero_Banner"></Image>
      </div>
      <div className="absolute top-130 left-8 w-[750px]">
        <Image className="w-96 " src={Hero_Title}></Image>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime consequuntur, deleniti repellendus adipisci similique quis nostrum quos libero alias cupiditate corporis eaque praesentium distinctio ipsum laudantium, debitis voluptate? Incidunt?</p>
      </div>
    </div>
  );
};

export default Home;

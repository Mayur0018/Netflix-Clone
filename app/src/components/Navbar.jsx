import React from "react";
import Image from "next/image";
import Logimg from "../../../public/assets/logo.png";

import Search_Icon from "../../../public/assets/search_icon.svg";
import Bell_Icon from "../../../public/assets/bell_icon.svg";
import Profile_img from "../../../public/assets/profile_img.png";
import caret_img from "../../../public/assets/caret_icon.svg";
const Navbar = () => {
  return (
    <>
      <div className="flex fixed z-1  gap-40 top-8 left-28 justify-between">
        <Image className="w-28" src={Logimg} alt="LogoImage"></Image>
        <ul className="flex gap-5 items-center">
          <li className="text-white">Home</li>
          <li className="text-white">Tv Shows</li>
          <li className="text-white">Movies</li>
          <li className="text-white">New & Popular</li>
          <li className="text-white">My List</li>
          <li className="text-white">Browse by Languages</li>
        </ul>
        <div className="flex gap-5 items-center">
          <Image src={Search_Icon} alt="Search-Icone"></Image>
          <p className="text-white">Children</p>
          <Image src={Bell_Icon}></Image>
          <Image src={Profile_img}></Image>
          <Image src={caret_img}></Image>
        </div>
      </div>
    </>
  );
};

export default Navbar;

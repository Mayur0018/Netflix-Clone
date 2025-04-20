"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logimg from "../../../public/assets/logo.png";
import Search_Icon from "../../../public/assets/search_icon.svg";
import Bell_Icon from "../../../public/assets/bell_icon.svg";
import Profile_img from "../../../public/assets/profile_img.png";
import caret_img from "../../../public/assets/caret_icon.svg";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, SetIsopen] = useState(false);
  const toggleMenu = () => SetIsopen(!isOpen);
  return (
    <>
      <div className="sm:hidden">
        <div
          className="sm:hidden text-white text-2xl float-end"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
        {isOpen && (
          <div className="flex-col items-center py-10 px-5">
            <Image className="w-24" src={Logimg} alt="LogoImage"></Image>
            <ul className="flex flex-col  gap-5 items-center mt-10  ">
              <li className="text-white">Home</li>
              <li className="text-white">Tv Shows</li>
              <li className="text-white">Movies</li>
              <li className="text-white">New & Popular</li>
              <li className="text-white">My List</li>
              <li className="text-white">Browse by Languages</li>
            </ul>
            <div className="flex flex-col gap-5 mt-5 items-center">
              <Image src={Search_Icon} alt="Search-Icone"></Image>
              <p className="text-white">Children</p>
              <Image src={Bell_Icon} alt="bell-icon"></Image>
              <Image src={Profile_img} alt="bell-icon"></Image>
              <Image src={caret_img} alt="caret-img"></Image>
            </div>
          </div>
        )}
      </div>
      <div className="hidden sm:flex sm: sm:items-center sm:justify-around lg:py-5">
            <Image className="w-24" src={Logimg} alt="LogoImage"></Image>
            <ul className="sm:flex sm:gap-3">
              <li className="text-white">Home</li>
              <li className="text-white">Tv Shows</li>
              <li className="text-white">Movies</li>
              <li className="text-white">New & Popular</li>
              <li className="text-white">My List</li>
              <li className="text-white">Browse by Languages</li>
            </ul>
            <div className="sm:flex sm:items-center sm:justify-center sm:gap-3">
              <Image src={Search_Icon} alt="Search-Icone"></Image>
              <p className="text-white">Children</p>
              <Image src={Bell_Icon} alt="bell-icon"></Image>
              <Image src={Profile_img} alt="bell-icon"></Image>
              <Image src={caret_img} alt="caret-img"></Image>
            </div>
          </div>
    </>
  );
};

export default Navbar;

import React from "react";
import Image from "next/image";
import fb_logo from "../../../public/assets/facebook_icon.png";
import instagram_logo from "../../../public/assets/instagram_icon.png";
import twitter_logo from "../../../public/assets/twitter_icon.png";
import youtube_logo from "../../../public/assets/youtube_icon.png";
const Footer = () => {
  return (
    <>
      <div className=" flex justify-evenly mt-18">
        <div>
          <div className="flex gap-3">
            <Image className="w-5" src={fb_logo} alt="fblogo"></Image>
            <Image className="w-5" src={instagram_logo} alt="instalogp"></Image>
            <Image className="w-5" src={twitter_logo} alt="twitterlogo"></Image>
            <Image className="w-5" src={youtube_logo} alt="ytlogo"></Image>
          </div>

          <p className="text-white">Audio Descriptions</p>
          <p className="text-white">investor Relationa</p>
          <p className="text-white">Leagal Notice</p>
        </div>
        <div>
          <p className="text-white">Help Center</p>
          <p className="text-white">Jobes</p>
          <p className="text-white">Cookie Performance</p>
        </div>
        <div>
          <p className="text-white">Gift Cards</p>
          <p className="text-white">Terms Of Use</p>
          <p className="text-white">Corprate Information</p>
        </div>
        <div>
          <p className="text-white">Mobile Center</p>
          <p className="text-white">Privacy</p>
          <p className="text-white">Contect Us</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import cards_data from "@/public/assets/cards/Cards_data";
console.log(cards_data);

const TitleCards = () => {
  return (
    <div className="">
      <h1 className=" ">fgdf</h1>
      <div className="grid grid-cols-4">
        {cards_data.map((card, index) => (
          <div key={index} className="">
            <Image className="" src={card.image} alt="cards"></Image>
            <p className=" text-white font-bold  text-[5px]">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;

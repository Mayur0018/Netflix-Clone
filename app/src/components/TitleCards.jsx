import React from "react";
import Image from "next/image";
import cards_data from "@/public/assets/cards/Cards_data";
console.log(cards_data);

const TitleCards = () => {
  return (
    <div className="">
      <div className="grid grid-cols-5">
        {cards_data.map((card, index) => (
          <div key={index} className="">
            <Image className="" src={card.image} alt="cards"></Image>
            <p className=" text-white font-bold">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;

import { ISneaker } from "@/types/sneaker.interface";
import React, { FC } from "react";
import Link from "next/link";
import BuyButton from "../UI/button/BuyButton";
import Image from "next/image";
type CardItemProps = {
  sneaker: ISneaker;
};

const CardItem: FC<CardItemProps> = ({ sneaker }) => {
  return (
    <div className="grid grid-rows-[220px_150px_30px] sm:max-w-xs ">
      <div className=" mx-auto ">
        <Image style={{ objectFit: "cover" }} src={sneaker.image} alt={sneaker.title} width={250} height={220} />
      </div>
      <div className="py-4">
        <div className="text-xl font-medium">Кроссовки : {sneaker.title}</div>
        <div className="text-lg">Цена : {sneaker.price}$</div>
      </div>
      <div className="flex justify-between items-center py-2">
        <BuyButton> Купить</BuyButton>
        <Link href={`/sneaker/${sneaker.id}`} className="btn-blue">
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default CardItem;

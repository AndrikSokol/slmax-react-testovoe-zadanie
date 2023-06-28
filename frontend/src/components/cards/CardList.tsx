import { api } from "@/services/sneakersService";
import React, { FC } from "react";
import CardItem from "./CardItem";
import { ISneaker, ISneakerData } from "@/types/sneaker.interface";

const CardList = async () => {
  const sneakers: ISneaker[] = await api.getSneakers();

  return (
    <div className="mx-auto  gap-6  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {sneakers.map((sneaker: ISneaker) => (
        <CardItem key={sneaker.id} sneaker={sneaker} />
      ))}
    </div>
  );
};

export default CardList;

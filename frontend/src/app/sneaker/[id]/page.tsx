import BuyButton from "@/components/UI/button/BuyButton";
import DeleteButton from "@/components/UI/button/DeleteButton";
import { api } from "@/services/sneakersService";
import { ISneaker } from "@/types/sneaker.interface";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type pageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const sneakers: ISneaker[] = await api.getSneakers();

  return sneakers.map((sneaker) => ({ slug: sneaker.id.toString() }));
}

export async function generateMetadata({ params: { id } }: pageProps): Promise<Metadata> {
  const sneaker: ISneaker = await api.getSneaker(id);
  return {
    title: sneaker.title,
    description: sneaker.description,
  };
}

const page: FC<pageProps> = async ({ params: { id } }) => {
  const sneaker: ISneaker = await api.getSneaker(id);
  return (
    <div className="mx-auto   py-4 w-[80%]">
      <div className=" mx-auto h-screen  flex-grow max-w-7xl">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:min-w-[45%] border-r-2 border-r-blue-500  overflow-hidden">
            <Image className=" rounded-l-2xl" src={sneaker.image} alt="sneaker" width={700} height={700} />
          </div>
          <div className="px-4 text-justify ">
            <div className=" font-bold text-2xl ">{sneaker.title}</div>
            <div className="  text-lg py-2">{sneaker.description}</div>
            <div className="  text-lg  font-semibold flex gap-4 items-center">
              <div className="">Цена: {sneaker.price}$</div>
              <BuyButton>Купить</BuyButton>
            </div>
            <div className="flex justify-between py-4">
              <Link href={`/sneaker/edit/${sneaker.id}`} className="btn-blue">
                Редактировать
              </Link>
              <DeleteButton id={sneaker.id} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;

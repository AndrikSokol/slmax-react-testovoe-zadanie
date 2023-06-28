import CardList from "@/components/cards/CardList";
import Image from "next/image";
import React from "react";

export default async function Home() {
  return (
    <div className="p-8 mx-auto">
      <CardList />
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../nav/Navigation";

const Header = () => {
  return (
    <header className="w-full p-4 border-b-2 border-blue-500">
      <div className="flex flex-row">
        <Link href="/" className="flex gap-2 hover:scale-[102%]">
          <Image src="/sneaker.svg" alt={"sneaker"} width={30} height={30} />
          <h1 className="font-bold text-2xl">Sneakers</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

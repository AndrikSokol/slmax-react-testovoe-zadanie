"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-full gap-2 items-center text-xl justify-center">
      <Link href="/" className={pathname === "/" ? "text-blue-500" : "hover:opacity-80 hover:underline"}>
        Главная
      </Link>
      <Link href="/sneaker/add" className={pathname.includes("add") ? "text-blue-500" : "hover:opacity-80 hover:underline"}>
        Добавить кроссовки
      </Link>
    </div>
  );
};

export default Navigation;

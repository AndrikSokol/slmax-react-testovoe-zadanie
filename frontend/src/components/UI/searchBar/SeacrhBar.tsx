"use client";
import { usePathname } from "next/navigation";
import React, { ChangeEvent, FC } from "react";

type SeacrhBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SeacrhBar: FC<SeacrhBarProps> = ({ query, setQuery }) => {
  return (
    <div className="flex gap-4 pb-4 ">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="py-1 px-4 rounded-md outline-none border max-w-[150px] md:max-w-none"
        type="text"
        placeholder="название"
      />
    </div>
  );
};

export default SeacrhBar;

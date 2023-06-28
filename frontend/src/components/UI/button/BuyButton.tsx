"use client";

import React, { FC } from "react";

type BuyButtonProps = {
  children: React.ReactNode;
};

const BuyButton: FC<BuyButtonProps> = ({ children }) => {
  return (
    <button className="btn-gray" onClick={() => alert("I just wanna be your sweatheart;) ")}>
      {children}
    </button>
  );
};

export default BuyButton;

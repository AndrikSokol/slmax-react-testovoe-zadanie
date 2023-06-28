"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton: FC<DeleteButtonProps> = ({ id }) => {
  const router = useRouter();
  async function deleteSneaker() {
    try {
      await axios.delete(`http://localhost:4200/api/${id}`);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <button className="btn-red" onClick={deleteSneaker}>
      Удалить
    </button>
  );
};

export default DeleteButton;

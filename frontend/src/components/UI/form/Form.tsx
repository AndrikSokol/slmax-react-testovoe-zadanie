"use client";
import { ISneaker } from "@/types/sneaker.interface";
import axios, { AxiosError } from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";

const Form = () => {
  const initialState = {
    title: "",
    price: 0,
    description: "",
    image: "",
  };

  const pathname = usePathname();
  const router = useRouter();
  const id: string | undefined = pathname.split("/")[3];
  const [sneaker, setSneaker] = React.useState<Omit<ISneaker, "id">>(initialState);
  let photo: string = "";

  React.useEffect(() => {
    async function getSneaker() {
      try {
        const { data } = await axios.get(`http://localhost:4200/api/${id}`);
        setSneaker(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (id !== undefined) {
      getSneaker();
    }
  }, []);

  async function saveSneaker(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    try {
      console.log(sneaker);
      const response = await axios.post(`http://localhost:4200/api`, { ...sneaker, id: id });
      console.log(response);
      router.push("/");
    } catch (error: any) {
      alert(error.response.data.message as AxiosError);
    }
  }

  async function addSneaker(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4200/api", sneaker);
      console.log(response);
      router.push("/");
    } catch (error: any) {
      alert(error.response.data.message as AxiosError);
    }
  }

  function addPhoto(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setSneaker((prev) => {
      return { ...prev, image: photo };
    });
  }

  return (
    <>
      <form className="flex flex-col  min-w-[400px] max-w-xl">
        <h1 className="text-lg font-semibold  py-2">Название кроссовок:</h1>
        <input
          type="text"
          placeholder="Название"
          value={sneaker.title}
          onChange={(e) =>
            setSneaker((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        ></input>
        <h1 className="text-lg font-semibold  py-2">Описание:</h1>
        <textarea
          className="h-52"
          value={sneaker.description}
          onChange={(e) =>
            setSneaker((prev) => {
              return { ...prev, description: e.target.value };
            })
          }
        ></textarea>
        <h1 className="text-lg font-semibold  py-2">Цена:</h1>
        <input
          type="number"
          placeholder="10$"
          value={sneaker.price}
          onChange={(e) =>
            setSneaker((prev) => {
              return { ...prev, price: Number(e.target.value) };
            })
          }
        ></input>
        <div className="flex gap-4 items-center">
          <h1 className="text-lg font-semibold  py-2">Добавьте картинку с сайта </h1>
          <a className="hover:scale-[102%] underline" href="https://sportomax.com/" target="blank">
            Перейти на сайт
          </a>
        </div>

        <div className="flex gap-2 justify-between">
          <input type="text" placeholder="https://sportomax.com/" onChange={(e) => (photo = e.target.value)}></input>
          <button className="btn-blue" onClick={addPhoto}>
            Добавить
          </button>
        </div>
        <div className="w-full py-4">
          {id ? (
            <button className="w-full btn-blue" onClick={saveSneaker}>
              Сохранить
            </button>
          ) : (
            <button className="w-full btn-blue" onClick={addSneaker}>
              Добавить кроссовки
            </button>
          )}
        </div>
      </form>
      {sneaker.image && (
        <div className="border-l-4 border-blue-500">
          <img src={sneaker?.image} alt="sneaker" className="max-w-md rounded-r-md" />
        </div>
      )}
    </>
  );
};

export default Form;

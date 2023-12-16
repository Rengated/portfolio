"use client";
import { FC, useContext } from "react";
import Image from "next/image";
import sun from "../../../public/static/img/sun.svg";
import { Theme } from "@/store/theme";

export const Header: FC = () => {
  const { currentTheme, toggleTheme } = useContext(Theme);

  return (
    <section className=" w-full h-screen border-b-2 border-zinc-600 ">
      <div className="container align-center justify-center  mx-auto my-0 w-full h-full flex flex-col px-4">
        <header
          className={`flex mb-auto sticky top-0 py-10 items-center ${
            currentTheme == "black" ? "bg-black " : "bg-white"
          } `}>
          <h2 className="font-extrabold text-2xl">RENGATED DEV.</h2>
          <Image
            width={40}
            height={40}
            src={sun}
            alt="theme switch"
            onClick={toggleTheme}
            className={`ml-auto cursor-pointer ${
              currentTheme == "white" ? "invert" : ""
            }`}
          />
        </header>
        <h1 className="text-5xl mb-auto mx-auto ">
          :FRONTEND DEVELOPER PORTFOLIO
        </h1>
      </div>
    </section>
  );
};

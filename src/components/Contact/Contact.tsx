import Image from "next/image";
import git from "../../../public/static/img/git.svg";
import { FC } from "react";

export const Contact: FC = () => {
  return (
    <section className="flex justify-center py-40  border-b-2 border-zinc-600">
      <div className="container   flex flex-col items-center w-full">
        <h2 className="text-3xl mb-20 font-extrabold">contact me</h2>
        <div className="flex justify-between max-w-2xl mb-20 w-full">
          <Image
            src={git}
            className=""
            alt="icon"
          />
          <Image
            src={git}
            className=""
            alt="
            icon"
          />
          <Image
            src={git}
            className=""
            alt="icon"
          />
          <Image
            src={git}
            className=""
            alt="
            icon"
          />

          <Image
            src={git}
            className=""
            alt="icon"
          />
          <Image
            src={git}
            className=""
            alt="icon"
          />
        </div>
        <h3 className="text-base font-semibold">order of service</h3>
      </div>
    </section>
  );
};

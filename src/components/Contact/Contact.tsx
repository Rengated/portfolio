import Image from "next/image";
import git from "../../../public/static/img/git.svg";
import mail from "../../../public/static/img/email.png";
import tg from "../../../public/static/img/telegram.png";
import { FC } from "react";

export const Contact: FC = () => {
  return (
    <section className="flex justify-center py-40  border-b-2 border-zinc-600 ">
      <div className="container   flex flex-col items-center w-full">
        <h2 className="text-3xl mb-20 font-extrabold line ">contact me</h2>
        <div className="flex justify-between max-w-2xl mb-20 w-full">
          <a
            href="https://github.com/rengated"
            target="_tab">
            <Image
              src={git}
              width={40}
              height={40}
              className="invert hover:bg-white border hover:filter-none rounded-full cursor-pointer"
              alt="icon"
            />
          </a>
          <a
            href="https://telegram.me/rengated"
            target="_tab">
            <Image
              src={tg}
              width={40}
              height={40}
              className="invert hover:bg-white border hover:filter-none rounded-full cursor-pointer"
              alt="
            icon"
            />
          </a>
          <a
            href="mailto:kazievserg@yandex.ru"
            target="_tab">
            <Image
              src={mail}
              width={40}
              height={40}
              className="invert cursor-pointer"
              alt="icon"
            />
          </a>
          <a
            href="https://telegram.me/rengated"
            target="_tab">
            <Image
              src={tg}
              width={40}
              height={40}
              className="invert hover:bg-white border hover:filter-none rounded-full cursor-pointer"
              alt="
            icon"
            />
          </a>

          <a
            href="https://github.com/rengated"
            target="_tab">
            <Image
              src={git}
              width={40}
              height={40}
              className="invert hover:bg-white border hover:filter-none rounded-full cursor-pointer"
              alt="icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

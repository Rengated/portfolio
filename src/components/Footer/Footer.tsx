import Image from "next/image";
import git from "../../../public/static/img/git.svg";
import mail from "../../../public/static/img/email.png";
import tg from "../../../public/static/img/telegram.png";

export const Footer = () => {
  return (
    <footer className="flex justify-center flex-col ">
      <div className="flex justify-between  items-center px-10 py-10 w-full   ">
        <p className="font-extrabold text-md ">RENGATED</p>
        <span className="text-white font-extrabold ">@2023</span>
      </div>
      <div className="self-start flex justify-start  items-center  w-full px-10 py-5 max-sm:flex-col max-sm:items-start ">
        <a
          href="https://github.com/rengated"
          target="_tab"
          className="max-sm:mb-5">
          <Image
            src={git}
            width={30}
            height={30}
            className="invert hover:bg-white border hover:filter-none rounded-full cursor-pointer"
            alt="icon"
          />
        </a>
        <a
          href="https://telegram.me/rengated"
          className="ml-10  max-sm:ml-0 max-sm:mb-5"
          target="_tab">
          <Image
            src={tg}
            width={30}
            height={30}
            className="invert hover:bg-white border hover:filter-none rounded-full cursor-pointer"
            alt="
            icon"
          />
        </a>
        <a
          href="mailto:kazievserg@yandex.ru"
          target="_tab"
          className="ml-10   max-sm:ml-0 max-sm:mb-5">
          <Image
            src={mail}
            width={30}
            height={30}
            className="invert cursor-pointer"
            alt="icon"
          />
        </a>
        <a
          href="mailto:kazievserg@yandex.ru"
          target="_tab"
          className=" text-white font-extrabold ml-auto   max-sm:ml-0   max-sm:mb-5">
          +7(962)-746-04-08
        </a>
      </div>
    </footer>
  );
};

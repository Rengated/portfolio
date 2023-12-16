import { FC, useContext } from "react";
import Image, { StaticImageData } from "next/image";
import { Theme } from "@/store/theme";

interface HorizontalCardProps {
  title: string;
  img: StaticImageData;
  description: string;
  link: string;
}

export const HorizontalCard: FC<HorizontalCardProps> = ({
  title,
  img,
  description,
  link,
}) => {
  const { currentTheme } = useContext(Theme);

  return (
    <div
      className={`p-10 transition-all ease-in-out duration-200 basis-9/12 max-w-screen-xl w-full rounded-md mt-10 hover:scale-105 flex max-md:flex-col max-sm:p-4 ${
        currentTheme == "black"
          ? "bg-slate-50 text-black"
          : "bg-slate-700 text-white"
      }`}>
      <Image
        objectFit=""
        height={300}
        src={img}
        className="max-md:mb-7"
        alt=""
      />
      <div className="flex flex-col pl-10 items-start w-full max-md:pl-0">
        <p className="text-4xl  font-extrabold mb-3">{title}</p>
        <p className="mb-7 ">{description}</p>
        <a
          href={link}
          target="_tab"
          className={`p-3   transition-all ease-in-out duration-200  rounded-lg  mt-auto ml-auto hover:scale-105   ${
            currentTheme == "black"
              ? "text-white bg-black "
              : "text-black bg-white "
          }`}>
          <button>Go to the site</button>
        </a>
      </div>
    </div>
  );
};

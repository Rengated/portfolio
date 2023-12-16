import { FC } from "react";
import Image, { StaticImageData } from "next/image";

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
  return (
    <div className="p-8  bg-violet-950 basis-9/12 max-w-screen-xl w-full rounded-md mt-10 hover:scale-105 flex ">
      <Image
        objectFit=""
        height={300}
        src={img}
        alt=""
      />
      <div className="flex flex-col pl-10 items-start w-full">
        <p className="text-4xl text-white font-extrabold mb-3">{title}</p>
        <p className="">{description}</p>
        <a
          href={link}
          target="_tab"
          className="p-3 bg-purple-800 rounded-lg text-white mt-auto ml-auto hover:bg-transparent border-4 border-purple-800">
          <button>Go to the site</button>
        </a>
      </div>
    </div>
  );
};

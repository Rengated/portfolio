import { FC } from "react";
import { HorizontalCard } from "../HorizontalCard/HorizontalCard";
import statoola from "../../../public/static/img/statoola.png";
import movies from "../../../public/static/img/movies.png";

export const Projects: FC = () => {
  const projects = [
    {
      img: statoola,
      title: "Statoola",
      description:
        "The site is under development, I took part in designing the structure and layout of some pages.",
      link: "https://statoola.com/",
    },

    {
      img: movies,
      title: "Movies",
      description: "Test task for the company deneb",
      link: "https://rengated.github.io/movies/",
    },
  ];
  return (
    <section className="w-full flex py-20 px-10 max-md:px-5 justify-center align-center  border-b-2 border-zinc-600">
      <div className="container flex flex-col  items-center  self-center">
        <h2 className=" top-16 line mb-20 text-center flex self-center line text-3xl ">
          intresting cases
        </h2>

        {projects.map((project, index) => (
          <HorizontalCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

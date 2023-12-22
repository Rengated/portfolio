import { FC } from "react";
import { HorizontalCard } from "../HorizontalCard/HorizontalCard";
import statoola from "../../../public/static/img/statoola.png";
import movies from "../../../public/static/img/movies.png";
import years from "../../../public/static/img/90-years.png";

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
    {
      img: years,
      title: "90-years calendar",
      description:
        "Each line in this calendar represents one year of life. each cell is a week. That's how many weeks it takes to go from a newborn to a 90-year-old. This is what the time allotted to us looks like.",
      link: "http://rengated-dev.ru/90years",
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

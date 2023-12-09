"use client";
import Carousel from "react-multi-carousel";
import { FC } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import itinit from "../../../public/static/img/itinit.png";
import statoola from "../../../public/static/img/statoola.png";
import crypto from "../../../public/static/img/crypto.png";
import movies from "../../../public/static/img/movies.png";

export const Projects: FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 350 },
      items: 0.5,
    },
  };

  const projects = [
    { img: crypto, title: "crypto" },
    { img: statoola, title: "statoola" },
    { img: itinit, title: "itinit" },
    { img: movies, title: "movies" },
  ];
  return (
    <section className="w-full flex h-screen justify-center align-center  border-b-2 border-zinc-600">
      <div className="container flex flex-col  align-center  self-center">
        <h2 className=" top-16 line mb-20 text-center flex self-center line text-3xl">
          intresting cases
        </h2>
        <Carousel
          ssr={true}
          centerMode={true}
          autoPlaySpeed={1500}
          shouldResetAutoplay={true}
          infinite={true}
          autoPlay={true}
          responsive={responsive}>
          {projects.map((item, index) => (
            <ProjectCard
              key={index}
              {...item}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

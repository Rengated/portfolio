"use client";
import Carousel from "react-multi-carousel";
import { FC } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export const Projects: FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <section className="w-full flex h-screen justify-center align-center  border-b-2 border-zinc-600">
      <div className="container flex flex-col  align-center relative self-center">
        <h2 className="absolute -left-32 -rotate-90 top-16 text-2xl line ">
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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Carousel>
      </div>
    </section>
  );
};

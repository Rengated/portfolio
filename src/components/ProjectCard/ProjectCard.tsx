import { FC } from "react";
import Image from "next/image";
import project from "../../../public/static/img/project.png";

interface ProjectProps {
  title: string;
  img: any;
}
export const ProjectCard: FC<ProjectProps> = (props) => {
  return (
    <div className="mr-2">
      <div className="mb-4">
        <Image
          src={props.img}
          alt="project name"
        />
      </div>
      <p className="font-extrabold">{props.title}</p>
    </div>
  );
};

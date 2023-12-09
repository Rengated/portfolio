import { FC } from "react";
import Image from "next/image";
import project from "../../../public/static/img/project.png";

export const ProjectCard: FC = () => {
  return (
    <div>
      <div className="mb-4">
        <Image
          src={project}
          alt="project name"
        />
      </div>
      <p className="font-extrabold">project</p>
    </div>
  );
};

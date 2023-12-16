import { Theme } from "@/store/theme";
import { FC, useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export const TimeLine: FC = () => {
  const { currentTheme } = useContext(Theme);

  const styles = {
    contentArrowStyle: { display: "none" },
    contentStyle: { background: "none", border: "none", borderRadius: 0 },
  };
  return (
    <section className=" border-b-2 border-zinc-600 pt-10 pb-40">
      <VerticalTimeline
        lineColor={`${currentTheme == "black" ? "white" : "black"}`}>
        <VerticalTimelineElement
          className="bg-none"
          visible
          date="October 2021 — October 2023"
          iconStyle={{
            background: "#22c55d",
          }}
          {...styles}>
          <div className="flex flex-col">
            <span className="text-3xl text-green-500 mb-5">
              Matryoshka studio
            </span>
            <span className="text-xl font-extrabold mb-1">
              Frontend developer
            </span>
            <span className="text-md font-medium mb-2">Responsibilities</span>
            <span className="font-extralight">
              I was involved in front-end development, wrote projects for the
              internal structure of the company. I also managed to work with
              parsers to prepare data for training a neural network.
            </span>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible
          date="October 2023 - now"
          iconStyle={{ background: "#0ca5e9" }}
          {...styles}>
          <div className="flex flex-col">
            <span className="text-3xl text-sky-500 mb-5">Deneb</span>
            <span className="text-xl font-extrabold mb-1">
              Frontend developer
            </span>
            <span className="text-md font-medium mb-2">Responsibilities</span>
            <span className="font-extralight">
              I am developing front-end and back-end, and deploying applications
              on the server. I use Next.js, Nest.js, Docker, Nginx
            </span>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

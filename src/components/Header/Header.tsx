import { FC } from "react";
import bg from "../../assets/video/bg.mp4";

export const Header: FC = () => {
  return (
    <section className="pt-8 elative w-full h-screen border-b-2 border-zinc-600  css-current-storage">
      <div className="container align-center justify-center  mx-auto my-0 w-full h-full flex flex-col">
        <h2 className="font-extrabold text-2xl mb-auto">RENGATED DEV.</h2>
        <h1 className="text-5xl mb-auto mx-auto">
          :FRONTEND DEVELOPER PORTFOLIO
        </h1>
      </div>
    </section>
  );
};

import { FC } from "react";
import Image from "next/image";
import me from "../../../public/static/img/real-me.jpg";

export const About: FC = () => {
  return (
    <section className="flex justify-center align-center  border-b-2 border-zinc-600">
      <div className="container flex flex-col pt-20 pb-20 justify-center items-center">
        <h2 className="mb-20 text-2xl font-extrabold mr-auto">about me</h2>
        <div className="flex mb-20 font-extrabold">
          <Image
            src={me}
            className="rounded-full avatar"
            alt="avatar"
          />
          <div className="ml-16">
            <p className="text-2xl mb-3">Kaziev Sergey</p>
            <p className="max-w-3xl mb-5 font-extralight text-sm">
              I m more than one in love for Front-End. My experience with
              interface design turn me one extremely criterious with alignments,
              margins, colors and a lot other resorces in CSS. Today I work with
              projects in a whole world. Codifiding in my home office, in a
              quiet interior of São Paulo, Brazil.
            </p>
            <p>instagram github email</p>
          </div>
        </div>
        <div className="flex justify-between w-full px-10 mb-20">
          <div>
            <p className="mb-2 font-extrabold">Interface & Design</p>
            <p className="font-extralight text-xs">
              Briefing, wireframe, UX, UI and branding.
            </p>
          </div>
          <div>
            <p className="mb-2 font-extrabold">html & css</p>
            <p className="font-extralight text-xs">
              Responsive websites with fast loading.
            </p>
          </div>
          <div>
            <p className="mb-2 font-extrabold">React.js</p>
            <p className="font-extralight text-xs">
              Build your system with node.js.
            </p>
          </div>
          <div>
            <p className="mb-2 font-extrabold">WordPress</p>
            <p className="font-extralight text-xs">
              Create your e-commerce or blog with PHP.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between px-20 w-full">
          <div>
            <p className="font-extrabold  mb-2 text-base">
              I ve had experiences with
            </p>
            <p className="font-extralight mb-2 text-sm">Firebase Database</p>
            <p className="font-extralight mb-2 text-sm">MySQL Database</p>
            <p className="font-extralight mb-2 text-sm">
              GIT, GitHub, Bitbucket
            </p>
            <p className="font-extralight mb-2 text-sm">Coding PHP</p>
            <p className="font-extralight mb-2 text-sm">
              Figma, Adobe XD, Sketch
            </p>
            <p className="font-extralight mb-2 text-sm">CSS Preprocessors</p>
            <p className="font-extralight mb-2 text-sm">Digital Marketing</p>
            <p className="font-extralight mb-2 text-sm">
              Coding Python (Django)
            </p>
          </div>
          <div>
            <p className="font-extrabold  text-base mb-2">
              I have years of experience with
            </p>
            <p className="font-extralight mb-2text-sm">Coding HTML5</p>
            <p className="font-extralight  mb-2 text-sm">Coding CSS3</p>
            <p className="font-extralight  mb-2 text-sm">Coding WordPress</p>
            <p className="font-extralight  mb-2 text-sm">Coding JavaScript</p>
            <p className="font-extralight  mb-2 text-sm">Using Elementor</p>
            <p className="font-extralight  mb-2 text-sm">Using Adobe Package</p>
            <p className="font-extralight  mb-2 text-sm">
              Creating Brand and Logo
            </p>
            <p className="font-extralight  mb-2 text-sm">
              Creating User Interface
            </p>
          </div>
          <div>
            <p className="font-extrabold  mb-2 text-base">
              I work and study about
            </p>
            <p className="font-extralight mb-2 text-sm">Coding React.js</p>
            <p className="font-extralight mb-2 text-sm">Coding CSS3</p>
            <p className="font-extralight mb-2 text-sm">Coding JavaScript</p>
            <p className="font-extralight mb-2 text-sm">Coding TypeScript</p>
            <p className="font-extralight mb-2 text-sm">
              Studying Node.js basics
            </p>
            <p className="font-extralight mb-2 text-sm">Studying API RESTful</p>
            <p className="font-extralight mb-2 text-sm">
              Studying User Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

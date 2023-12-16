import { FC } from "react";
import Image from "next/image";
import me from "../../../public/static/img/real-me.jpg";

export const About: FC = () => {
  // border-b-2 border-zinc-600
  return (
    <section className="flex justify-center align-center  css-current-storage ">
      <div className="container flex flex-col pt-20 pb-20 justify-center items-center px-4">
        <h2 className="mb-20 text-2xl font-extrabold mr-auto line">about me</h2>
        <div className="flex mb-20 flex-col items-center font-extrabold  lg:flex-row">
          <Image
            src={me}
            className="rounded-full avatar mb-4"
            alt="avatar"
          />
          <div className="flex flex-col items-center justify-center lg:pl-20 lg:items-start">
            <p className="text-2xl mb-3">Kaziev Sergey</p>
            <p className="max-w-3xl mb-5 font-extralight text-sm w-full">
              Armed with a diverse skill set, I bring concepts to life using the
              latest frontend technologies such as HTML5, CSS3, and JavaScript
              frameworks React.js. I am also proficient in responsive web
              design, ensuring that my projects look amazing on all devices and
              screen sizes. <br></br>
              <span>Location: Moscow, Russia</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full  flex-wrap  mb-20">
          <div className="mb-4 basis-52">
            <p className="mb-2 font-extrabold">Interface & Design</p>
            <p className="font-extralight text-xs">make it selling</p>
          </div>
          <div className="mb-4 basis-52">
            <p className="mb-2 font-extrabold">html & css</p>
            <p className="font-extralight text-xs">
              Responsive websites with fast loading.
            </p>
          </div>
          <div className="mb-4 basis-52">
            <p className="mb-2 font-extrabold">React.js</p>
            <p className="font-extralight text-xs">Build your SPA site</p>
          </div>
          <div className="mb-4 basis-52">
            <p className="mb-2 font-extrabold">SSR</p>
            <p className="font-extralight text-xs">Create your site with SEO</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between  w-full">
          <div className="mb-3 ">
            <p className="font-extrabold  mb-2 text-base">
              I ve had experiences with
            </p>
            <p className="font-extralight mb-2 text-sm">* Docker</p>
            <p className="font-extralight mb-2 text-sm">* Nginx </p>
            <p className="font-extralight mb-2 text-sm">* Certbot</p>
            <p className="font-extralight mb-2 text-sm">* Metamask SDK</p>
            <p className="font-extralight mb-2 text-sm">* Figma</p>
            <p className="font-extralight mb-2 text-sm">* Postgres </p>
          </div>
          <div className="mb-3 basis-72">
            <p className="font-extrabold  text-base mb-2">
              I have years of experience with
            </p>
            <p className="font-extralight  mb-2 text-sm">* HTML5</p>
            <p className="font-extralight  mb-2 text-sm">* CSS3</p>
            <p className="font-extralight  mb-2 text-sm">* CSS/SCSS/.modules</p>
            <p className="font-extralight  mb-2 text-sm">* JavaScript</p>
            <p className="font-extralight  mb-2 text-sm">* Redux</p>
            <p className="font-extralight  mb-2 text-sm">* Next/React</p>
            <p className="font-extralight  mb-2 text-sm">* Tailwind</p>
            <p className="font-extralight  mb-2 text-sm">* REST</p>
          </div>
          <div className="basis-72">
            <p className="font-extrabold  mb-2 text-base">
              I work and study about
            </p>
            <p className="font-extralight mb-2 text-sm">* Nest</p>
            <p className="font-extralight mb-2 text-sm">* Vue</p>
            <p className="font-extralight mb-2 text-sm">* GraphQl</p>
            <p className="font-extralight mb-2 text-sm">* Prisma</p>
            <p className="font-extralight mb-2 text-sm">* DataBases</p>
            <p className="font-extralight mb-2 text-sm">* ...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

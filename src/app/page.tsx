"use client";
import { Header } from "@/components/Header/Header";
import { Projects } from "@/components/Projects/Projects";
import { About } from "@/components/About/About";
import { Footer } from "@/components/Footer/Footer";
import { Theme } from "@/store/theme";
import { useContext } from "react";
import "react-vertical-timeline-component/style.min.css";
import { TimeLine } from "@/components/TimeLine/TimeLine";

export default function Home() {
  const { currentTheme } = useContext(Theme);
  return (
    <main
      className={`${
        currentTheme == "black" ? "bg-black text-white" : "bg-white text-black"
      } relative`}>
      <Header />
      {/* <Projects /> */}
      <About />
      <TimeLine />
      <Footer />
    </main>
  );
}

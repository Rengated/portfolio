import { Header } from "@/components/Header/Header";
import { Projects } from "@/components/Projects/Projects";
import { About } from "@/components/About/About";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}

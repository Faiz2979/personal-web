import About from '@/component/Section/About';
import Certificate from '@/component/Section/Certificate';
import Footer from '@/component/Section/Footer';
import Hero from '@/component/Section/Hero';
import Project from '@/component/Section/Project';
import Skills from '@/component/Section/Skill';
import TypewriterProvider from "@/component/parts/Typewriter";

export default function Home() {
  return (
    <div className="">
      <TypewriterProvider>

        <Hero></Hero>
        <About></About>
        <Project></Project>
        <Skills></Skills>
        <Certificate></Certificate>
        <Footer></Footer>
      </TypewriterProvider>
      </div>
  );
}

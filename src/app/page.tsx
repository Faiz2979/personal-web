import About from '@/component/About';
import Certificate from '@/component/Certificate';
import Hero from '@/component/Hero';
import Project from '@/component/Project';
import Skills from '@/component/Skill';
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
      </TypewriterProvider>
      </div>
  );
}

import About from '@/component/About';
import Hero from '@/component/Hero';
import Project from '@/component/Project';
import Skills from '@/component/Skill';
export default function Home() {
  return (
    <div className="">
        <Hero></Hero>
        <About></About>
        <Project></Project>
        <Skills></Skills>
      </div>
  );
}

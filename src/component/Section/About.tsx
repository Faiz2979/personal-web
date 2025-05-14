"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Section from "../../global/Wrapper";
import { useTypewriterStrings } from "../parts/Typewriter";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  // Call useTypewriterStrings at the top level
  const strings = useTypewriterStrings();

  return (
    <Section id="about" className=" bg-[#c51f1f] flex py-[120px]" >
      <div className="flex md:items-center items-start justify-center gap-10 md:gap-0 md:justify-between flex-col md:flex-row" data-aos="fade-right">
        <div className="w-[70%]">
          <h1 className="text-secondary oxanium-bold text-3xl md:text-6xl w-full">
            A Passionate
            <br />
            <span className="oxanium oxanium-bold whitespace-nowrap" >
              <Typewriter
                options={{
                  strings: strings,  // Use strings here
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
        </div>
        <div className="w-[85%] md:w-1/2">
          <p className="oxanium text-md md:text-lg oxanium-regular">
            A Passionate<span className="hover:underline hover:text-rose-400 hover:underline-sky-400 underline-offset-2 transition-colors oxanium-bold duration-500 p-2 drop-shadow hover:decoration-[#e32525]">Web Developer</span>and<span className="hover:underline hover:text-cyan-400 hover:underline-sky-400 underline-offset-2 transition-colors oxanium-bold duration-500 p-2">Game Developer</span> who loves to create
            something new. I have experience in Web Development and Game
            Development. I have been learning on Game Development for 2 years and
            Web Development for 1 year. I have a strong foundation in Web Development
            Because of my school taught about it.
          </p>
        </div>
      </div>
    </Section>
  );
}

"use client";
import { useEffect } from "react";
import Section from "../global/Wrapper";
var Typewriter = require("typewriter-effect/dist/core");

export default function About() {
  useEffect(() => {
    new Typewriter("#title", {
      strings: ["Web Developer", "Game Developer","Aleph Null"],
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <Section id="about" className=" bg-color flex py-[120px]">
      <div className="flex md:items-center items-start justify-center gap-10 md:gap-0 md:justify-between flex-col md:flex-row">
        <div className="w-[40%]">
          <h3 className="text-secondary oxanium-bold text-3xl md:text-6xl w-full">
            A Passionate
            <br />
            <span className="oxanium oxanium-bold" id="title"></span>
          </h3>
        </div>
        <div className="w-[85%] md:w-1/2">
          <p className="oxanium text-md md:text-lg oxanium-regular">
            A Passionate<span className="hover:underline hover:text-cyan-400 hover:underline-sky-400 underline-offset-2 transition-colors oxanium-bold duration-500 p-2">Web Developer</span>and<span className="hover:underline hover:text-cyan-400 hover:underline-sky-400 underline-offset-2 transition-colors oxanium-bold duration-500 p-2">Game Developer</span> who loves to create
            something new. I have experience in Web Development and game
            development. I have been learning on Game Development for 2 years and
            Web Development for 1 year. I have a strong foundation in Web Development
            Because of my school taught about it.
          </p>
        </div>
      </div>
    </Section>
  );
}
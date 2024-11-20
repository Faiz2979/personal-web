"use client"
import Image from "next/image";
import { useEffect } from "react";
import Section from "../global/Wrapper";
var Typewriter = require("typewriter-effect/dist/core");

export default function Hero() {
  useEffect(() => {
    const typewriterStrings = ["Web Developer", "Game Developer", "ℵ"];
    typewriterStrings.sort(() => Math.random() - 1);
    new Typewriter("#title", {
      strings: typewriterStrings,
      autoStart: true,
      loop: true,
    });
  }, []);
  return (
    <Section
      id="hero"
      className="relative h-[100vh] flex justify-center items-center overflow-hidden py-[72px] bg-[#02050e]"
      data-aos="">
      <div className="flex flex-col md:flex-row items-center md:gap-48 sm:gap-32 gap-8">
        <div className="flex justify-center items-center">
          <Image
            src={"/assets/sementara.jpg"}
            alt="myProfilePicture"
            className="object-cover rounded-full h-[60%] sm:h-[70%] md:h-[90%] w-auto"
            data-aos="flip-up"
            width={400}
            height={800}
          />
        </div>
        <div className="text-white z-30 oxanium text-left">
          <h2 className="oxanium-semibold text-3xl sm:text-4xl md:text-8xl">
            Hello Guys!
            <br /> I'm Faiz
          </h2>
          <h3 className="text-4xl sm:text-4xl md:text-6xl oxanium-bold">
            A <span id="title" className="text-[#3864e8] inline-block min-w-[200px]"></span>
          </h3>
        </div>
      </div>
    </Section>
  );
}

"use client"
import { Download } from "lucide-react"
import Image from "next/image"
import Typewriter from "typewriter-effect"
import Section from "../../global/Wrapper"
import { useTypewriterStrings } from "../parts/Typewriter"

export default function Hero() {
  const strings = useTypewriterStrings()

  return (
    <Section
      id="hero"
      className="relative h-[100vh] flex justify-center items-center overflow-hidden py-[72px] bg-[#0e0202]"
    >
      <div className="flex flex-col md:flex-row items-center md:gap-48 sm:gap-32 gap-8">
        {/* Left column - CV Image */}
        <div className="flex flex-col items-center" data-aos="flip-up">
          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-[#1f44c5]/20">
            <Image
              src="/assets/CV.svg"
              alt="My CV"
              width={400}
              height={566}
              className="w-auto h-auto max-h-[70vh] transition-all duration-500 hover:scale-[1.02]"
              priority
            />
            {/* Gradient overlay at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0e0202] to-transparent"></div>

          </div>
          <a
            href="/assets/CV.pdf"
            download
            className="mt-4 bg-[#e83838] text-white px-6 py-3 rounded-lg hover:bg-[#b52b2b] transition duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/20 transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Download size={18} />
            Download CV
          </a>
          {/* Download button */}

        </div>

        {/* Right column - Text content */}
        <div className="text-white z-30 oxanium text-left" data-aos="fade-left" data-aos-delay="100">
          {/* Profile picture above the text */}
          <div className="flex justify-center mb-6" data-aos="flip-up" data-aos-delay="150">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e83838] to-[#c51f1f] blur-md opacity-70 animate-pulse"></div>
              <Image
                src="/assets/mccut.jpg"
                alt="myProfilePicture"
                className="object-cover rounded-sm relative z-10"
                width={400}
                height={400}
              />
            </div>
          </div>

          <h2 className="oxanium-semibold text-3xl sm:text-4xl md:text-7xl">
            HI!
            <br /> I am Faiz
          </h2>
          <h3 className="text-3xl sm:text-3xl md:text-7xl oxanium-bold">
            A{" "}
            <span className="text-[#e83838] inline-block w-[600px]">
              <Typewriter options={{ strings, autoStart: true, loop: true, wrapperClassName: "inline-block" }} />
            </span>
          </h3>
        </div>
      </div>
    </Section>
  )
}

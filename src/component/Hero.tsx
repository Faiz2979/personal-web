import Image from "next/image";
import Section from "../global/Wrapper";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative h-[100vh] flex justify-center items-center overflow-hidden py-[72px"
    >
      <div className="flex flex-col md:flex-row items-center gap-64">
        <div className="flex justify-center items-center">
          <Image
            src={"/assets/sementara.jpg"}
            alt="Faiz"
            className="object-cover rounded-full h-[60%] sm:h-[70%] md:h-[90%] w-auto"
            width={400}
            height={800}
          />
        </div>
        <div className="text-white z-30 oxanium">
          <h2 className="oxanium-semibold text-4xl sm:text-6xl">
            Hello Guys!
            <br /> I'm Faiz
          </h2>
          <div className="flex justify-center items-center px-5 py-2 rounded-full bg-color mt-4">
            <h3 className="text-white text-xs sm:text-base oxanium-bold">
              Web Developer & Game Developer
            </h3>
          </div>
        </div>
      </div>
    </Section>
  );
}

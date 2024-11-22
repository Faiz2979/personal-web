    import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import {
    SiExpress,
    SiMysql,
    SiNodemon,
    SiPrisma,
    SiReact,
    SiTypescript
} from "react-icons/si";
import Section from "../global/Wrapper";

    const skills = [
    
    <RiNextjsFill />,
    <SiNodemon />,
    <SiReact />,
    <SiTypescript />,
    <SiPrisma />,
    <SiMysql />,
    <SiExpress />,
    ];

    export default function Skills() {
    return (
        <Section id="skills" className="flex flex-col items-center gap-7 pt-10 bg-[#1f44c5] ">
            <div data-aos="fade-up">

        <h1 className="text-center text-white font-semibold text-2xl lg:text-4xl">
            Skills
        </h1>
        <div className="flex gap-5 lg:gap-7 text-4xl md:text-6xl text-white flex-wrap items-center justify-center">
            {skills.map((skill, i) => (
                <React.Fragment key={i}>{skill}</React.Fragment>
            ))}
        </div>
            </div>
        </Section>
    );
    }
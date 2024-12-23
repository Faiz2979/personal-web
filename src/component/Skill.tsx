    import React from "react";

import { RiNextjsFill } from "react-icons/ri";
import {
    SiExpress,
    SiMysql,
    // SiNodemon,
    SiPrisma,
    SiReact,
    SiSequelize,
    SiTypescript,
    SiUnity,
} from "react-icons/si";
import Section from "../global/Wrapper";

    const skills = [
    <SiUnity key="unity" />,
    <RiNextjsFill key="nextjs" />,
    // <SiNodemon key="nodemon" />,
    <SiReact key="react" />,
    <SiTypescript key="typescript" />,
    <SiMysql key="mysql" />,
    <SiExpress key="express" />,
    <SiPrisma key="prisma" />,
    <SiSequelize key="sequelize"/>,
    ];

    export default function Skills() {
    return (
        <Section id="skills" className="flex flex-col items-center pt-4 gap-7 bg-[#02050e]">
            <div data-aos="fade-up">
                <h1 className="text-center text-white font-semibold text-2xl lg:text-4xl mb-5">
                    Skills
                </h1>

                <div className="flex gap-5 lg:gap-7 text-3xl md:text-5xl text-white flex-wrap items-center justify-center">
                    {skills.map((skill, i) => (
                    <React.Fragment key={i}>
                        {skill}
                    </React.Fragment>
                    ))}
                </div>
            </div>
        </Section>
    );
    }
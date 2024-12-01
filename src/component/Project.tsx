import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import Section from "../global/Wrapper";
import { ProjectCard } from "./parts/Card";

const projects = [
    {
        name: "Personal Website",
        image: "personal-website.png", // Sesuaikan dengan nama file
        href: "#",
        stack: [
            <RiNextjsFill key="nextjs" />,
            <SiTypescript key="typescript" />,
        ],
    },
];

    export default function Projects() {
    return (
        <Section id="projects" className="flex flex-col items-center gap-10 oxanium-regular ">
        <h1 className="text-center text-white font-semibold text-2xl md:text-4xl" data-aos="fade-up">
            Featured Projects
        </h1>
        <div className="w-full flex flex-wrap gap-4 items-center justify-center " data-aos="fade-up">
            {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
            ))}
        </div>
        </Section>
    );
    }
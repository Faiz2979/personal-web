"use client"
import { ProjectCard } from "@/component/parts/Card";
import Section from "@/global/Wrapper";
import Link from "next/link";
import { useState } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { SiCloudinary, SiMysql, SiNodedotjs, SiSequelize, SiThemoviedatabase, SiTypescript } from "react-icons/si";


export const projectCategory = {
    Web: [
        {
        id:"school-library-api",
        name: "School Library API",
        image: "school-library-api.png", // Sesuaikan dengan nama file
        href: "/projects/school-library-api",
        stack: [
            <SiTypescript key="typescript" />,
            <SiNodedotjs key="nodejs" />,
            <SiMysql key="mysql" />,
            <SiSequelize key="sequelize" />,
            
        ],
        detail: "This is a school library API that I made using Node.js, TypeScript, MySQL, and Sequelize. This API is made to manage books and students in a school library.",
    },
    {
        id:"personal-website",
        name: "Personal Website",
        image: "personal-website.png", // Sesuaikan dengan nama file
        href: "/projects/personal-website",
        stack: [
            <RiNextjsFill key="nextjs" />,
            <SiTypescript key="typescript" />,
        ],
        detail: "This is my personal website that I made using Next.js and TypeScript. This website is made to showcase my projects and skills.",
    },
    {
        id:"movie-app",
        name: "Movie App",
        image: "movie-app.png", // Sesuaikan dengan nama file
        href: "/projects/movie-app",
        stack: [
            <RiNextjsFill key="nextjs" />,
            <SiTypescript key="typescript" />,
            <SiThemoviedatabase key="tmdb" />,
        ],
        detail: "This is a movie app that uses The Movie Database API to display movies and TV shows. This app is made using Next.js and TypeScript.",
    },
    {
        id:"cat-management-system",
        name: "Cat Management System",
        image: "cat-management-system.png", // Sesuaikan dengan nama file
        href: "/projects/cat-management-system",
        stack: [
            
            <RiNextjsFill key="nextjs" />,
            <SiTypescript key="typescript" />,
            <SiCloudinary key="cloudinary" />,
            <SiMysql key="mysql" />,
            <SiSequelize key="prisma" />,
        ]
    }
    ],

    Game: [
        
    ],
    
    Frontend: [

    ],

};
    

export default function Home () {
    const [category, setCategory] = useState<keyof typeof projectCategory>("Frontend");
    const projects = projectCategory[category];
    return (
        <Section id="detailed_projects" className="bg-[#02050e]">
            <div className="flex flex-col items-center gap-10">
                
                <span>
                <h1 className="text-center text-white font-semibold text-2xl md:text-4xl">
                    Projects
                </h1> 
                <Link href="/" className="oxanium oxanium-bold hover:text-blue-400 underline-offset-4 hover:underline decoration-[#3864e8] transition-all duration-300"> Back to Main Page</Link></span>
                <div className="flex gap-4 oxanium oxanium-semibold">
                    {Object.keys(projectCategory).map((key) => (
                        <button
                            key={key}
                            onClick={() => setCategory(key as keyof typeof projectCategory)}
                            className={`${
                                category === key
                                    ? "bg-[#3864e8] text-white"
                                    : "bg-white text-black"
                            } px-4 py-2 rounded-md w-40 hover:bg-[#3864e8] hover:text-white transition-all duration-300`}>
                        
                            {key}
                        </button>
                    ))}
                </div>
                <div className="w-full flex flex-wrap gap-4 items-center justify-center">
                    <div className="w-full flex flex-wrap gap-4 items-center justify-center " data-aos="fade-up">
                                {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                                ))}
                            </div>
                </div>
            </div>
        </Section>
    )
}
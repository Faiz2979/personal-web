"use client"
import Section from "@/global/Wrapper";
import { useState } from "react";


const projectCategory = {
    Backend: [
        
    ],

    Frontend: [
        
    ],

    Game: [
        
    ],

};
    


export default function Home () {
    const [category, setCategory] = useState<string>("Backend");


    return (
        <Section id="detailed_projects" className="bg-[#02050e]">
            <div className="flex flex-col items-center gap-10">
                <h1 className="text-center text-white font-semibold text-2xl md:text-4xl">
                    Projects
                </h1>
                <div className="flex gap-4 oxanium oxanium-semibold">
                    {Object.keys(projectCategory).map((key) => (
                        <button
                            key={key}
                            onClick={() => setCategory(key)}
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
                    
                </div>
            </div>
        </Section>
    )
}
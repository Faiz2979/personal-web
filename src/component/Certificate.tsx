    "use client";
    import { useEffect, useState } from "react";
import Section from "../global/Wrapper";
import CertCard from "./parts/Card";

    const certs = {
    lang: [
        // {
        // name: "TOEIC",
        // image: "toeic.jpg",
        // href: "https://drive.google.com/file/d/1krU69GNOAml_z_kjTGNAgvBYQc1YmfvQ/view?usp=sharing",
        // pos: "English",
        // },
        {
        name: "UKBI",
        image: "ukbi.jpg",
        href: "https://drive.google.com/file/d/1IpGh5ptaPX_HdmbtYb63dqFWHJjRBX67/view?usp=drive_link",
        pos: "Indonesian",
        },
    ],
    comp: [
        {
        name: "DISCO Competition Finalist",
        image: "DISCO-Finalist.png",
        href: "https://drive.google.com/file/d/1xCOqx_0tZSg0bS33l31FnEiB4jP372i7/view?usp=drive_link"
        },
        {
            name: "MAGE X Game Development Finalist",
            image: "FINALIS-MAGEX.jpg",
            href: "https://drive.google.com/file/d/1tBi59gem4j-zG8lTMC8yElHzcVw-Pflp/view?usp=drive_link"
        }
    ],

    };

    export default function Certificates() {
    const [index, setIndex] = useState<number>(0 | 1);

    useEffect(() => {
        setIndex(0);
    }, []);

    return (
        <Section
        id="Certificates"
        className="flex justify-center flex-col items-center gap-10 overflow-hidden bg-[#1f44c5]"
        >
        <h1 className="text-center text-primary font-semibold text-2xl md:text-4xl">
            Certificates
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <button
            onClick={() => setIndex(0)}
            className={`border border-spacing-10 oxanium-bold px-4 py-2 rounded-xl ${
                index === 0
                ? "bg-white text-[#1f44c5]"
                : "bg-transparent  text-white]"
            } hover:bg-[#1f44c5] hover:text-white transition-all duration-300`}
            >
            Competition
            </button>
            <button
            onClick={() => setIndex(1)}
            className={`border border-primary px-4 oxanium-bold py-2 rounded-xl ${
                index === 1
                ? "bg-white text-[#1f44c5]"
                : "bg-transparent  text-white]"
            } hover:bg-[#1f44c5] hover:text-white transition-all duration-300`}
            >
            Language
            </button>
        </div>
        <div
            className={`w-full flex-wrap justify-center gap-4 z-30 duration-300 transition-all ${
            index === 1 ? "flex" : "hidden"
            }`}
        >
            {certs.lang.map((cert, index) => (
            <CertCard key={cert.name} {...cert} />
            ))}
        </div>
        <div
            className={`w-full flex-wrap justify-center gap-4 z-30 duration-300 transition-all ${
            index === 0 ? "flex" : "hidden"
            }`}
        >
            {certs.comp.map((cert) => (
            <CertCard key={cert.name} {...cert} />
            ))}
        </div>
        </Section>
    );
    }
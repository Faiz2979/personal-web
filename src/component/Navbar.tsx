"use client";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

interface Socials {
  label: ReactNode;
  href: string;
}

const socials: Socials[] = [
  {
    label: (
      <FaGithub className="text-white group-hover:text-black duration-300 transition-all" />
    ),
    href: "https://github.com/Faiz2979",
  },
  {
    label: (
      <FaLinkedin className="text-white group-hover:text-black duration-300 transition-all" />
    ),
    href: "https://linkedin.com/in/faizannabil",
  },
  {
    label: (
      <FaInstagram className="text-white group-hover:text-black duration-300 transition-all" />
    ),
    href: "https://instagram.com/wisefaiz",
  },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`px-[30px] lg:px-[100px] py-[5px] flex items-center justify-between h-[70px] transition-all fixed w-full duration-300 z-[999] overflow-hidden`}
    >
      <Link
        href={"/"}
        className="text-white z-10 text-4xl font-semibold leading-none inline-flex items-end gap-[2px]"
      >
        {/* Faiz <span className="w-3 h-3 rounded-full bg-[#201cf8]"></span> */}
      </Link>
      <div className="flex z-10 items-center gap-3">
        {socials.map((social) => (
          <Link
            href={social.href}
            key={social.href}
            target="_blank"
            className="p-2 rounded-full flex items-center justify-center border border-white bg-transparent transition-all outline-1 duration-300 group hover:bg-white"
          >
            {social.label}
          </Link>
        ))}
      </div>
      <div
        className={`absolute w-full h-full left-0 top-0 z-0 transition-all duration-300 ${scrollY > 100? "bg-[#b9cefc] bg-opacity-20 backdrop-blur-sm": "bg-transparent"}`}
      ></div>
    </nav>
  );
}
import { FaGithub, FaInstagram, FaItchIo, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto p-10">
            <div className="oxanium oxanium-semibold text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-sm md:text-md lg:text-4xl">Contact me at faizannabil877@gmail.com</h1>
                <p className="text-xs md:text-md">© 2024 Muhammad Faiz Annabil</p>
            </div>
                {/* <Link href="/button-gallery" className="hover:outline outline-blue-500 p-2 rounded-md oxanium oxanium-bold">Button Gallery</Link> */}
            <div id="iconButton" className="flex flex-row md:flex-col lg:flex-row gap-2 md:gap-6">
                <a
                    className="flex items-center justify-center hover:text-blue-500"
                    href="https://github.com/faiz2979">
                    <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <a
                    className="flex items-center justify-center hover:text-blue-500"
                    href="https://www.linkedin.com/in/faizannabil/">
                    <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <a
                    className="flex items-center justify-center hover:text-blue-500"
                    href="https://flamexq.itch.io/">
                    <FaItchIo className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <a
                    className="flex items-center justify-center hover:text-blue-500"
                    href="https://www.instagram.com/wisefaiz/">
                    <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
                </a>
            </div>
        </div>
    );
}

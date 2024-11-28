import { FaGithub, FaInstagram, FaItchIo, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="flex items-center justify-between w-full h-24 p-20">
            <div className="oxanium oxanium-semibold">
                <h1 className="text-4xl">Contact me at faizannabil877@gmail.com</h1>
                <p>© 2021 Muhammad Faiz Annabil</p>
            </div>
            <div id="iconButton" className="flex flex-row gap-4">
                <a
                    className="flex items-center justify-center hover:text-blue-500"
                    href="https://github.com/faiz2979">
                    <FaGithub className="w-8 h-8" />
                </a>
                <a
                    className="flex items-center justify-center hover:text-blue-500"
                    href="https://www.linkedin.com/in/faizannabil/">
                    <FaLinkedin className="w-8 h-8" />
                </a>
                <a
                    className="flex items-center justify-center hover:text-blue-500"
                    href="https://flamexq.itch.io/">
                    <FaItchIo className="w-8 h-8" />
                </a>
                <a
                    className="flex items-center justify-center hover:text-blue-500"
                    href="https://flamexq.itch.io/">
                    <FaInstagram className="w-8 h-8" />
                </a>
            </div>

        </div>
    );
}
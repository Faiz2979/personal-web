import { RiNextjsFill } from "react-icons/ri";
import { SiCloudinary, SiPrisma, SiTailwindcss, SiThemoviedatabase, SiTypescript } from "react-icons/si";

const projectsFeatured = [
    {
        name: "Personal Website",
        image: "personal-website.png", // Sesuaikan dengan nama file
        href: "#",
        stack: [
            <RiNextjsFill key="nextjs" />,
            <SiTailwindcss/>,
            <SiTypescript key="typescript" />,
        ],
    },
    {
        name: "Movie App",
        image: "movie-app.png", // Sesuaikan dengan nama file
        href: "movie.faizannabil.me",
        stack: [
            <RiNextjsFill key="nextjs" />,
            <SiTypescript key="typescript" />,
            <SiTailwindcss/>,
            <SiThemoviedatabase key="tmdb" />,
        ],
    },

    {
        name: "Cat Management System",
        image: "cat-management-system.png", // Sesuaikan dengan nama file
        href: "https://staging-cat-management-system.vercel.app/",
        stack: [
            <RiNextjsFill key="nextjs" />,
            <SiTailwindcss/>,
            <SiTypescript key="typescript" />,
            <SiCloudinary key="cloudinary" />,
            <SiPrisma key="prisma" />
        ],
    },
];

export { projectsFeatured };

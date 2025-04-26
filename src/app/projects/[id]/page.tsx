'use client'

import Link from "next/link";
import { useParams } from "next/navigation";
import { projectCategory } from "../page"; // Pastikan path-nya sesuai

export default function ProjectDetails() {
    const params = useParams(); // Mengambil parameter 'id' dari URL
    const { id } = params as { id: string };

    // Menggabungkan semua project dari setiap kategori
    const allProjects = Object.values(projectCategory).flat();

    // Mencari project berdasarkan id
    const project = allProjects.find((p) => p.id.toString() === id);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#02050e]">
                <h1 className="text-white text-3xl font-semibold">Project not found</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen oxanium bg-[#02050e]">
            <div className="max-w-4xl w-full bg-[#3864e8] p-8 rounded-md shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-4">{project.name}</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <img
                        src={`/projects/${project.image}`} // Asumsikan gambar ada di folder public/images
                        alt={project.name}
                        className="rounded-md w-full md:w-1/2 object-cover"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">Details</h2>
                        <p>{project.detail}</p>
                        <h2 className="text-xl font-semibold">Tech Stack</h2>
                        <div className="flex gap-2 text-4xl">
                            {project.stack.map((icon, index) => (
                                <span key={index}>{icon}</span>
                            ))}
                        </div>
                        <div className="mt-6 text-center">
                    <Link href="/projects" className="text-white oxanium-bold hover:underline">
                        Back to Projects
                    </Link>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

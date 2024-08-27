import ProjectCard from "@/components/ui/project-card";
import { bannerData, feedData, posterData, wallpaperData } from "@/lib/projectData";

export default function Projects() {
  const allProjects = [...bannerData, ...feedData, ...posterData, ...wallpaperData].sort(() => Math.random() - 0.5);
  
  return (
    <section className="mx-auto max-w-full columns-1 space-y-6 sm:block sm:columns-2 sm:gap-6 lg:columns-3 xl:columns-4">
      {allProjects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          year={new Date(project.createdAt).getFullYear()}
          className="break-inside-avoid"
        />
      ))}
    </section>
  );
}

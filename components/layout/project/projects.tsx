import ProjectCard from "@/components/ui/project-card";
import { prisma } from "@/lib/prisma";

export default async function Projects() {
  const projectData = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="mx-auto max-w-full columns-1 space-y-6 sm:block sm:columns-2 sm:gap-6 lg:columns-3 xl:columns-4">
      {projectData.map((project, index) => (
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

"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/ui/project-card";
import { useEffect, useState } from "react";
import { formatDateToYear } from "@/lib/utils";
import { Project } from "@/common/types/project";

export default function BannerCarousel() {
  const [projects, setProjects] = useState([]);
  const carouselData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/project", {
        method: "GET",
        cache: "no-cache",
      }).then((res) => res.json());

      const data = await response;
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    carouselData();
  }, []);

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        loop: true,
        align: "start",
      }}
      className="w-full max-w-full overflow-hidden"
    >
      <CarouselContent>
        {projects.slice(0, 8).map((project: Project, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
          >
            <ProjectCard
              image={project?.image}
              title={project?.title}
              year={formatDateToYear(project.createdAt).toString()}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

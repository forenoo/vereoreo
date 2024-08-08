"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/ui/project-card";
import { formatDateToYear } from "@/lib/utils";
import { Project } from "@/common/types/project";
import { posterHomeData } from "@/lib/projectHomeData";

export default function PosterCarousel() {
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
        {posterHomeData.slice(0, 8).map((project) => (
          <CarouselItem
            key={project.id}
            className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
          >
            <ProjectCard
              image={project?.image}
              title={project?.title}
              year={project.createdAt}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  year: any;
  className?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { image, title, year, className } = props;

  return (
    <div className={cn("p-1 grid gap-[5px]", className)}>
      <Card className="border-muted/30 rounded-[8px] w-fit hover:cursor-pointer">
        <CardContent className="flex items-center justify-center p-[5%] rounded-[8px] bg-[#131516]">
          <Image
            src={image}
            width={300}
            height={400}
            className="w-fit h-fit"
            alt="project-image"
          />
        </CardContent>
      </Card>
      <div className="text-[14px] grid">
        <span className="font-semibold">{title}</span>
        <span className="font-inter text-muted">{year}</span>
      </div>
    </div>
  );
}

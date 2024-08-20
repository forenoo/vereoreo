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
    <div className={cn("grid gap-[5px] p-1", className)}>
      <Card className="w-fit rounded-[8px] border-muted/30 hover:cursor-pointer">
        <CardContent className="flex items-center justify-center rounded-[8px] bg-[#131516] p-[5%]">
          <Image
            src={image}
            width={300}
            height={400}
            className="h-fit w-fit"
            alt="project-image"
          />
        </CardContent>
      </Card>
      <div className="grid text-[14px]">
        <span className="font-semibold">{title}</span>
        <span className="font-inter text-primary/60">{year}</span>
      </div>
    </div>
  );
}

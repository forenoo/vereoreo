import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogImage,
  DialogContainer,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";

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
      <Dialog
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <Card className="w-fit rounded-[8px] border-muted/30 hover:cursor-pointer">
          <CardContent className="flex items-center justify-center rounded-[8px] bg-[#131516] p-[5%]">
            <DialogImage
              src={image}
              className="h-fit w-fit"
              alt="project-image"
            />
          </CardContent>
        </Card>
      </Dialog>
      <div className="grid text-[14px]">
        <span className="font-semibold">{title}</span>
        <span className="font-inter text-primary/60">{year}</span>
      </div>
    </div>
  );
}

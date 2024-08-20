import UpFade from "@/components/animation/upfade";
import React from "react";

export default function ProjectHeader() {
  return (
    <header className="grid gap-y-[10px] lg:gap-y-[20px]">
      <UpFade>
        <h1 className="flex text-[22px] font-semibold leading-snug lg:text-[42px]">
          Project
        </h1>
      </UpFade>
      <UpFade delay={0.1}>
        <span className="text-[14px] font-medium text-primary/60 lg:text-[20px]">
          Showcasing my Personal & Commission Projects.
        </span>
      </UpFade>
    </header>
  );
}

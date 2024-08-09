import UpFade from "@/components/animation/upfade";
import React from "react";

export default function AboutHeader() {
  return (
    <header className="grid gap-y-[10px] lg:gap-y-[20px]">
      <UpFade>
        <h1 className="text-[22px] lg:text-[42px] flex font-semibold leading-snug">
          About
        </h1>
      </UpFade>
      <UpFade delay={0.1}>
        <span className="text-muted/70 font-medium text-[14px] lg:text-[20px]">
          A short story of me
        </span>
      </UpFade>
    </header>
  );
}

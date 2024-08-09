import UpFade from "@/components/animation/upfade";
import React from "react";

export default function HomeHeader() {
  return (
    <header className="grid gap-y-[10px] lg:gap-y-[20px]">
      <UpFade>
        <span className="text-muted/70 font-medium text-[14px] lg:text-[20px]">
          Hello there, Welcome!
        </span>
      </UpFade>
      <UpFade delay={0.1}>
        <h1 className="text-[22px] lg:text-[42px] flex font-semibold leading-snug">
          Hello, let me introduce myself, my name is Gerrard Setiawan also known
          as Ver, I came from Indonesia and I am ready to accept full time/part
          time remote work in the field of graphic design.
        </h1>
      </UpFade>
    </header>
  );
}

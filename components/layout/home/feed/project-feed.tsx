import React from "react";
import FeedCarousel from "./carousel";

export default function ProjectFeed() {
  return (
    <section className="grid gap-[10px] md:gap-[20px]">
      <header className="flex justify-between">
        <p className="font-inter text-[12px] uppercase tracking-[1.8px] text-primary/60">
          feed design
        </p>
      </header>
      <FeedCarousel />
    </section>
  );
}

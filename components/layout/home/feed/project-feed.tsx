import React from "react";
import FeedCarousel from "./carousel";

export default function ProjectFeed() {
  return (
    <section className="grid gap-[10px] md:gap-[20px]">
      <header className="flex justify-between">
        <p className="uppercase tracking-[1.8px] font-inter text-muted text-[12px]">
          feed design
        </p>
      </header>
      <FeedCarousel />
    </section>
  );
}

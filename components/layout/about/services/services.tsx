import { Carousel } from "@/components/ui/carousel";
import React from "react";
import ServiceCarousel from "./carousel";
import ServiceLogo from "@/public/briefcase-business.svg";
import Image from "next/image";

export default function Services() {
  return (
    <section className="gap-y-[25px] grid">
      <header className="grid gap-y-[5px]">
        <div className="flex gap-[10px] items-center">
          <Image src={ServiceLogo} alt="service-logo" width={24} height={24} />
          <p className="capitalize text-[20px] font-semibold">services</p>
        </div>
        <p className="text-[16px] text-muted font-medium">
          I can deliver the following services
        </p>
      </header>
      <ServiceCarousel />
    </section>
  );
}

import { Carousel } from "@/components/ui/carousel";
import React from "react";
import ServiceCarousel from "./carousel";
import ServiceLogo from "@/public/briefcase-business.svg";
import Image from "next/image";

export default function Services() {
  return (
    <section className="grid gap-y-[25px]">
      <header className="grid gap-y-[5px]">
        <div className="flex items-center gap-[10px]">
          <Image src={ServiceLogo} alt="service-logo" width={24} height={24} />
          <p className="text-[18px] font-semibold capitalize md:text-[20px]">
            services
          </p>
        </div>
        <p className="text-[14px] font-medium text-primary/60 md:text-[16px]">
          I can deliver the following services
        </p>
      </header>
      <ServiceCarousel />
    </section>
  );
}

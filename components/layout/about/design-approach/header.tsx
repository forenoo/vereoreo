import { MdOutlineDraw } from "react-icons/md";
import Image from "next/image";
import React from "react";

export default function DesignApproachHeader() {
  return (
    <section className="gap-y-[25px] grid">
      <header className="grid gap-y-[5px]">
        <div className="flex gap-[10px] items-center">
          <MdOutlineDraw size={30} />
          <p className="capitalize text-[18px] md:text-[20px] font-semibold">
            design approach
          </p>
        </div>
        <p className="text-[14px] md:text-[16px] text-muted font-medium">
          The design approach I took in the design process
        </p>
      </header>
    </section>
  );
}

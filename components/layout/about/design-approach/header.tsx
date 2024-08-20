import { MdOutlineDraw } from "react-icons/md";
import Image from "next/image";
import React from "react";

export default function DesignApproachHeader() {
  return (
    <section className="grid gap-y-[25px]">
      <header className="grid gap-y-[5px]">
        <div className="flex items-center gap-[10px]">
          <MdOutlineDraw size={30} />
          <p className="text-[18px] font-semibold capitalize md:text-[20px]">
            design approach
          </p>
        </div>
        <p className="text-[14px] font-medium text-primary/60 md:text-[16px]">
          The design approach I took in the design process
        </p>
      </header>
    </section>
  );
}

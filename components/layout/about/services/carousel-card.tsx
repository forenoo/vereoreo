import React from "react";
import { HiOutlinePresentationChartLine } from "react-icons/hi";

interface CarouselCardProps {
  name: string;
  icon: React.ReactNode;
}

export default function CarouselCard(props: CarouselCardProps) {
  const { icon, name } = props;
  return (
    <div className="lg:p-[20px] p-[15px] flex mr-[15px] gap-[10px] items-center rounded-[10px] border border-primary/20 bg-gradient-to-b from-[#1E2021] to-[#131516]">
      {icon}
      <span className="text-[14px] lg:text-[16px]">{name}</span>
    </div>
  );
}

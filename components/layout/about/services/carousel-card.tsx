import React from "react";
import { HiOutlinePresentationChartLine } from "react-icons/hi";

interface CarouselCardProps {
  name: string;
  icon: React.ReactNode;
}

export default function CarouselCard(props: CarouselCardProps) {
  const { icon, name } = props;
  return (
    <div className="mr-[15px] flex items-center gap-[10px] rounded-[10px] border border-primary/20 bg-gradient-to-b from-[#1E2021] to-[#131516] p-[15px] lg:p-[20px]">
      {icon}
      <span className="text-[14px] lg:text-[16px]">{name}</span>
    </div>
  );
}

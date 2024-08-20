import UpFade from "@/components/animation/upfade";
import Footer from "@/components/layout/footer";
import ProjectHeader from "@/components/layout/project/header";
import Projects from "@/components/layout/project/projects";
import Divider from "@/components/ui/divider";
import React from "react";

export default function Project() {
  return (
    <main className="grid gap-y-[25px]">
      <ProjectHeader />
      <UpFade delay={0.1}>
        <Divider />
      </UpFade>
      <UpFade delay={0.2} className="grid gap-y-[25px]">
        <Projects />
        <Divider />
        <Footer />
      </UpFade>
    </main>
  );
}

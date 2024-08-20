import UpFade from "@/components/animation/upfade";
import Description from "@/components/layout/about/description";
import AboutHeader from "@/components/layout/about/header";
import Services from "@/components/layout/about/services/services";
import Divider from "@/components/ui/divider";
import Footer from "@/components/layout/footer";
import React from "react";
import DesignApproachDescription from "@/components/layout/about/design-approach/description";
import DesignApproachHeader from "@/components/layout/about/design-approach/header";

export default function AboutPage() {
  return (
    <main className="grid gap-y-[25px]">
      <AboutHeader />
      <UpFade delay={0.1}>
        <Divider />
      </UpFade>
      <UpFade delay={0.2} className="grid gap-y-[25px]">
        <Description />
        <Divider />
        <DesignApproachHeader />
        <DesignApproachDescription />
        <Divider />
        <Services />
        <Divider />
        <Footer />
      </UpFade>
    </main>
  );
}

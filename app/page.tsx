import UpFade from "@/components/animation/upfade";
import Divider from "@/components/ui/divider";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import Header from "@/components/layout/home/header";
import ProjectBanner from "@/components/layout/home/banner/project-banner";
import ProjectFeed from "@/components/layout/home/project-feed";
import ProjectPoster from "@/components/layout/home/project-poster";
import Footer from "@/components/layout/home/footer";

export default async function Home() {
  const data = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="grid gap-y-[25px]">
      <Header />
      <UpFade className="gap-y-[25px] grid" delay={0.15}>
        <Divider />
        <ProjectBanner />
        <Divider />
        <ProjectFeed />
        <Divider />
        <ProjectPoster />
        <Divider />
      </UpFade>
      <Footer />
    </main>
  );
}

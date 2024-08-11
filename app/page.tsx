import UpFade from "@/components/animation/upfade";
import Divider from "@/components/ui/divider";
import HomeHeader from "@/components/layout/home/header";
import ProjectBanner from "@/components/layout/home/banner/project-banner";
import ProjectFeed from "@/components/layout/home/feed/project-feed";
import ProjectPoster from "@/components/layout/home/poster/project-poster";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="grid gap-y-[25px]">
      <HomeHeader />
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

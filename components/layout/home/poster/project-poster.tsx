import PosterCarousel from "./carousel";
import BannerCarousel from "./carousel";

export default function ProjectPoster() {
  return (
    <section className="grid gap-[10px] md:gap-[20px]">
      <header className="flex justify-between">
        <p className="font-inter text-[12px] uppercase tracking-[1.8px] text-primary/60">
          poster
        </p>
      </header>
      <PosterCarousel />
    </section>
  );
}

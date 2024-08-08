import PosterCarousel from "./carousel";
import BannerCarousel from "./carousel";

export default function ProjectPoster() {
  return (
    <section className="grid gap-[10px] md:gap-[20px]">
      <header className="flex justify-between">
        <p className="uppercase tracking-[1.8px] font-inter text-muted text-[12px]">
          poster
        </p>
      </header>
      <PosterCarousel />
    </section>
  );
}

import BannerCarousel from "./carousel";

export default function ProjectBanner() {
  return (
    <section className="grid gap-[10px] md:gap-[20px]">
      <header className="flex justify-between">
        <p className="uppercase tracking-[1.8px] font-inter text-muted text-[12px]">
          banner
        </p>
      </header>
      <BannerCarousel />
    </section>
  );
}

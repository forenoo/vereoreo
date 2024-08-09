import Marquee from "react-fast-marquee";
import CarouselCard from "./carousel-card";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { LuGalleryVertical, LuWallpaper } from "react-icons/lu";
import { ImFilePicture } from "react-icons/im";
import { BsPostcardHeart } from "react-icons/bs";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { FiYoutube } from "react-icons/fi";

const carouselData = [
  {
    name: "PPT / Pitch Deck Design",
    icon: <HiOutlinePresentationChartLine className="size-5" />,
  },
  {
    name: "Banner Design",
    icon: <LuGalleryVertical className="size-5" />,
  },
  {
    name: "Digital Poster Design",
    icon: <ImFilePicture className="size-5" />,
  },
  {
    name: "Digital Wallpaper Design",
    icon: <LuWallpaper className="size-5" />,
  },
  {
    name: "Social Media Post Design",
    icon: <BsPostcardHeart className="size-5" />,
  },
  {
    name: "Instagram Carousel Post Design",
    icon: <TfiLayoutMediaCenterAlt className="size-5" />,
  },
  {
    name: "Youtube Thumbnail Design",
    icon: <FiYoutube className="size-5" />,
  },
];

export default function ServiceCarousel() {
  return (
    <Marquee pauseOnHover>
      {carouselData.map((data, i) => (
        <CarouselCard icon={data.icon} name={data.name} key={i} />
      ))}
    </Marquee>
  );
}

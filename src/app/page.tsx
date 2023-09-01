import Image, { StaticImageData } from "next/image";
import { MainLayoutComponent } from "./components/MainLayoutComponent";
import events from "../../public/images/home/events.jpg";
import misc from "../../public/images/home/misc.jpg";
import portraits from "../../public/images/home/portraits.jpg";
import sectionImage from "../../public/images/home/DSCF0296.jpg";
import Link from "next/link";
import { SocialsComponent } from "./NavBar/Socials/SocialsComponent";
import { CarouselComponent } from "./components/CarouselComponent";

// blurDataURL="data:text/plain;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsrQcAAW8A9j9cZksAAAAASUVORK5CYII="

const Home = () => {
  const renderImage = (img: StaticImageData, label: string) => {
    return (
      <div className="md:max-w-md md:max-w-lg relative hover:opacity-90 shadow-md shadow-stone-900">
        <Image
          className="relative"
          placeholder="blur"
          src={img}
          alt={`${label} image`}
        />
        <Link
          href={`/${label}`}
          className="absolute w-full inset-0 cursor-pointer flex justify-center"
        >
          <p className="uppercase font-semibold self-center text-2xl text-stone-100">
            {label}
          </p>
        </Link>
      </div>
    );
  };

  return (
    <MainLayoutComponent navbarClassName="z-30 bg-stone-100">
      <div className="md:mt-[150px] mt-[100px] h-full flex flex-col gap-4">
        <div className="relative text-center">
          <Image src={sectionImage} alt="Image" />
          <div className="absolute top-1/2 left-1/2 uppercase font-semibold text-2xl text-stone-100">
            text
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:w-11/12 w-9/12 gap-4 animate-in fade-in duration-300 mx-auto">
          {renderImage(portraits, "portraits")}
          {renderImage(events, "events")}
          {renderImage(misc, "misc")}
        </div>
        <CarouselComponent className="w-full" />
      </div>
    </MainLayoutComponent>
  );
};

export default Home;

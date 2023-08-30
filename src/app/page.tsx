import Image, { StaticImageData } from "next/image";
import { MainLayoutComponent } from "./components/MainLayoutComponent";
import events from "../../public/images/home/events.jpg";
import misc from "../../public/images/home/misc.jpg";
import portraits from "../../public/images/home/portraits.jpg";
import Link from "next/link";

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
    <MainLayoutComponent navbarClassName="z-30 from-stone-100 from-30% bg-gradient-to-b">
      <div className="md:mt-[200px] mt-[100px] h-full">
        <div className="grid md:grid-cols-3 grid-cols-1 md:w-11/12 w-10/12 gap-4 animate-in fade-in duration-300 mx-auto">
          {renderImage(portraits, "portraits")}
          {renderImage(events, "events")}
          {renderImage(misc, "misc")}
        </div>
      </div>
    </MainLayoutComponent>
  );
};

export default Home;

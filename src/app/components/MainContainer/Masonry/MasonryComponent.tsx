"use client";
import useMobileView from "@/app/hooks/useMobileView";
import Image from "next/image";
import React, { useRef } from "react";
import Masonry from "react-masonry-css";

import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import DSC_2437 from "../../../../../public/images/TestImages/DSC_2437.jpg";
import DSC_2715 from "../../../../../public/images/TestImages/DSC_2715.jpg";
import DSC_2378 from "../../../../../public/images/TestImages/DSC_2378.jpg";
import DSC_2846 from "../../../../../public/images/TestImages/DSC_2846.jpg";
import DSC_2859 from "../../../../../public/images/TestImages/DSC_2859.jpg";
import DSC_2871 from "../../../../../public/images/TestImages/DSC_2871.jpg";
import DSC_2686 from "../../../../../public/images/TestImages/DSC_2686.jpg";
import DSC_2468 from "../../../../../public/images/TestImages/DSC_2468.jpg";
import DSC_2489 from "../../../../../public/images/TestImages/DSC_2489.jpg";

const images = [
  DSC_2437,
  DSC_2715,
  DSC_2378,
  DSC_2846,
  DSC_2859,
  DSC_2871,
  DSC_2686,
  DSC_2468,
  DSC_2489,
];

export const MasonryComponent = () => {
  const isMobile = useMobileView();
  const lightBoxRef = useRef<LightGallery | null>(null);

  return (
    <div className="max-w-[1200px] w-11/12 p-2 sm:p-4 my-5 mx-auto">
      <Masonry
        breakpointCols={isMobile ? 1 : 3}
        className="flex gap-2"
        columnClassName=""
      >
        {images.map((img, idx) => (
          <Image
            key={img.src}
            src={img}
            alt="photo"
            className="my-2 hover:opacity-90 cursor-pointer"
            placeholder="blur"
            onClick={() => {
              lightBoxRef.current?.openGallery(idx);
            }}
          />
        ))}
      </Masonry>
      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) {
            lightBoxRef.current = ref.instance;
          }
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic
        dynamicEl={images.map((image) => ({
          src: image.src,
          thumb: image.src,
        }))}
      />
    </div>
  );
};

"use client";
import useMobileView from "@/app/hooks/useMobileView";
import Image from "next/image";
import React from "react";
import Masonry from "react-masonry-css";

import DSC_2437 from "../../../../../public/images/TestImages/DSC_2378.jpg";
import DSC_2715 from "../../../../../public/images/TestImages/DSC_2715.jpg";
import DSC_2378 from "../../../../../public/images/TestImages/DSC_2378.jpg";
import DSC_2846 from "../../../../../public/images/TestImages/DSC_2846.jpg";
import DSC_2859 from "../../../../../public/images/TestImages/DSC_2859.jpg";
import DSC_2871 from "../../../../../public/images/TestImages/DSC_2871.jpg";
import DSC_2686 from "../../../../../public/images/TestImages/DSC_2686.jpg";
import DSC_2468 from "../../../../../public/images/TestImages/DSC_2468.jpg";

const images = [
  DSC_2437,
  DSC_2715,
  DSC_2378,
  DSC_2846,
  DSC_2859,
  DSC_2871,
  DSC_2686,
  DSC_2468,
];

export const MasonryComponent = () => {
  const isMobile = useMobileView();

  return (
    <div className="max-w-[1200px] w-11/12 p-2 sm:p-4 my-5 mx-auto">
      <Masonry
        breakpointCols={isMobile ? 1 : 3}
        className="flex gap-2"
        columnClassName=""
      >
        {images.map((img) => (
          <Image
            key={img.src}
            src={img}
            alt="photo"
            className="my-2"
            placeholder="blur"
          />
        ))}
      </Masonry>
    </div>
  );
};

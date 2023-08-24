"use client";
import useMobileView from "@/app/hooks/useMobileView";
import Image from "next/image";
import React, { useState } from "react";
import Masonry from "react-masonry-css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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

export const MasonryComponent = ({ data }: any) => {
  const isMobile = useMobileView();
  const [open, setOpen] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);

  return (
    <div className="max-w-[1200px] w-11/12 p-2 sm:p-4 my-5 mx-auto">
      <Masonry
        breakpointCols={isMobile ? 1 : 3}
        className="flex gap-2"
        columnClassName=""
      >
        {data.map((img: any, idx: number) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="my-2 hover:opacity-90 cursor-pointer"
            placeholder="blur"
            blurDataURL={img.src}
            onClick={() => {
              setImageIdx(idx);
              setOpen(true);
            }}
          />
        ))}
      </Masonry>
      <Lightbox
        open={open}
        index={imageIdx}
        close={() => setOpen(false)}
        slides={data.map((image: any) => ({
          src: image.src,
        }))}
      />
    </div>
  );
};

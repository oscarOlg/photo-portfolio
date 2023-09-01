"use client";
import useMobileView from "@/app/hooks/useMobileView";
import Image from "next/image";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { MasonryComponentPorops } from "./types";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const MasonryComponent = ({
  images,
  className,
}: MasonryComponentPorops) => {
  const isMobile = useMobileView();
  const [open, setOpen] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);

  return (
    <div className={className}>
      <Masonry
        breakpointCols={isMobile ? 1 : 3}
        className="flex gap-2 z-10"
        columnClassName=""
      >
        {images.map((img, idx) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.src}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="my-3 cursor-pointer"
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
        slides={images.map((image) => ({
          src: image.src,
        }))}
      />
    </div>
  );
};

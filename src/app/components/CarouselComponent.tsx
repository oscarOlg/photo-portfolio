"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Inline } from "yet-another-react-lightbox/plugins";
import image1 from "../../../public/images/home/DSC_2377.jpg";
import image2 from "../../../public/images/home/DSC_2461.jpg";
import image3 from "../../../public/images/home/DSC_2668.jpg";
import image4 from "../../../public/images/home/DSC_3200.jpg";
import image5 from "../../../public/images/home/DSC_3236.jpg";
import image6 from "../../../public/images/home/DSC_3239.jpg";
import image8 from "../../../public/images/home/DSCF0272.jpg";
import image9 from "../../../public/images/home/DSCF0291.jpg";
import image10 from "../../../public/images/home/DSCF0296.jpg";
import image11 from "../../../public/images/home/DSCF0352.jpg";
import { ClassNameProps } from "../NavBar/types";

const slides = [
  image11,
  image10,
  image9,
  image8,
  image6,
  image5,
  image4,
  image3,
  image2,
  image1,
];

export const CarouselComponent = ({ className }: ClassNameProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  return (
    <div className={className}>
      <Lightbox
        index={index}
        slides={slides}
        plugins={[Inline]}
        on={{
          view: updateIndex,
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "contain",
        }}
        inline={{
          style: {
            width: "90%",
            maxWidth: "1200px",
            aspectRatio: "3 / 2",
            margin: "0 auto",
          },
        }}
        styles={{
          container: {
            backgroundColor: "#e7e5e4",
            borderRadius: "0.5rem",
          },
          icon: {
            fontSize: "20px",
          },
        }}
      />

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={slides}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
    </div>
  );
};

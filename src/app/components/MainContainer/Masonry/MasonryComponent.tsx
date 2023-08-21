"use client";
import useMobileView from "@/app/hooks/useMobileView";
import React from "react";
import Masonry from "react-masonry-css";

export const MasonryComponent = () => {
  const isMobile = useMobileView();

  return (
    <div className="max-w-[1200px] w-11/12 p-2 sm:p-4 my-5 mx-auto">
      <Masonry
        breakpointCols={isMobile ? 1 : 3}
        className="flex gap-2"
        columnClassName=""
      >
        <img
          src="images/TestImages/DSC_2437.jpg"
          alt="photo"
          className="my-2"
        />
        <img
          src="images/TestImages/DSC_2715.jpg"
          alt="photo"
          className="my-2"
        />
        <img
          src="images/TestImages/DSC_2378.jpg"
          alt="photo"
          className="my-2"
        />
        <img
          src="images/TestImages/DSC_2846.jpg"
          alt="photo"
          className="my-2"
        />
        <img
          src="images/TestImages/DSC_2859.jpg"
          alt="photo"
          className="my-2"
        />
        <img
          src="images/TestImages/DSC_2871.jpg"
          alt="photo"
          className="my-2"
        />
        <img
          src="images/TestImages/DSC_2686.jpg"
          alt="photo"
          className="my-2"
        />
        <img
          src="images/TestImages/DSC_2468.jpg"
          alt="photo"
          className="my-2"
        />
      </Masonry>
    </div>
  );
};

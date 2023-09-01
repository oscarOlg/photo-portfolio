import Image from "next/image";
import React from "react";
import { useState } from "react";

const BlurImageComponent = ({ img }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      src={img}
      alt={`image`}
      layout="full"
      objectFit="cover"
      className={`${
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      }`}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default BlurImageComponent;

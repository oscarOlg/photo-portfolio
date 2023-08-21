import React from "react";
import { MasonryComponent } from "./Masonry/MasonryComponent";

export const MainContainerComponent = () => {
  return (
    <main className="w-[95vw] mt-[80px] mb-5 bg-stone-950 rounded-xl overflow-y-auto md:overflow-y-scroll">
      <MasonryComponent />
    </main>
  );
};

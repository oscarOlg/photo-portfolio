import React from "react";
import { DesktopContainer } from "./DesktopContainer";
import { MobileContainer } from "./MobileContainer";

export const NavBarComponent = () => {
  return (
    <header className="fixed top-0 w-[95vw] mx-auto px-8 h-[80px]">
      <div className="hidden md:contents">
        <DesktopContainer />
      </div>
      <div className="contents md:hidden">
        <MobileContainer />
      </div>
    </header>
  );
};

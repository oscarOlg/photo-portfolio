import React from "react";
import { DesktopContainer } from "./DesktopContainer";
import { MobileContainer } from "./MobileContainer";

export const NavBarComponent = () => {
  return (
    <header className="fixed top-0 flex items-center justify-between w-full px-8 md:px-8 h-[80px]">
      <div className="hidden md:contents">
        <DesktopContainer />
      </div>
      <div className="contents md:hidden">
        <MobileContainer />
      </div>
    </header>
  );
};

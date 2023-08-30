import React from "react";
import { DesktopContainer } from "./DesktopContainer";
import { MobileContainer } from "./MobileContainer";
import type { NavBarComponentProps } from "./types";

export const NavBarComponent = ({ className }: NavBarComponentProps) => {
  return (
    <header
      className={`fixed top-0 w-full mx-auto px-5 md:px-10 h-[100px] ${className}`}
    >
      <div className="hidden md:contents">
        <DesktopContainer />
      </div>
      <div className="contents md:hidden">
        <MobileContainer />
      </div>
    </header>
  );
};

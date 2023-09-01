import React from "react";
import { DesktopContainer } from "./DesktopContainer";
import { MobileContainer } from "./MobileContainer";
import type { ClassNameProps } from "./types";

export const NavBarComponent = ({ className }: ClassNameProps) => {
  return (
    <header
      className={`opacity-90 fixed top-0 w-full px-5 md:px-10 h-[100px] flex center-items ${className}`}
    >
      <DesktopContainer className="hidden md:contents" />
      <MobileContainer className="contents md:hidden" />
    </header>
  );
};

import React from "react";
import { NavBarComponent } from "../NavBar/NavBarComponent";
import { MainLayoutComponentProps } from "./types";

export const MainLayoutComponent = ({
  children,
  className,
  navbarClassName,
}: MainLayoutComponentProps) => {
  return (
    <div className={`h-full w-full flex flex-col items-center ${className}`}>
      <NavBarComponent className={navbarClassName} />
      {children}
    </div>
  );
};

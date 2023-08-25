import React, { PropsWithChildren } from "react";
import { NavBarComponent } from "../NavBar/NavBarComponent";

export const MainLayoutComponent = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <NavBarComponent />
      {children}
    </div>
  );
};

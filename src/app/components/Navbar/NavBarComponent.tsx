"use client";
import Image from "next/image";
import React from "react";
import { SocialsComponent } from "./Socials/SocialsComponent";
import { TabsComponent } from "./Tabs/TabsComponent";
import useMobileView from "@/app/hooks/useMobileView";
import Link from "next/link";
import logo from "../../../../public/images/logo-no-background.png";

export const NavBarComponent = () => {
  const isMobile = useMobileView();

  const getLogo = (width: number) => (
    <Image src={logo} alt="oscar olg logo" width={width} />
  );

  const getMobileNavBar = () => {
    if (isMobile) {
      return (
        <>
          <Link href="/">{getLogo(125)}</Link>
          <button>
            <Image src="/svg/Menu.svg" alt="Menu Icon" width={30} height={30} />
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link href="/">{getLogo(150)}</Link>
          <TabsComponent />
          <SocialsComponent />
        </>
      );
    }
  };

  return (
    <header className="fixed top-0 flex items-center justify-between w-full px-8 md:px-8 h-[80px]">
      {getMobileNavBar()}
    </header>
  );
};

"use client";
import Image from "next/image";
import React from "react";
import { SocialsComponent } from "./Socials/SocialsComponent";
import { TabsComponent } from "./Tabs/TabsComponent";
import useMobileView from "@/app/hooks/useMobileView";
import Link from "next/link";

export const NavBarComponent = () => {
  const isMobile = useMobileView();

  const getMobileNavBar = () => {
    if (isMobile) {
      return (
        <>
          <Link href="/">
            <Image
              src="/images/logo-no-background.png"
              alt="oscar olg logo"
              width={125}
              height={42.47}
            />
          </Link>
          <button>
            <Image src="/svg/Menu.svg" alt="Menu Icon" width={30} height={30} />
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link href="/">
            <Image
              src="/images/logo-no-background.png"
              alt="oscar olg logo"
              width={150}
              height={51.17}
            />
          </Link>
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

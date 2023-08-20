import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialsComponent } from "./Socials/SocialsComponent";
import { TabsComponent } from "./Tabs/TabsComponent";

export const HeaderComponent = () => {
  return (
    <header className="flex flex-col items-left w-[250px] px-5 gap-8">
      <Image
        src="/svg/logo-black.svg"
        alt="oscar olg logo"
        width={100}
        height={100}
      />
      <TabsComponent />
      <SocialsComponent />
    </header>
  );
};

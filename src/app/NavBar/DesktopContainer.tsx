import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SocialsComponent } from "./Socials/SocialsComponent";
import { TabsComponent } from "./Tabs/TabsComponent";
import logo from "../../../public/images/logo-no-background.png";
import type { ClassNameProps } from "./types";

export const DesktopContainer = ({ className }: ClassNameProps) => {
  return (
    <div className={className}>
      <div className="flex w-full justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="oscar olg logo" width={150} />
        </Link>
        <TabsComponent />
        <SocialsComponent />
      </div>
    </div>
  );
};

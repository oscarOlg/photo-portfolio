import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SocialsComponent } from "./Socials/SocialsComponent";
import { TabsComponent } from "./Tabs/TabsComponent";
import logo from "../../../public/images/logo-no-background.png";

export const DesktopContainer = () => {
  return (
    <>
      <Link href="/">
        <Image src={logo} alt="oscar olg logo" width={150} />
      </Link>
      <TabsComponent />
      <SocialsComponent />
    </>
  );
};

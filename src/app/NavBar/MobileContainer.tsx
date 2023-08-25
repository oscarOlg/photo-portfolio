"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/images/logo-no-background.png";
import { DropDownMenu } from "./Menu/DropDownMenu";

export const MobileContainer = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleShowMenu = () => {
    setOpenMenu((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="z-50 relative flex justify-between h-full items-center">
        <Link href="/">
          <Image src={logo} alt="oscar olg logo" width={125} />
        </Link>
        <button onClick={() => handleShowMenu()}>
          <Image src="/svg/Menu.svg" alt="Menu Icon" width={30} height={30} />
        </button>
      </div>
      {openMenu && <DropDownMenu />}
    </>
  );
};

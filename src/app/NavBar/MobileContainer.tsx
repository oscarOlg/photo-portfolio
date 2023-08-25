import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/logo-no-background.png";

export const MobileContainer = () => {
  return (
    <>
      <Link href="/">
        <Image src={logo} alt="oscar olg logo" width={125} />
      </Link>
      <button>
        <Image src="/svg/Menu.svg" alt="Menu Icon" width={30} height={30} />
      </button>
    </>
  );
};

import Link from "next/link";
import React from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

type TabsComponentProps = {
  isMobile?: boolean;
};

export const TabsComponent = ({ isMobile }: TabsComponentProps) => {
  const mobileClassNames = "gap-2 flex-col";
  const desktopClassNames = "gap-1";
  return (
    <div
      className={`flex justify-between text-stone-700 ${
        isMobile ? mobileClassNames : desktopClassNames
      }`}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="transition rounded-2xl hover:text-stone-950 hover:font-medium hover:bg-stone-200 px-3 py-2"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

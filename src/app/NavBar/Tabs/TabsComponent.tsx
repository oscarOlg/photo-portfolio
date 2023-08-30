import Link from "next/link";
import React from "react";

const links = [
  { href: "/portraits", label: "Portraits" },
  { href: "/events", label: "Events" },
  { href: "/misc", label: "Misc" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export const TabsComponent = () => {
  return (
    <div
      className={`flex justify-end text-stone-700 gap-2 flex-col md:flex-row md:gap-1`}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="transition rounded-2xl hover:text-stone-950 hover:font-medium hover:bg-stone-400 hover:bg-opacity-30 px-3 py-2"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

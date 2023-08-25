import Link from "next/link";
import React from "react";

export const TabsComponent = () => {
  return (
    <div className="flex justify-between text-stone-700">
      <Link
        href="/"
        className="transition rounded-2xl hover:text-stone-950 hover:font-medium hover:bg-stone-200 px-3 py-2"
      >
        Home
      </Link>
      <Link
        href="/portfolio"
        className="transition rounded-2xl  hover:text-stone-950 hover:font-medium hover:bg-stone-200 px-3 py-2"
      >
        Portfolio
      </Link>
      <Link
        href="/contact"
        className="transition rounded-2xl  hover:text-stone-950 hover:font-medium hover:bg-stone-200 px-3 py-2"
      >
        Contact
      </Link>
      <Link
        href="/about"
        className="transition rounded-2xl  hover:text-stone-950 hover:font-medium hover:bg-stone-200 px-3 py-2"
      >
        About
      </Link>
    </div>
  );
};

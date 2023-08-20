import Link from "next/link";
import React from "react";

export const TabsComponent = () => {
  return (
    <div className="flex flex-col justify-between text-teal-500">
      <Link
        href="#"
        className="transition rounded-2xl font-medium hover:text-stone-600 hover:bg-stone-100 px-3 py-2"
      >
        Home
      </Link>
      <Link
        href="/"
        className="transition rounded-2xl  hover:text-stone-600 hover:bg-stone-100 px-3 py-2"
      >
        Portfolio
      </Link>
      <Link
        href="/"
        className="transition rounded-2xl  hover:text-stone-600 hover:bg-stone-100 px-3 py-2"
      >
        Contact
      </Link>
    </div>
  );
};

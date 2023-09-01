"use client";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { simpleTransitionClasses } from "../../utils/utils";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
const portfolioLinks = [
  { href: "/portraits", label: "Portraits" },
  { href: "/events", label: "Events" },
  { href: "/misc", label: "Misc" },
];

export const TabsComponent = () => {
  return (
    <div className="flex justify-end text-stone-700 xl:gap-5 gap-2 flex-col md:flex-row md:gap-1">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="transition rounded-lg hover:text-stone-950 hover:font-medium hover:bg-stone-400 hover:bg-opacity-30 px-3 py-2"
        >
          {link.label}
        </Link>
      ))}
      <Menu as="div" className="relative inline-block">
        <Menu.Button className="transition rounded-lg hover:text-stone-950 hover:font-medium hover:bg-stone-400 hover:bg-opacity-30 px-3 py-2">
          Portfolio
        </Menu.Button>

        <Transition as={Fragment} {...simpleTransitionClasses}>
          <Menu.Items className="absolute z-10 flex flex-col gap-2 items-center px-1 pb-2 pt-3 w-24 rounded-lg bg-stone-100">
            {portfolioLinks.map((link) => {
              return (
                <Menu.Item key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-lg transition hover:text-stone-950 hover:font-medium hover:bg-stone-400 hover:bg-opacity-30 px-3 py-2"
                  >
                    {link.label}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

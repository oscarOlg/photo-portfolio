"use client";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialsComponent } from "./Socials/SocialsComponent";
import type { ClassNameProps } from "./types";

import logo from "../../../public/images/logo-no-background.png";
import { slideTransitionClasses } from "../utils/utils";

const Links = [
  { href: "/", label: "Home" },
  { href: "/portraits", label: "Portraits" },
  { href: "/events", label: "Events" },
  { href: "/misc", label: "Misc" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const MobileContainer = ({ className }: ClassNameProps) => {
  return (
    <div className={className}>
      <Menu as="div" className="relative grid w-full">
        <div className="z-50 flex justify-between self-center">
          <Link href="/">
            <Image src={logo} alt="oscar olg logo" width={130} />
          </Link>
          <Menu.Button className="transition rounded-lg hover:text-stone-950 hover:font-medium hover:bg-stone-400 hover:bg-opacity-30 px-3 py-2">
            Menu
          </Menu.Button>
        </div>
        <Transition as={Fragment} {...slideTransitionClasses}>
          <Menu.Items className="h-full fixed top-0 right-0 z-40">
            <div className="mt-[100px] flex flex-col gap-3 items-end px-3 pb-3 bg-stone-100 rounded-b-lg">
              {Links.map((link) => {
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
              <Menu.Item>
                <SocialsComponent />
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

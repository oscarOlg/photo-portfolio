import Image from "next/image";
import Link from "next/link";
import React from "react";

const socials = [
  {
    name: "Facebook",
    width: 28,
    height: 35,
    url: "https://www.facebook.com/profile.php?id=100088045982178",
  },
  {
    name: "Instagram",
    width: 25,
    height: 25,
    url: "https://www.instagram.com/oscar.olg.photo/",
  },
  {
    name: "WhatsApp",
    width: 25,
    height: 25.13,
    url: "whatsapp://send?phone=+526566956875",
  },
  {
    name: "Email",
    width: 30,
    height: 30,
    url: "mailto:oscar.olg.photo@gmail.com",
  },
];

export const SocialsComponent = () => {
  return (
    <div className="text-base flex gap-3 items-center">
      {socials.map((app) => (
        <Link
          className="transition rounded-xl opacity-60 hover:opacity-100 ml-3"
          target="_blank"
          href={app.url}
          key={app.name}
        >
          <Image
            src={`/svg/${app.name}.svg`}
            alt={`${app.name} link`}
            width={app.width}
            height={app.height}
          />
        </Link>
      ))}
    </div>
  );
};

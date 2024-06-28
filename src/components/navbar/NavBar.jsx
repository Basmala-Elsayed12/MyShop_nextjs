import React from "react";
import Link from "next/link";
import { links } from "./data";

import Logo from "../elements/logo/Logo";

export default function NavBar() {
  return (
    <div className="bg-cyan-600 py-2 px-36 w-full h-14 flex justify-between ">
      <Logo />
      <div className="text-white font-normal text-2xl flex space-x-8 ">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="hover:bg-cyan-700 rounded-xl"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

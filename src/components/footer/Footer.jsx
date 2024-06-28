import React from "react";
import Image from "next/image";
import { social_media } from "./data";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between mx-60 py-10">
      <div className="">© 2024 MyShop. All rights reserved</div>
      <div className="flex justify-center items-center space-x-4 cursor-pointer">
        {social_media.map((media) => (
          <Link key={media.id} href={media.url}>
            <Image
              src={`/images/icons/${media.name}.png`}
              alt={media.name}
              width={30}
              height={30}
              className="hover:bg-cyan-600 rounded-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

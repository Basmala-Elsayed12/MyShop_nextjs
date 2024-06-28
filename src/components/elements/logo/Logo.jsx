import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo_icon from "../../../../public/images/logo.png";

export default function Logo() {
  return (
    <div className="flex gap-3">
      <Image src={logo_icon} alt={"logo icon"} width={45} height={20} />
      <Link
        href="/"
        className="text-white font-bold text-3xl italic hover:bg-cyan-700 rounded-xl "
      >
        MyShop
      </Link>
    </div>
  );
}

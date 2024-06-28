import React from "react";
import Image from "next/image";
import cv from "../../../../public/cv.svg";
import Link from "next/link";
import bosy from "../../../../public/images/bosy.jpg";
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-10 ">
      <Image src={bosy} alt="bosy " className="rounded-full w-40 h-40 mb-3" />
      <div className=" ">
        <Link
          href={
            "https://drive.google.com/file/d/196klBsInXQ-Iwr7TV1YHPPtyerjumxxo/view?usp=sharing"
          }
        >
          <Image src={cv} alt="my cv" />
        </Link>
      </div>
    </div>
  );
}

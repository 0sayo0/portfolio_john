"use client";

import Image from "next/image";

export default function CircleImage() {
  return (
    <div className="bottom-0 right-0 hidden lg:inline-block lg:absolute">
      <Image
        src="/art.png"
        width={1000}
        height={1000}
        alt="Circle"
        className="w-full h-48"
      />
    </div>
  );
}

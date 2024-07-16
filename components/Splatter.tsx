"use client";

import Image from "next/image";

export default function Splatter() {
  return (
    <div className="-z-10 bottom-42 left-0 hidden lg:inline-block lg:absolute rotate-180">
      <Image
        src="/splatter.png"
        width={1000}
        height={1000}
        alt="Circle"
        className="w-full h-[500px] opacity-45 splatter"
      />
    </div>
  );
}

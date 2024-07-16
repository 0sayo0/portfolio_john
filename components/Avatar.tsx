"use client";

import Image from "next/image";
import MotionTransition from "./animations/TransitionComponent";

export default function Avatar() {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 right-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/avatar-1.png"
        width={200}
        height={200}
        className="w-full h-full"
        alt="Avatar"
      />
    </MotionTransition>
  );
}

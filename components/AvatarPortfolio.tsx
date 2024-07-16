"use client";

import Image from "next/image";
import MotionTransition from "./animations/TransitionComponent";

export default function AvatarPortfolio() {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/avatar-works.png"
        width={200}
        height={200}
        alt="Avatar Portfolio"
        className="w-full h-full"
      />
    </MotionTransition>
  );
}

import Image from "next/image";
import MotionTransition from "./animations/TransitionComponent";

export default function AvatarServices() {
  return (
    <MotionTransition
      position="right"
      className="-z-10 bottom-0 left-0 hidden lg:inline-block lg:absolute"
    >
      <Image
        src="/john3d.png"
        width={1000}
        height={1000}
        className="w-48 h-full"
        alt="Avatar"
      />
    </MotionTransition>
  );
}

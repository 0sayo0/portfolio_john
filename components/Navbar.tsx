"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { itemsNavbar } from "@/data";

import MotionTransition from "./animations/TransitionComponent";
import Tooltip from "./Tooltip";

export default function Navbar() {
  const router = usePathname(); // This indicates the route of where we are

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      <nav className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-black/25 background-blur-sm">
        {itemsNavbar.map((item) => (
          <Tooltip key={item.id} text={item.title}>
            <Link
              href={item.link}
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-red-500 ${
                router === item.link && "bg-red-500"
              }`}
            >
              {item.icon}
            </Link>
          </Tooltip>
        ))}
      </nav>
    </MotionTransition>
  );
}

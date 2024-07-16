import Link from "next/link";

import { socialNetworks } from "@/data";

import MotionTransition from "./animations/TransitionComponent";

export default function Header() {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10 px-20"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className=" text-zinc-700 text-4xl mt-3 font-bold text-center md:text-left">
              Jonathan
              <span className="text-red-500"> Morales</span>
            </h1>
            <h2 className="text-zinc-500 text-2xl font-semibold text-center md:text-left">
              Full Stack <span className="text-red-500"> Developer</span>
            </h2>
          </Link>
          <div className="flex items-center justify-center gap-7 mt-6 md:mt-0">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 text-zinc-700 hover:text-red-500"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
}

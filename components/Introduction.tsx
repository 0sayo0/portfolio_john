"use client";

import { Inconsolata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import CounterServices from "./CounterServices";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Introduction() {
  return (
    <div className="z-20 w-full h-full md:mt-40">
      <div className="z-20 grid items-center h-full md:py-0 md:grid-cols-2">
        <div className="flex justify-center items-center mt-72 md:mt-0 ">
          <Image
            src="/John.png"
            priority
            width={1000}
            height={1000}
            alt="Profile Pic"
            className="rounded-full w-60 h-60"
          />
        </div>

        <div className="flex flex-col justify-center max-w-lg">
          <h1
            className={`${inconsolata.className} mb-5 mt-5 text-zinc-700 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 md:mt-0`}
          >
            I am{" "}
            <TypeAnimation
              sequence={[
                "efficient",
                2000,
                "creative",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={25}
              repeat={0}
              className="font-semibold text-red-500"
            />
          </h1>

          <p className="text-zinc-600 mx-auto mb-2 text-xl md:mx-0 md:mb-4">
            My name is Jonathan Morales, I am a fullstack developer based in
            Mexico City. I am passionate about creating technological solutions
            comprehensive, from user interfaces and applications to efficient
            backend systems.
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 md:mb-0">
            <Link
              href="/portfolio"
              className="text-zinc-800 px-3 py-2 transition-all border-2 border-red-300 cursor-pointer text-md w-fit rounded-xl hover:shadow-lg hover:shadow-red-300"
            >
              See Projects
            </Link>
            <Link
              href="/contact"
              className="text-red-500 px-3 py-2 transition-all border-2 border-zinc-400 cursor-pointer text-md w-fit rounded-xl hover:shadow-lg hover:shadow-zinc-400"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <CounterServices />
    </div>
  );
}

"use client";

import CountUp from "react-countup";

import { dataCounter } from "@/data";

export default function CounterServices() {
  return (
    <div className="grid justify-between items-center max-w-4xl text-center grid-cols-1 gap-3 mx-auto mt-14 mb-32 md:mb-8 md:grid-cols-3 md:gap-6">
      {dataCounter.map(({ id, endCounter, text, lineRight }) => (
        <div key={id} className={`${lineRight && "ltr"}`}>
          <p className="flex mb-2 font-semibold justify-center text-2xl text-red-700">
            + <CountUp end={endCounter} start={0} duration={5} />{" "}
          </p>
          <p className="text-sm uppercase text-zinc-800">{text}</p>
        </div>
      ))}
    </div>
  );
}

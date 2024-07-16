//Page currently disabled

"use client";

import Avatar from "@/components/Avatar";
import Container from "@/components/Container";
import CounterServices from "@/components/CounterServices";
import TimeLine from "@/components/TimeLine";
import TransitionPage from "@/components/animations/TransitionPage";

export default function AboutMe() {
  return (
    <>
      <TransitionPage />
      <Container>
        <Avatar />
        <h1 className="text-zinc-700 text-2xl text-center leading-tight mt-72 md:text-left md:text-5xl md:mt-44">
          My entire{" "}
          <span className="font-semibold text-red-500">
            professional career{" "}
          </span>
        </h1>

        <CounterServices />

        <TimeLine />
      </Container>
    </>
  );
}

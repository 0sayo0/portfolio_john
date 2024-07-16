import AvatarServices from "@/components/AvatarServices";
import CircleImage from "@/components/CircleImage";
import SliderServices from "@/components/SliderServices";
import TransitionPage from "@/components/animations/TransitionPage";
import Link from "next/link";

export default function page() {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-6xl gap-10 mx-auto md:grid-cols-2 md:px-20 mt-48 mb-32 md:mt-0 md:mb-0">
        <div className="max-w-[450px] mt-20 md:mt-0">
          <h1 className="text-zinc-600 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            My <span className="font-semibold text-red-500">services</span>
          </h1>
          <p className="mb-3 text-xl text-zinc-600">
            I offer Fullstack web development services tailored to your needs.
            From basic technologies to the latest such as TypeScript, React,
            Tailwind CSS, Node.js, MongoDB, and much more!
          </p>
          <Link
            href="/contact"
            className="text-red-500 px-3 py-2 transition-all border-2 border-zinc-400 cursor-pointer text-md w-fit rounded-xl hover:shadow-lg hover:shadow-zinc-400"
          >
            Contact Me
          </Link>
        </div>

        {/* Slider */}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
}

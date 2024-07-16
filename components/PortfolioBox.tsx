import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

export default function PortfolioBox(props: PortfolioBoxProps) {
  const { data } = props;
  const { id, title, image, urlGithub, urlDemo } = data;
  return (
    <div className="p-3">
      <div className="border-2 border-teal-400 rounded-xl relative group overflow-hidden h-60 w-80">
        <Link href={urlDemo} target="_blank" className="block h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <h3 className="text-center font-semibold text-xl text-zinc-50">
              See <br /> {title}
            </h3>
          </div>
        </Link>
      </div>
      <div className="mt-4 text-center">
        <Link
          href={urlGithub}
          target="_blank"
          className="inline-block p-2 text-zinc-800 px-3 py-2 transition-all border-2 border-red-300 cursor-pointer text-md w-fit rounded-xl hover:shadow-lg hover:shadow-red-300"
        >
          See on Github
        </Link>
      </div>
    </div>
  );
}

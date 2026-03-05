import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

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
  const { title, image, urlGithub, urlDemo } = data;

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 border border-zinc-100 hover:-translate-y-1">
      {/* Contenedor de la Imagen */}
      <div className="relative w-full h-48 bg-zinc-50 overflow-hidden flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        {/* Capa oscura sutil en hover opcional si quieres que resalte más el botón, si no, puedes quitar este div */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Contenedor de Contenido */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-zinc-800 text-center mb-4">
          {title}
        </h3>

        {/* Botones Integrados en la parte inferior */}
        <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-zinc-100">
          <Link
            href={urlGithub}
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-zinc-600 bg-zinc-50 hover:text-white hover:bg-zinc-800 transition-colors text-sm font-medium"
          >
            <Github size={16} />
            Github
          </Link>
          <Link
            href={urlDemo}
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-white bg-red-500 hover:bg-red-600 transition-colors text-sm font-medium shadow-sm shadow-red-200"
          >
            <ExternalLink size={16} />
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

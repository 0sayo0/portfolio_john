import TransitionPage from "@/components/animations/TransitionPage";
import Container from "@/components/Container";
import PortfolioBox from "@/components/PortfolioBox";
import { dataPortfolio } from "@/data";

export default function page() {
  return (
    <Container>
      <TransitionPage />

      <div className="flex flex-col justify-center h-full mt-72 md:mt-0 md:mb-32">
        <h1 className="text-zinc-700 text-2xl leading-tight text-center md:text-4xl md:mb-8 font-light">
          My latest{" "}
          <span className="text-red-500 font-semibold">projects completed</span>
        </h1>

        {/* Ajusté el gap y el padding para darle un aspecto más premium */}
        <div className="relative z-10 grid max-w-5xl gap-8 px-4 mx-auto mt-4 sm:grid-cols-2 lg:grid-cols-3">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Container>
  );
}

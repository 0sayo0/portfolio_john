import CoverParticles from "@/components/animations/CoverParticles";
import TransitionPage from "@/components/animations/TransitionPage";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <>
      <main className="h-full">
        <TransitionPage />
        <div className="flex min-h-[100vh] h-full">
          <CoverParticles />
          <Introduction />
        </div>
      </main>
    </>
  );
}

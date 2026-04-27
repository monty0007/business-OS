import { lazy, Suspense } from "react";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { DemoVideo } from "./components/sections/DemoVideo";
import { AIAccountantWorks } from "./components/sections/AIAccountantWorks";

const SocialProof = lazy(() =>
  import("./components/sections/SocialProof").then((m) => ({ default: m.SocialProof }))
);
const ProblemSolution = lazy(() =>
  import("./components/sections/ProblemSolution").then((m) => ({ default: m.ProblemSolution }))
);
const Features = lazy(() =>
  import("./components/sections/Features").then((m) => ({ default: m.Features }))
);
const Testimonials = lazy(() =>
  import("./components/sections/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const FAQ = lazy(() =>
  import("./components/sections/FAQ").then((m) => ({ default: m.FAQ }))
);
const FinalCTA = lazy(() =>
  import("./components/sections/FinalCTA").then((m) => ({ default: m.FinalCTA }))
);
const Footer = lazy(() =>
  import("./components/sections/Footer").then((m) => ({ default: m.Footer }))
);

function SectionFallback() {
  return <div className="min-h-[40vh]" />;
}

function App() {
  return (
    <>
      <Navbar />
      <main className="px-4 md:px-16 pt-4 md:pt-6 pb-0">
        {/* All sections inside rounded card wrapper */}
        <div className="relative z-10 w-full overflow-clip rounded-3xl shadow-2xl">
          <Hero />
          <div className="h-0.5 bg-orange-500" />
          <DemoVideo />
          <div className="h-0.5 bg-orange-500" />
          <Suspense fallback={<SectionFallback />}>
            <SocialProof />
          </Suspense>
          <div className="h-0.5 bg-orange-500" />
          <AIAccountantWorks />
          <div className="h-0.5 bg-orange-500" />
          <Suspense fallback={<SectionFallback />}>
            <ProblemSolution />
          </Suspense>
          <div className="h-0.5 bg-orange-500" />
          <Suspense fallback={<SectionFallback />}>
            <Features />
          </Suspense>
          <div className="h-0.5 bg-orange-500" />
          <Suspense fallback={<SectionFallback />}>
            <Testimonials />
          </Suspense>
          <div className="h-0.5 bg-orange-500" />
          <Suspense fallback={<SectionFallback />}>
            <FAQ />
          </Suspense>
        </div>

        {/* FinalCTA + Footer — same padding as above, sticky reveal */}
        <Suspense fallback={<SectionFallback />}>
          <FinalCTA />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default App;

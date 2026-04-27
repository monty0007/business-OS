import { BlurFade } from "../ui/blur-fade";
import { useCountUp } from "../../hooks/useCountUp";

const companies = [
  "Acc 'N' More",
  "Vadivel & Co",
  "Redington Partners",
  "FinEdge Advisory",
];

interface StatCardProps {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

function StatCard({ label, value, suffix, description }: StatCardProps) {
  const ref = useCountUp({ end: value, suffix });

  return (
    <div className="flex flex-col items-start rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-8 min-h-[180px] justify-center">
      <span
        ref={ref}
        className="block font-body text-5xl font-extrabold text-orange-400 md:text-6xl"
      >
        0{suffix}
      </span>
      <p className="mt-3 text-base font-semibold text-white">{label}</p>
      <p className="mt-1 text-sm text-zinc-500">{description}</p>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full bg-zinc-950 px-6 py-16 md:px-12 md:py-20 min-h-screen flex flex-col justify-evenly">

        {/* Row 1: heading left, companies right */}
        <BlurFade>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="shrink-0">
              <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Trusted by</p>
              <p className="mt-0.5 text-sm font-semibold text-white">
                Join over <span className="text-orange-400">500+</span> businesses using Business OS
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-end">
              {companies.map((c) => (
                <span key={c} className="text-sm font-medium text-zinc-500 whitespace-nowrap">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Divider */}
        <div className="my-8 h-px bg-zinc-800" />

        {/* Row 2: quote left, attribution right */}
        <BlurFade delay={0.1}>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
            <blockquote className="flex-1 font-body text-2xl font-bold leading-snug text-white md:text-3xl">
              &ldquo;We processed<br />
              <span className="text-orange-400">75% more invoices</span><br />
              while cutting manual Tally entry work in half.&rdquo;
            </blockquote>
            <div className="flex shrink-0 items-center gap-4 md:flex-col md:items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 font-body text-base font-bold text-orange-400">
                V
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Vadivel CMA</p>
                <p className="text-xs text-zinc-500">Founder, Vadivel &amp; Co</p>
                <p className="mt-2 text-xs text-zinc-600 max-w-[200px]">
                  Every accountant on our team is more productive with Business OS.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Divider */}
        <div className="my-8 h-px bg-zinc-800" />

        {/* Row 3: stat cards */}
        <BlurFade delay={0.2}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <StatCard
              label="Faster invoice processing"
              value={70}
              suffix="%"
              description="Reduction in manual data entry time"
            />
            <StatCard
              label="Team efficiency boost"
              value={4}
              suffix="x"
              description="Faster Tally sync vs manual entry"
            />
            <StatCard
              label="OCR accuracy"
              value={95}
              suffix="%"
              description="Even on handwritten bills"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

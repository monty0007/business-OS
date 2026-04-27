import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { BlurFade } from "../ui/blur-fade";
import {
  Clock,
  FolderOpen,
  CalendarX,
  EyeOff,
  Sparkles,
  Layers,
  MousePointerClick,
  BarChart3,
} from "lucide-react";

const proofStats = [
  { value: "300M+", label: "Transactions Analyzed" },
  { value: "95%+", label: "OCR Accuracy" },
  { value: "4", label: "Steps to Tally Sync" },
  { value: "1-Click", label: "Tally Push" },
];

const problems = [
  { icon: Clock,      text: "Hours wasted entering bank statements manually into Tally" },
  { icon: FolderOpen, text: "Bills lost in emails, WhatsApp threads, shared drives" },
  { icon: CalendarX,  text: "Tally entries done in bulk panic at month-end" },
  { icon: EyeOff,     text: "No real-time visibility into what's paid vs pending" },
];

const solutionFeatures = [
  {
    icon: Sparkles,
    title: "Auto-Mapping AI",
    description: "Reads and maps every bank transaction automatically — zero manual entry.",
    gradient: "from-violet-500/30 to-transparent",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-300",
  },
  {
    icon: Layers,
    title: "Real-Time Bills",
    description: "Bills pulled from email & WhatsApp, matched and mapped the moment they arrive.",
    gradient: "from-orange-500/30 to-transparent",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-300",
  },
  {
    icon: MousePointerClick,
    title: "One-Click Push",
    description: "Push clean, reconciled entries to Tally in a single click — any day of the month.",
    gradient: "from-emerald-500/30 to-transparent",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-300",
  },
  {
    icon: BarChart3,
    title: "Live AP Dashboard",
    description: "Full visibility into paid vs pending — updated live across your entire AP pipeline.",
    gradient: "from-sky-500/30 to-transparent",
    iconBg: "bg-sky-500/20",
    iconColor: "text-sky-300",
  },
];

export function ProblemSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.from(".problem-item", {
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      x: -40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.from(".solution-card", {
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.55,
      ease: "power3.out",
      delay: 0.15,
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="problem-solution" className="relative overflow-hidden">
      <div className="flex min-h-screen w-full flex-col justify-center gap-8 bg-white px-6 py-12 md:px-16 md:py-14 lg:min-h-[calc(100svh-4.5rem)] lg:gap-6 lg:py-8">

        {/* Header */}
        <BlurFade>
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400">
              Before vs After
            </span>
            <h2 className="mt-4 font-body text-3xl font-bold text-zinc-900 md:text-4xl leading-tight">
              Stop firefighting your books.{" "}
              <span className="text-orange-600">Start running your business.</span>
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {proofStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-left shadow-sm"
                >
                  <p className="text-xl font-extrabold tracking-tight text-zinc-900 md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Main grid: problems left, feature cards right */}
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-6">

          {/* Problem column */}
          <div className="overflow-hidden rounded-2xl border border-red-100 bg-red-50/50">
            <div className="flex items-center gap-2.5 border-b border-red-100 bg-red-100/60 px-5 py-3">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-red-600">
                The old way
              </span>
            </div>
            <div className="flex flex-col gap-0 divide-y divide-red-100">
              {problems.map(({ icon: Icon, text }, i) => (
                <div key={i} className="problem-item flex items-start gap-3.5 px-5 py-3.5">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <Icon size={15} className="text-red-500" />
                  </div>
                  <p className="pt-1 text-sm leading-relaxed text-zinc-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution column */}
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-xl shadow-zinc-900/30">
            {/* Header */}
            <div className="flex items-center gap-2.5 border-b border-zinc-800 bg-zinc-900 px-5 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                Business OS handles it all
              </span>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 gap-px bg-zinc-800 sm:grid-cols-2">
              {solutionFeatures.map(({ icon: Icon, title, description, gradient, iconBg, iconColor }, i) => (
                <div
                  key={i}
                  className="solution-card group relative overflow-hidden bg-zinc-950 p-5 transition-colors duration-300 hover:bg-zinc-900"
                >
                  {/* Ambient glow */}
                  <div className={`pointer-events-none absolute -top-6 -left-6 h-28 w-28 rounded-full bg-gradient-to-br ${gradient} blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-80`} />

                  {/* Icon */}
                  <div className={`relative z-10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}>
                    <Icon size={18} className={iconColor} strokeWidth={1.75} />
                  </div>

                  {/* Text */}
                  <h3 className="relative z-10 mb-1.5 text-sm font-bold tracking-tight text-white">
                    {title}
                  </h3>
                  <p className="relative z-10 text-xs leading-relaxed text-zinc-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer CTA strip */}
            <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-900/60 px-5 py-3">
              <span className="text-xs text-zinc-500">Start for free — no credit card needed</span>
              <button className="rounded-lg bg-orange-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-orange-500 transition-colors">
                Try it now →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

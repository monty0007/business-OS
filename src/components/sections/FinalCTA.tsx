import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { ArrowRight, Zap } from "lucide-react";

// ─── Integration logos ───────────────────────────────────────────────────────
const integrations = [
  {
    label: "Tally Prime",
    bg: "bg-[#1a1a2e]",
    border: "border-[#3b3b6b]",
    logo: (
      <svg viewBox="0 0 40 40" width="22" height="22" fill="none">
        <rect width="40" height="40" rx="8" fill="#2a2a5a" />
        <text x="5" y="28" fontSize="18" fontWeight="800" fill="#7b7bff" fontFamily="monospace">T</text>
        <text x="18" y="28" fontSize="12" fontWeight="600" fill="#a0a0cc" fontFamily="monospace">P</text>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    bg: "bg-[#0d1f13]",
    border: "border-[#1f4d2a]",
    logo: (
      <svg viewBox="0 0 40 40" width="22" height="22" fill="none">
        <rect width="40" height="40" rx="8" fill="#0d1f13" />
        <path d="M20 8C13.37 8 8 13.37 8 20c0 2.14.55 4.14 1.52 5.87L8 32l6.29-1.49A11.94 11.94 0 0020 32c6.63 0 12-5.37 12-12S26.63 8 20 8z" fill="#25D366" />
        <path d="M16 15.5c-.3-.7-1.1-.7-1.4 0l-.6 1.4c-.2.4-.1.9.2 1.2l.8.8c-.3.9-1 2-1.8 2.8l-.8-.8c-.3-.3-.8-.4-1.2-.2l-1.4.6c-.7.3-.7 1.1 0 1.4l1 .4c1 .4 2.2.1 3-1 .8-1 1.4-2.2 1.6-3.4.1-.6-.1-1.2-.4-1.7l-.5-1z" fill="white" />
      </svg>
    ),
  },
  {
    label: "Gmail",
    bg: "bg-[#1f1210]",
    border: "border-[#4d2010]",
    logo: (
      <svg viewBox="0 0 40 40" width="22" height="22" fill="none">
        <rect width="40" height="40" rx="8" fill="#1f1210" />
        <path d="M8 14l12 9 12-9v14H8V14z" fill="none" stroke="#EA4335" strokeWidth="2" />
        <path d="M8 14l12 9 12-9" fill="none" stroke="#EA4335" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Excel",
    bg: "bg-[#0d1f12]",
    border: "border-[#1a4d28]",
    logo: (
      <svg viewBox="0 0 40 40" width="22" height="22" fill="none">
        <rect width="40" height="40" rx="8" fill="#0d1f12" />
        <text x="7" y="28" fontSize="22" fontWeight="800" fill="#217346" fontFamily="monospace">X</text>
      </svg>
    ),
  },
  {
    label: "Google Drive",
    bg: "bg-[#1a1612]",
    border: "border-[#4d3a10]",
    logo: (
      <svg viewBox="0 0 40 40" width="22" height="22" fill="none">
        <rect width="40" height="40" rx="8" fill="#1a1612" />
        <path d="M20 10l8 14H12L20 10z" fill="#0F9D58" />
        <path d="M12 24l4 7H8l4-7z" fill="#4285F4" />
        <path d="M28 24l4 7H24l4-7z" fill="#FBBC05" />
      </svg>
    ),
  },
  {
    label: "GST Portal",
    bg: "bg-[#1a1510]",
    border: "border-[#4d3510]",
    logo: (
      <svg viewBox="0 0 40 40" width="22" height="22" fill="none">
        <rect width="40" height="40" rx="8" fill="#1a1510" />
        <text x="5" y="27" fontSize="14" fontWeight="800" fill="#FF9500" fontFamily="monospace">GST</text>
      </svg>
    ),
  },
  {
    label: "Bank",
    bg: "bg-[#101828]",
    border: "border-[#1e3a5f]",
    logo: (
      <svg viewBox="0 0 40 40" width="22" height="22" fill="none">
        <rect width="40" height="40" rx="8" fill="#101828" />
        <rect x="9" y="18" width="22" height="3" rx="1" fill="#60a5fa" />
        <rect x="12" y="22" width="3" height="8" rx="1" fill="#60a5fa" />
        <rect x="19" y="22" width="3" height="8" rx="1" fill="#60a5fa" />
        <rect x="26" y="22" width="3" height="8" rx="1" fill="#60a5fa" />
        <path d="M20 10l12 8H8l12-8z" fill="#93c5fd" />
      </svg>
    ),
  },
  {
    label: "Razorpay",
    bg: "bg-[#0e1020]",
    border: "border-[#1e2050]",
    logo: (
      <svg viewBox="0 0 40 40" width="22" height="22" fill="none">
        <rect width="40" height="40" rx="8" fill="#0e1020" />
        <path d="M14 28l4-16 10 10-6 1 4 5H22l-3-5-5 5z" fill="#3395FF" />
      </svg>
    ),
  },
];

// Positions for floating chips: [top%, left%, animationDelay]
const chipPositions = [
  { top: "8%",  left: "4%",  delay: 0 },
  { top: "18%", left: "82%", delay: 0.4 },
  { top: "38%", left: "92%", delay: 0.8 },
  { top: "62%", left: "88%", delay: 1.2 },
  { top: "80%", left: "78%", delay: 0.2 },
  { top: "85%", left: "8%",  delay: 0.6 },
  { top: "60%", left: "2%",  delay: 1.0 },
  { top: "28%", left: "6%",  delay: 1.4 },
];

export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Floating chips
    gsap.utils.toArray<HTMLElement>(".cta-chip").forEach((el, i) => {
      gsap.to(el, {
        y: i % 2 === 0 ? -12 : 12,
        duration: 2.8 + i * 0.3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: i * 0.25,
      });
    });

    // Orb pulse
    gsap.to(".cta-orb-1", { scale: 1.25, opacity: 0.5, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".cta-orb-2", { scale: 1.3, opacity: 0.35, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.5 });

    // Content fade-in
    gsap.from(".cta-content", {
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative z-20 overflow-hidden bg-zinc-950">
      {/* ── Background layers ── */}

      {/* Fine dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial vignette to darken edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Orange center glow */}
      <div
        aria-hidden="true"
        className="cta-orb-1 pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/15 blur-[110px]"
      />

      {/* Violet accent glow — top-right */}
      <div
        aria-hidden="true"
        className="cta-orb-2 pointer-events-none absolute -top-16 right-0 h-72 w-72 rounded-full bg-violet-600/15 blur-[90px]"
      />

      {/* Blue accent glow — bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-0 h-64 w-64 rounded-full bg-blue-600/10 blur-[80px]"
      />

      {/* Horizontal beam lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />

      {/* ── Floating integration chips ── */}
      {integrations.map((intg, i) => (
        <div
          key={intg.label}
          aria-hidden="true"
          className={`cta-chip pointer-events-none absolute hidden md:flex items-center gap-2 rounded-2xl border ${intg.border} ${intg.bg} px-3 py-2 shadow-lg backdrop-blur-sm`}
          style={{ top: chipPositions[i].top, left: chipPositions[i].left }}
        >
          {intg.logo}
          <span className="text-[11px] font-medium text-zinc-300 whitespace-nowrap">{intg.label}</span>
        </div>
      ))}

      {/* ── Content ── */}
      <div className="cta-content relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-32 pt-24 text-center">

        {/* Eyebrow badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5">
          <Zap size={12} className="text-orange-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            Built for Indian businesses
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-body max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
          Stop doing
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            accounting.
          </span>
        </h2>
        <p className="mt-3 font-body text-2xl font-bold text-zinc-300 md:text-3xl">
          Start running your business.
        </p>

        {/* Body */}
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-zinc-400">
          Business OS handles the repetitive work — AP processing, Tally sync,
          order management, dashboards — so your team focuses on what actually
          grows the company.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button className="group flex items-center gap-2.5 rounded-xl bg-orange-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/25 transition-all hover:bg-orange-500 hover:shadow-orange-500/30 hover:-translate-y-0.5">
            Schedule a Demo
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <button className="flex items-center gap-2 rounded-xl border border-zinc-700 px-8 py-3.5 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-white">
            View pricing
          </button>
        </div>

        {/* Social proof strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-green-400" />No credit card required</span>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-green-400" />Setup in under 10 minutes</span>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-green-400" />Works with your existing Tally</span>
        </div>
      </div>
    </section>
  );
}

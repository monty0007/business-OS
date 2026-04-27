import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Upload, Brain, GitMerge, CheckCircle, ArrowRight } from "lucide-react";

const STEP_DURATION = 5000; // ms each step auto-advances

const steps = [
  {
    number: "01",
    icon: <Link2 size={18} />,
    title: "Connect to Your Accounting Tool",
    body: [
      "Easily integrate AI Accountant to Tally in a few clicks.",
      "Explore your own powerful dashboard with advanced metrics.",
      "Deep insights into your AP, AR, and ledger health.",
      "One-time setup — stays connected automatically.",
    ],
    visual: (
      <div className="flex flex-col gap-4 w-full">
        <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-5">
          <p className="mb-3 text-xs font-mono text-zinc-400 uppercase tracking-wider">Connect Integration</p>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 font-bold text-lg">B</div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-500 to-zinc-600 rounded" />
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-700 text-zinc-300 font-bold text-xs">Tally</div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400">Connected — Tally Prime</span>
          </div>
        </div>
        <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-5">
          <p className="text-xs text-zinc-500 mb-3">Dashboard preview</p>
          <div className="grid grid-cols-3 gap-2">
            {["₹12.4L", "248", "98%"].map((v, i) => (
              <div key={i} className="rounded-lg bg-zinc-900 p-3 text-center">
                <p className="text-lg font-bold text-orange-400">{v}</p>
                <p className="text-[10px] text-zinc-600 mt-0.5">{["Revenue", "Invoices", "Accuracy"][i]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    icon: <Upload size={18} />,
    title: "Upload Hundreds of Statements & Bills in One Go",
    body: [
      "Drag & drop PDFs, Excels, and images in one shot.",
      "AI reads every line and categorizes vendors automatically.",
      "Handles bank statements, credit cards, and vendor bills.",
      "No manual data entry, even at scale.",
    ],
    visual: (
      <div className="flex flex-col gap-4 w-full">
        <div className="rounded-xl border border-dashed border-orange-500/40 bg-orange-500/5 p-6 text-center">
          <Upload size={28} className="mx-auto text-orange-400 mb-3" />
          <p className="text-sm text-white font-medium">Drop files here</p>
          <p className="text-xs text-zinc-500 mt-1">PDF, Excel, PNG, JPG — any format</p>
        </div>
        <div className="space-y-2">
          {["statement_jan.pdf", "vendor_bills_feb.xlsx", "credit_card_mar.pdf"].map((f, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-2.5">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-xs text-zinc-300 flex-1">{f}</span>
              <span className="text-[10px] text-zinc-500">✓ Processed</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    icon: <Brain size={18} />,
    title: "Understands Handwritten Bills",
    body: [
      "OCR engine reads handwritten and scanned bills.",
      "95%+ accuracy even on poor quality scans.",
      "Maps vendors to correct ledgers automatically.",
      "Supports regional languages and mixed formats.",
    ],
    visual: (
      <div className="flex flex-col gap-4 w-full">
        <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-5">
          <p className="mb-3 text-xs font-mono text-zinc-400 uppercase">OCR Extraction</p>
          <div className="rounded-lg bg-zinc-900 border border-zinc-700 p-4 font-mono text-xs text-zinc-400 leading-loose italic mb-4">
            "Redington Pvt Ltd<br/>Inv #847 — ₹48,250<br/>Date: 12-Jan-24"
          </div>
          <div className="space-y-2">
            {[["Vendor", "Redington Pvt Ltd"], ["Amount", "₹48,250"], ["Date", "12 Jan 2024"]].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <span className="text-xs text-zinc-500">{k}</span>
                <span className="text-xs text-white font-medium flex items-center gap-1"><CheckCircle size={10} className="text-green-400" />{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-2.5">
          <Brain size={14} className="text-green-400" />
          <span className="text-xs text-green-400">95.3% confidence — auto-approved</span>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    icon: <GitMerge size={18} />,
    title: "Transactions are Auto-Mapped",
    body: [
      "AI matches transactions to the right ledgers instantly.",
      "Bills and invoices are linked automatically.",
      "Saves hours of tedious bookkeeping every week.",
      "Learns your patterns and improves over time.",
    ],
    visual: (
      <div className="flex flex-col gap-4 w-full">
        <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-5">
          <p className="mb-3 text-xs font-mono text-zinc-400 uppercase">Auto-Mapping</p>
          <div className="space-y-3">
            {[
              { tx: "Redington — ₹48,250", ledger: "Purchase A/c", match: "99%" },
              { tx: "HDFC Credit Card", ledger: "Bank Charges", match: "97%" },
              { tx: "Savex Distrib.", ledger: "Purchase A/c", match: "95%" },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-1 rounded bg-zinc-900 px-3 py-2 text-xs text-zinc-400">{row.tx}</div>
                <ArrowRight size={12} className="text-orange-400 shrink-0" />
                <div className="flex-1 rounded bg-orange-500/10 border border-orange-500/20 px-3 py-2 text-xs text-orange-300">{row.ledger}</div>
                <span className="text-[10px] text-green-400 w-8 text-right">{row.match}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "05",
    icon: <CheckCircle size={18} />,
    title: "One-Click Sync to Accounting Tool",
    body: [
      "Review your data and approve with one click.",
      "Pushes directly to Tally Prime via HTTP XML API.",
      "Supports Item Invoice and Accounting Voucher modes.",
      "Records stay up-to-date with zero manual effort.",
    ],
    visual: (
      <div className="flex flex-col gap-4 w-full">
        <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-5">
          <p className="mb-3 text-xs font-mono text-zinc-400 uppercase">Ready to Push</p>
          <div className="space-y-2 mb-5">
            {[["Vouchers ready", "24"], ["Total value", "₹3,48,200"], ["Ledgers mapped", "100%"]].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <span className="text-xs text-zinc-500">{k}</span>
                <span className="text-xs text-white font-semibold">{v}</span>
              </div>
            ))}
          </div>
          <button className="w-full rounded-lg bg-orange-600 py-3 text-sm font-semibold text-white flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors">
            <CheckCircle size={15} />
            Push to Tally
          </button>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-2.5">
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400">24 vouchers synced to Tally Prime</span>
        </div>
      </div>
    ),
  },
];

const STEP_LABELS: Record<string, string> = {
  "01": "Connect",
  "02": "Upload",
  "03": "Extract",
  "04": "Map",
  "05": "Sync",
};

export function AIAccountantWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [timerProgress, setTimerProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const startTimeRef = useRef<number>(Date.now());
  const rafRef = useRef<number>(0);
  const step = steps[activeStep];

  const advance = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  }, []);

  // Pause/resume when section enters/leaves viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Restart timer whenever the active step changes OR visibility changes
  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (!isVisible) return; // paused while off-screen

    startTimeRef.current = Date.now();
    setTimerProgress(0);

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const p = Math.min(100, (elapsed / STEP_DURATION) * 100);
      setTimerProgress(p);
      if (p < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        advance();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [activeStep, advance, isVisible]);

  const handleStepClick = (i: number) => {
    setActiveStep(i);
    // useEffect above will restart the timer
  };

  return (
    <section ref={sectionRef} className="relative bg-zinc-950 py-16 md:py-24 overflow-hidden">
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">

        {/* ── Header ── */}
        <div className="mb-10 md:mb-14 text-center">
          <p className="mb-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
            How it works
          </p>
          <h2 className="font-body text-3xl font-bold text-white md:text-4xl leading-tight">
            How AI Accountant{" "}
            <span className="text-orange-400">Works</span>
          </h2>
          <p className="mt-3 mx-auto max-w-md text-sm text-zinc-400 leading-relaxed">
            From raw bills to Tally entries — fully automated, zero manual effort.
          </p>
        </div>

        {/* ── Step tabs ── */}
        <div className="mb-6 flex gap-2 md:gap-3 overflow-x-auto pb-1 scrollbar-none">
          {steps.map((s, i) => {
            const isActive = i === activeStep;
            const isDone = i < activeStep;
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleStepClick(i)}
                className={`relative flex shrink-0 flex-col items-start gap-1.5 rounded-2xl px-4 py-3.5 md:flex-1 transition-all duration-300 border overflow-hidden ${
                  isActive
                    ? "bg-zinc-800 border-orange-500/60 shadow-lg shadow-orange-500/10"
                    : isDone
                    ? "bg-zinc-900 border-zinc-700 opacity-70 hover:opacity-100 hover:border-zinc-600"
                    : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {/* Icon + number row */}
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : isDone
                        ? "bg-zinc-700 text-zinc-400"
                        : "bg-zinc-800 text-zinc-600"
                    }`}
                  >
                    {isDone ? <CheckCircle size={13} /> : s.number}
                  </span>
                  <span className={`hidden md:block text-xs font-semibold ${isActive ? "text-white" : "text-zinc-500"}`}>
                    {STEP_LABELS[s.number]}
                  </span>
                </div>

                {/* Short title visible on desktop */}
                <span
                  className={`hidden md:block text-[11px] leading-snug text-left transition-colors duration-200 ${
                    isActive ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  {s.title.length > 22 ? s.title.slice(0, 22) + "…" : s.title}
                </span>

                {/* Timer bar at bottom of active tab */}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-none ${
                    isActive ? "bg-orange-500" : "bg-transparent"
                  }`}
                  style={{ width: isActive ? `${timerProgress}%` : "0%" }}
                />
              </button>
            );
          })}
        </div>

        {/* ── Content panel ── */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 md:h-[460px]"
            >
              {/* Left: text */}
              <div className="flex flex-col justify-center p-7 md:p-10 border-b md:border-b-0 md:border-r border-zinc-800 md:overflow-y-auto">
                {/* Step number watermark + icon */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-7xl font-extrabold text-orange-500/10 leading-none select-none">
                    {step.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-400">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-body text-xl font-bold text-white md:text-2xl leading-snug mb-5 max-w-sm">
                  {step.title}
                </h3>

                <ul className="mb-7 space-y-3">
                  {step.body.map((line, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <button className="rounded-xl bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-500 transition-colors">
                    Get started free
                  </button>
                  <button className="rounded-xl border border-zinc-700 px-6 py-2.5 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors">
                    Learn more
                  </button>
                </div>

                {/* Step progress indicator */}
                <div className="mt-8 flex items-center gap-3">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleStepClick(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStep
                          ? "w-8 bg-orange-500"
                          : i < activeStep
                          ? "w-2 bg-zinc-600"
                          : "w-2 bg-zinc-800 hover:bg-zinc-700"
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                  <span className="ml-auto font-mono text-xs text-zinc-600 tabular-nums">
                    {String(activeStep + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Right: visual */}
              <div className="flex flex-col justify-center p-7 md:p-10 bg-zinc-950/40 md:overflow-hidden">
                {step.visual}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

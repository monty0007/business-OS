import React, { useEffect, useState } from "react";
import { Upload, CheckCircle, RefreshCw, FileText, Database } from "lucide-react";

const STEPS = ["upload", "extract", "push"] as const;
type Step = (typeof STEPS)[number];

const STEP_DURATION = 3000; // ms per step

const invoiceRows = [
  { label: "Vendor", value: "Purrfect Supplies Co.", color: "text-orange-400" },
  { label: "Invoice No", value: "INV-2024-0847", color: "text-white" },
  { label: "Amount", value: "₹4,82,500.00", color: "text-green-400" },
  { label: "GSTIN", value: "29AABCR1234F1Z5", color: "text-zinc-300" },
  { label: "Date", value: "15 Jan 2024", color: "text-zinc-300" },
];

function UploadStep({ active }: { active: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) { setProgress(0); return; }
    setProgress(0);
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, Math.round((elapsed / (STEP_DURATION * 0.8)) * 100));
      setProgress(p);
      if (p >= 100) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-6">
      <div
        className={`relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 transition-all duration-500 ${
          active ? "border-orange-500 bg-orange-500/10 scale-110" : "border-zinc-700 bg-zinc-800"
        }`}
      >
        <FileText size={36} className={active ? "text-orange-400" : "text-zinc-600"} />
        {active && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
            <Upload size={10} className="text-white" />
          </span>
        )}
      </div>
      <p className="mt-4 text-sm font-medium text-white">invoice_purrfect_jan.pdf</p>
      <p className="mt-1 text-xs text-zinc-500">2.4 MB · PDF</p>
      <div className="mt-6 w-full max-w-xs">
        <div className="mb-1.5 flex justify-between text-xs text-zinc-400">
          <span>Uploading…</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-zinc-800">
          <div
            className="h-2 rounded-full bg-orange-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function ExtractStep({ active }: { active: boolean }) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (!active) { setVisible(0); return; }
    setVisible(0);
    const delay = STEP_DURATION / invoiceRows.length;
    invoiceRows.forEach((_, i) => {
      setTimeout(() => setVisible(i + 1), i * delay * 0.9);
    });
  }, [active]);

  return (
    <div className="px-6 py-8">
      <div className="mb-4 flex items-center gap-2">
        <Database size={14} className="text-blue-400" />
        <span className="text-xs font-mono text-zinc-400">AI extracting fields…</span>
        {active && (
          <span className="ml-auto flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
        )}
      </div>
      <div className="space-y-2.5">
        {invoiceRows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between rounded-lg bg-zinc-800/80 px-4 py-2.5 transition-all duration-300 ${
              visible > i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="text-xs text-zinc-500 w-24">{row.label}</span>
            <span className={`text-xs font-mono font-medium ${row.color}`}>{row.value}</span>
            {visible > i && (
              <CheckCircle size={12} className="text-green-400 ml-3 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PushStep({ active }: { active: boolean }) {
  const [pushed, setPushed] = useState(false);

  useEffect(() => {
    if (!active) { setPushed(false); return; }
    const t = setTimeout(() => setPushed(true), STEP_DURATION * 0.4);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-6">
      <div className="w-full max-w-xs rounded-xl border border-zinc-700 bg-zinc-800 p-5">
        <p className="mb-4 text-xs font-mono text-zinc-400">Voucher ready to push</p>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-zinc-500">Party Ledger</span>
            <span className="text-white font-medium">Purrfect Supplies Co.</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Voucher Type</span>
            <span className="text-orange-400">Item Invoice</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Amount</span>
            <span className="text-green-400 font-mono">₹4,82,500</span>
          </div>
        </div>
        <button
          className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all duration-500 ${
            pushed
              ? "bg-green-600 text-white scale-105"
              : "bg-orange-600 text-white hover:bg-orange-500"
          }`}
        >
          {pushed ? (
            <>
              <CheckCircle size={15} />
              Synced to Tally ✓
            </>
          ) : (
            <>
              <RefreshCw size={15} className={active ? "animate-spin" : ""} />
              Push to Tally →
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export function DemoVideo() {
  const [step, setStep] = useState<Step>("upload");
  const [, setStepIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStepIndex((i) => {
        const next = (i + 1) % STEPS.length;
        setStep(STEPS[next]);
        return next;
      });
    }, STEP_DURATION + 400);
    return () => clearInterval(timer);
  }, []);

  const stepMeta: Record<Step, { label: string; sub: string; icon: React.ReactNode }> = {
    upload: {
      label: "Upload File",
      sub: "Drop PDFs, Excel or photos",
      icon: <Upload size={22} />,
    },
    extract: {
      label: "AI Extracts Data",
      sub: "GPT-4o + OCR reads every field",
      icon: <Database size={22} />,
    },
    push: {
      label: "Push to Tally",
      sub: "One-click sync to Tally Prime",
      icon: <RefreshCw size={22} />,
    },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="w-full bg-zinc-950 overflow-hidden min-h-screen flex flex-col">
        {/* Section header */}
        <div className="px-6 pt-10 pb-4 text-center md:px-16">
          <p className="mb-2 text-sm font-mono text-orange-400 uppercase tracking-wider">Live Demo</p>
          <h2 className="font-body text-2xl font-bold text-white md:text-3xl">
            See it in <span className="text-orange-400">action</span>
          </h2>
        </div>

        {/* Main layout: sidebar + content */}
        <div className="flex flex-col md:flex-row flex-1 gap-4 px-4 pb-6 md:gap-6 md:px-8 md:pb-10">

          {/* Left: step navigation */}
          <div className="flex md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible md:w-64 md:shrink-0">
            {STEPS.map((s, i) => {
              const isActive = step === s;
              return (
                <button
                  key={s}
                  onClick={() => { setStep(s); setStepIndex(i); }}
                  className={`relative flex items-start gap-4 rounded-2xl p-4 md:p-5 text-left transition-all duration-300 min-w-[180px] md:min-w-0 border ${
                    isActive
                      ? "bg-zinc-800 border-orange-500 shadow-lg shadow-orange-500/10"
                      : "bg-zinc-900 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/60"
                  }`}
                >
                  {/* Left accent bar */}
                  <span
                    className={`absolute left-0 top-4 bottom-4 w-1 rounded-full transition-all duration-300 ${
                      isActive ? "bg-orange-500" : "bg-transparent"
                    }`}
                  />

                  {/* Step number + icon */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive ? "bg-orange-500 text-white" : "bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    {stepMeta[s].icon}
                  </div>

                  <div className="flex flex-col">
                    <span
                      className={`text-xs font-mono mb-0.5 transition-colors duration-300 ${
                        isActive ? "text-orange-400" : "text-zinc-600"
                      }`}
                    >
                      Step {i + 1}
                    </span>
                    <span
                      className={`text-sm font-semibold leading-tight transition-colors duration-300 ${
                        isActive ? "text-white" : "text-zinc-400"
                      }`}
                    >
                      {stepMeta[s].label}
                    </span>
                    <span
                      className={`mt-1 text-xs leading-snug transition-colors duration-300 ${
                        isActive ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      {stepMeta[s].sub}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: demo content */}
          <div className="flex-1 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 flex flex-col min-h-[400px] md:min-h-0">
            {/* Fake browser chrome */}
            <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/80 px-4 py-3 shrink-0">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>
              <div className="mx-auto flex items-center gap-2 rounded bg-zinc-800 px-3 py-1 text-xs text-zinc-500">
                <span>app.businessos.in</span>
              </div>
              <div
                className={`ml-auto flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium transition-all duration-300 ${
                  step === "push" ? "bg-green-500/20 text-green-400" : "bg-orange-500/15 text-orange-400"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                {step === "upload" ? "Processing" : step === "extract" ? "Extracting" : "Syncing"}
              </div>
            </div>

            {/* Animated content */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              {step === "upload" && <UploadStep active={step === "upload"} />}
              {step === "extract" && <ExtractStep active={step === "extract"} />}
              {step === "push" && <PushStep active={step === "push"} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


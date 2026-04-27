import { type ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { BlurFade } from "../ui/blur-fade";
import {
  type LucideIcon,
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle,
  FileText,
  Link,
  RefreshCw,
  Upload,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
type CardFrameProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  glow: string;
  className: string;
  children: ReactNode;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const integrations = [
  { abbr: "WA", name: "WhatsApp" },
  { abbr: "EM", name: "Email" },
  { abbr: "XL", name: "Excel" },
  { abbr: "GD", name: "Drive" },
  { abbr: "TP", name: "Tally Prime" },
];

const workflowSteps = [
  { num: "01", title: "Connect", icon: Link },
  { num: "02", title: "Upload", icon: Upload },
  { num: "03", title: "Map", icon: Brain },
  { num: "04", title: "Sync", icon: CheckCircle },
];

// ─── Integration Chip ─────────────────────────────────────────────────────────
function IntegrationChip({ abbr, name }: { abbr: string; name: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-[#2a2a2e] bg-[#1c1c1e] px-3 py-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#3a3a3c] text-[9px] font-bold tracking-widest text-white">
        {abbr}
      </span>
      <span className="text-[11px] font-medium text-[#98989d]">{name}</span>
    </div>
  );
}

// ─── Card Frame ───────────────────────────────────────────────────────────────
function CardFrame({
  id,
  eyebrow,
  title,
  description,
  icon: Icon,
  accent,
  glow,
  className,
  children,
}: CardFrameProps) {
  return (
    <article
      id={id}
      className={`showcase-card scroll-mt-28 relative overflow-hidden rounded-[20px] border border-[#2a2a2e] bg-[#141414] ${className}`}
    >
      {/* Per-card top glow tint */}
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-28 ${glow}`} />
      <div className="relative z-10 flex h-full flex-col gap-3 p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${accent}`}>
              {eyebrow}
            </p>
            <h3 className="mt-1.5 text-[15px] font-semibold leading-snug tracking-tight text-white">
              {title}
            </h3>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1c1c1e]">
            <Icon size={16} className={accent} />
          </span>
        </div>
        {/* Description */}
        <p className="max-w-sm text-[12.5px] leading-relaxed text-[#98989d]">{description}</p>
        {/* Visual area */}
        <div className="mt-auto overflow-hidden">{children}</div>
      </div>
    </article>
  );
}

// ─── Card Visuals ─────────────────────────────────────────────────────────────
function CaptureVisual() {
  return (
    <div className="grid gap-2 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[14px] border border-[#2a2a2e] bg-[#1c1c1e] p-2.5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.18em] text-[#636366]">
            Unified intake
          </span>
          <span className="rounded-full bg-[#166534]/40 px-2 py-0.5 text-[11px] font-medium text-[#4ade80]">
            18 live
          </span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between rounded-xl bg-[#2c2c2e] px-2.5 py-1.5 text-xs">
            <span className="text-[#e5e5ea]">vendor_batch_apr.pdf</span>
            <span className="font-medium text-[#4ade80]">Mapped</span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-[#2c2c2e] px-2.5 py-1.5 text-xs">
            <span className="text-[#e5e5ea]">retail_statements.zip</span>
            <span className="font-medium text-[#fb923c]">Review</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 lg:grid-cols-1">
        <div className="rounded-[14px] border border-[#2a2a2e] bg-[#1c1c1e] px-2 py-2 text-center text-xs font-semibold text-[#fb923c]">
          97% mapped
        </div>
        <div className="rounded-[14px] border border-[#2a2a2e] bg-[#1c1c1e] px-2 py-2 text-center text-xs font-semibold text-[#4ade80]">
          12h saved
        </div>
        <div className="rounded-[14px] border border-[#2a2a2e] bg-[#1c1c1e] px-2 py-2 text-center text-xs font-semibold text-[#60a5fa]">
          5 sources
        </div>
      </div>
    </div>
  );
}

function IntelligenceVisual() {
  const rows = [
    { label: "Vendor match", pct: 99, bar: "bg-[#60a5fa]" },
    { label: "GST field", pct: 96, bar: "bg-[#4ade80]" },
    { label: "Ledger map", pct: 94, bar: "bg-[#fb923c]" },
  ];
  return (
    <div className="rounded-[14px] border border-[#2a2a2e] bg-[#1c1c1e] p-2.5">
      <p className="mb-2.5 text-[11px] uppercase tracking-[0.18em] text-[#636366]">
        Confidence model
      </p>
      <div className="space-y-2.5">
        {rows.map(({ label, pct, bar }) => (
          <div key={label} className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#98989d]">{label}</span>
              <span className="font-semibold text-white">{pct}%</span>
            </div>
            <div className="h-1 rounded-full bg-[#3a3a3c]">
              <div className={`h-1 rounded-full ${bar}`} style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OperationsVisual() {
  const bars = [38, 54, 46, 71, 63, 82];
  return (
    <div className="grid gap-2 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[14px] border border-[#2a2a2e] bg-[#1c1c1e] p-2.5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#636366]">Finance command</p>
        <p className="mt-1 text-xl font-bold tracking-tight text-white">₹42.6L</p>
        <div className="mt-2 flex h-10 items-end gap-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-[#60a5fa]/20 to-[#60a5fa]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="grid gap-1.5 sm:grid-cols-3 lg:grid-cols-1">
        {[
          "Admin, Sales & Finance views",
          "12 approved, 3 pending",
          "Cross-tenant locked",
        ].map((text) => (
          <div
            key={text}
            className="rounded-[14px] border border-[#2a2a2e] bg-[#1c1c1e] px-2.5 py-2 text-xs text-[#98989d]"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div className="grid grid-cols-2 gap-1.5 rounded-[14px] border border-[#2a2a2e] bg-[#1c1c1e] p-2">
      {workflowSteps.map(({ num, title, icon: Icon }) => (
        <div key={num} className="rounded-xl bg-[#2c2c2e] px-2.5 py-2">
          <div className="flex items-center justify-between text-[11px] text-[#636366]">
            <span>{num}</span>
            <Icon size={12} className="text-[#4ade80]" />
          </div>
          <p className="mt-1 text-xs font-semibold text-white">{title}</p>
        </div>
      ))}
    </div>
  );
}

function TallyVisual() {
  return (
    <div className="space-y-1.5 rounded-[14px] border border-[#2a2a2e] bg-[#1c1c1e] p-2.5">
      <div className="flex items-center justify-between rounded-xl bg-[#2c2c2e] px-2.5 py-2 text-xs">
        <span className="font-semibold text-[#fb923c]">Business OS</span>
        <ArrowRight size={12} className="text-[#636366]" />
        <span className="font-semibold text-[#a78bfa]">Tally Prime</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5 text-xs lg:grid-cols-4">
        {["Item invoice", "Ledger lookup", "Auto stock", "Period clamp"].map((t) => (
          <div key={t} className="rounded-xl bg-[#2c2c2e] px-2 py-1.5 text-[#e5e5ea]">
            {t}
          </div>
        ))}
      </div>
      <p className="rounded-xl bg-[#2c2c2e] px-2.5 py-2 text-xs text-[#86868b]">
        Search, map and sync 24 vouchers without leaving the workflow.
      </p>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".features-heading", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.from(".showcase-strip", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 76%" },
        y: 16,
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
        delay: 0.05,
      });

      gsap.from(".showcase-card", {
        scrollTrigger: { trigger: ".features-grid", start: "top 82%" },
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.45,
        ease: "power3.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="features" className="relative overflow-hidden bg-black">
      <div className="w-full px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-4 lg:h-[calc(100svh-5rem)] lg:overflow-hidden">

          {/* ── Heading ── */}
          <BlurFade>
            <div className="features-heading mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#60a5fa]">
                Platform Overview
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-[28px]">
                Everything your finance team needs
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-[13px] leading-relaxed text-[#86868b]">
                From invoice capture to Tally sync — the entire workflow in one intelligent surface.
              </p>
            </div>
          </BlurFade>

          {/* ── Showcase Shell ── */}
          <div className="flex-1 overflow-hidden rounded-[28px] border border-[#2a2a2e] bg-[#0a0a0a] p-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_32px_80px_rgba(0,0,0,0.6)]">

            {/* Integration strip */}
            <div className="showcase-strip mb-2 rounded-[18px] border border-[#2a2a2e] bg-[#141414] px-4 py-3">
              <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-[#636366]">
                    Finance operating surface
                  </p>
                  <h3 className="mt-0.5 text-[15px] font-semibold tracking-tight text-white">
                    From incoming bill to posted voucher — one seamless workspace.
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {integrations.map((b) => (
                    <IntegrationChip key={b.name} {...b} />
                  ))}
                </div>
              </div>
            </div>

            {/* Feature cards grid */}
            <div className="features-grid grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 lg:auto-rows-fr lg:h-[calc(100%-5rem)]">

              <CardFrame
                eyebrow="Capture"
                title="Every channel, one queue"
                description="WhatsApp, email, Excel and Drive all feed a single clean intake queue with mapping signals visible at a glance."
                icon={FileText}
                accent="text-[#fb923c]"
                glow="bg-gradient-to-br from-[#fb923c]/8 via-transparent to-transparent"
                className="sm:col-span-2 lg:col-span-7"
              >
                <CaptureVisual />
              </CardFrame>

              <CardFrame
                eyebrow="Operations"
                title="Live finance command"
                description="Dashboards, approvals and governance in one place — one source of truth for the whole team."
                icon={BarChart3}
                accent="text-[#60a5fa]"
                glow="bg-gradient-to-br from-[#60a5fa]/8 via-transparent to-transparent"
                className="sm:col-span-2 lg:col-span-5"
              >
                <OperationsVisual />
              </CardFrame>

              <CardFrame
                id="how-it-works"
                eyebrow="Workflow"
                title="Four-step close loop"
                description="Connect, upload, map and sync. That's the entire closing cycle — no tool-switching needed."
                icon={Link}
                accent="text-[#4ade80]"
                glow="bg-gradient-to-br from-[#4ade80]/8 via-transparent to-transparent"
                className="sm:col-span-2 lg:col-span-4"
              >
                <WorkflowVisual />
              </CardFrame>

              <CardFrame
                id="tally"
                eyebrow="Tally Prime"
                title="Native sync control"
                description="Search, map and post vouchers without ever leaving the Business OS workflow."
                icon={RefreshCw}
                accent="text-[#a78bfa]"
                glow="bg-gradient-to-br from-[#a78bfa]/8 via-transparent to-transparent"
                className="sm:col-span-2 lg:col-span-5"
              >
                <TallyVisual />
              </CardFrame>

              <CardFrame
                eyebrow="Intelligence"
                title="AI with confidence scores"
                description="Vendor, GST and ledger mapping validated before anything reaches the books."
                icon={Brain}
                accent="text-[#34d399]"
                glow="bg-gradient-to-br from-[#34d399]/8 via-transparent to-transparent"
                className="sm:col-span-2 lg:col-span-3"
              >
                <IntelligenceVisual />
              </CardFrame>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

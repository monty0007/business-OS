import { BlurFade } from "../ui/blur-fade";
import { StickyScrollReveal } from "../ui/sticky-scroll-reveal";

const tallyContent = [
  {
    title: "Two Push Modes",
    description:
      "Item Invoice (with stock/inventory tracking) or Accounting Voucher (ledger-only). Switch per workspace based on your accounting needs.",
  },
  {
    title: "Live Ledger Search",
    description:
      "Search Tally ledgers in real-time from inside Business OS. Create missing ones on the spot with GSTIN, address, and state.",
  },
  {
    title: "Auto Stock Item Creation",
    description:
      'Missing stock items are auto-created under "IT Products" group before the voucher is pushed. Zero manual setup required.',
  },
  {
    title: "Period-End Safety Net",
    description:
      "If payment date exceeds your Tally company period, the voucher is automatically clamped. Amber warning shown before you confirm.",
  },
  {
    title: "Per-Item Descriptions",
    description:
      "Uses Tally's USERDESCRIPTION field for per-line product descriptions visible inside Tally vouchers.",
  },
];

function TallyMockup() {
  return (
    <div className="rounded-2xl glass-card p-6 max-w-md">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-orange-500" />
        <span className="text-xs font-mono text-zinc-500">Push to Tally</span>
      </div>

      {/* Step indicators */}
      <div className="flex items-center gap-2 mb-6">
        {["Select Ledger", "Map Stock Items", "Confirm Push"].map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                i === 0
                  ? "bg-orange-500 text-white"
                  : "bg-zinc-800 text-zinc-500"
              }`}
            >
              {i + 1}
            </span>
            <span className="text-xs text-zinc-400 hidden sm:inline">{step}</span>
            {i < 2 && <div className="h-[1px] w-6 bg-zinc-700" />}
          </div>
        ))}
      </div>

      {/* Mock ledger selector */}
      <div className="space-y-3">
        <div className="rounded-lg bg-surface-2 p-3">
          <p className="text-xs text-zinc-500 mb-1">Party Ledger</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white">Purrfect Supplies Co.</span>
            <span className="text-[10px] text-zinc-500 font-mono">29AABCR1234F1Z5</span>
          </div>
        </div>
        <div className="rounded-lg bg-surface-2 p-3">
          <p className="text-xs text-zinc-500 mb-1">Voucher Type</p>
          <span className="text-sm text-orange-400">Item Invoice</span>
        </div>
        <div className="rounded-lg bg-surface-2 p-3">
          <p className="text-xs text-zinc-500 mb-1">Items</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white">3 line items mapped</span>
            <span className="text-xs text-green-400">✓ All resolved</span>
          </div>
        </div>
      </div>

      <button className="mt-4 w-full rounded-lg bg-orange-500 py-2.5 text-sm font-medium text-white hover:bg-orange-600 transition-colors">
        Push to Tally →
      </button>
    </div>
  );
}

export function TallyDeepDive() {
  return (
    <section id="tally" className="relative overflow-hidden">
      <div className="w-full section-card-dark p-8 md:p-16 min-h-screen flex flex-col justify-center gap-6">
        <BlurFade>
          <p className="mb-4 text-sm font-mono text-orange-400 uppercase tracking-wider text-center">
            Tally Integration
          </p>
          <h2 className="mb-10 text-center font-body text-2xl font-bold text-white md:text-3xl">
            Built for Tally.{" "}
            <span className="text-orange-400">Not bolted on.</span>
          </h2>
        </BlurFade>

        {/* Desktop: sticky scroll */}
        <div className="hidden lg:block min-h-[200vh]">
          <StickyScrollReveal
            content={tallyContent}
            stickyContent={<TallyMockup />}
          />
        </div>

        {/* Mobile: regular stacked layout */}
        <div className="lg:hidden space-y-8">
          <TallyMockup />
          {tallyContent.map((item, i) => (
            <BlurFade key={i} delay={i * 0.1}>
              <div className="rounded-xl glass-card p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 text-sm font-bold font-mono mb-3">
                  {i + 1}
                </span>
                <h3 className="text-lg font-body font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

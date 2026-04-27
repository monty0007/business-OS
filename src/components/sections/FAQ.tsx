import { useRef, useState, useCallback } from "react";
import { gsap } from "../../lib/gsap";
import { BlurFade } from "../ui/blur-fade";
import { DotPattern } from "../ui/dot-pattern";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is there a free trial?",
    a: "No free trial, but we offer a 100% money-back guarantee. Subscribe, use it for a full month — if you're not satisfied, we refund everything with no questions asked.",
  },
  {
    q: "Does it work with Tally Prime?",
    a: "Yes. Business OS connects directly to Tally Prime via its HTTP XML API. It supports both Item Invoice and Accounting Voucher modes and is fully compatible with Tally Education Edition.",
  },
  {
    q: "Can I invite my team?",
    a: "Yes. Admins can generate invite links with custom roles (Admin, Sales, Finance) and set expiry dates. Each member gets role-scoped access — Finance sees AP and Payments, Sales sees Orders, Admins see everything.",
  },
  {
    q: "What file formats does it support?",
    a: "PDFs, Excel (.xlsx), images (JPG/PNG/WEBP), and even handwritten or scanned bills. The OCR engine handles all of them.",
  },
  {
    q: "Can I change my plan?",
    a: "Yes. Start on the FREE plan (50 invoices) and upgrade to PRO for unlimited invoices at any time from the dashboard.",
  },
  {
    q: "What happens to my data?",
    a: "Every company is a fully isolated tenant — your data is never visible to other organizations. Business OS runs on Azure infrastructure with ISO and SOC 2 Type II certified security.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    if (!contentRef.current || !iconRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!open) {
      gsap.set(contentRef.current, { height: "auto" });
      const h = contentRef.current.offsetHeight;
      gsap.fromTo(
        contentRef.current,
        { height: 0 },
        { height: h, duration: prefersReduced ? 0 : 0.45, ease: "power3.inOut" }
      );
      gsap.to(iconRef.current, { rotation: 180, duration: prefersReduced ? 0 : 0.3 });
    } else {
      gsap.to(contentRef.current, { height: 0, duration: prefersReduced ? 0 : 0.3, ease: "power3.inOut" });
      gsap.to(iconRef.current, { rotation: 0, duration: prefersReduced ? 0 : 0.3 });
    }
    setOpen(!open);
  }, [open]);

  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-medium text-zinc-900 pr-4">{q}</span>
        <div ref={iconRef}>
          <ChevronDown size={18} className="text-zinc-500 flex-shrink-0" />
        </div>
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <p className="pb-5 text-sm leading-relaxed text-zinc-500">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden">
      <div className="w-full section-card p-8 md:p-12 relative overflow-hidden flex flex-col gap-4">
      <DotPattern className="opacity-10" />
      <div className="relative z-10">
        <BlurFade>
          <p className="mb-4 text-sm font-mono text-orange-600 uppercase tracking-wider text-center">
            FAQ
          </p>
          <h2 className="mb-8 text-center font-body text-2xl font-bold text-zinc-900 md:text-3xl">
            Frequently Asked Questions
          </h2>
        </BlurFade>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

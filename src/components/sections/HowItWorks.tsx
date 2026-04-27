import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { TracingBeam } from "../ui/tracing-beam";
import { BlurFade } from "../ui/blur-fade";
import { Link, Upload, Brain, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Your Tools",
    description:
      "Link Business OS to Tally Prime in a few clicks. Your ledgers and stock items sync automatically.",
    icon: <Link size={24} />,
  },
  {
    number: "02",
    title: "Upload Statements & Bills",
    description:
      "Drop in PDFs, Excel files, or photos of handwritten invoices. Bulk upload supported. Everything processed in one go.",
    icon: <Upload size={24} />,
  },
  {
    number: "03",
    title: "AI Extracts & Maps",
    description:
      "GPT-4o + OCR reads every line, identifies vendors, maps ledgers, flags data integrity issues before they reach Tally.",
    icon: <Brain size={24} />,
  },
  {
    number: "04",
    title: "Review & Sync",
    description:
      "Approve entries in the Review Queue. Push to Tally with one click. Books closed.",
    icon: <CheckCircle size={24} />,
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Heading slide in
    gsap.from(".how-heading", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
      x: -50,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    });

    // Steps stagger
    gsap.from(".how-step", {
      scrollTrigger: {
        trigger: ".how-steps",
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      ease: "power3.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="how-it-works" className="relative overflow-hidden">
      <div className="w-full section-card p-8 md:p-16 min-h-screen flex flex-col justify-center gap-6">
        <BlurFade>
          <p className="how-heading mb-4 text-sm font-mono text-orange-400 uppercase tracking-wider text-center">
            How It Works
          </p>
          <h2 className="how-heading mb-10 text-center font-body text-2xl font-bold text-zinc-900 md:text-3xl">
            From upload to Tally —{" "}
            <span className="text-orange-600">in 4 steps</span>
          </h2>
        </BlurFade>

        <TracingBeam className="how-steps">
          {steps.map((step, i) => (
            <div key={i} className="how-step mb-10 last:mb-0">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 font-mono text-sm font-bold text-orange-400">
                  {step.number}
                </span>
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-orange-400">{step.icon}</span>
                    <h3 className="font-body text-xl font-bold text-zinc-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-zinc-500 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </TracingBeam>
      </div>
    </section>
  );
}

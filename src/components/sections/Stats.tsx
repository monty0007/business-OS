import { DotPattern } from "../ui/dot-pattern";
import { BlurFade } from "../ui/blur-fade";
import { useCountUp } from "../../hooks/useCountUp";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

function StatItem({ value, suffix, label }: StatItemProps) {
  const ref = useCountUp({ end: value, suffix });

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="block font-body text-3xl font-extrabold text-white md:text-4xl"
      >
        0{suffix}
      </span>
      <p className="mt-2 text-sm text-zinc-500">{label}</p>
    </div>
  );
}

const stats = [
  { value: 300, suffix: "M+", label: "Transactions Analyzed" },
  { value: 95, suffix: "%+", label: "OCR Accuracy on Handwritten Bills" },
  { value: 4, suffix: "", label: "Steps from Upload to Tally Sync" },
  { value: 1, suffix: "-Click", label: "Tally Push" },
];

export function Stats() {
  return (
    <section className="stats-section relative overflow-hidden">
      <div className="w-full section-card-dark p-8 md:p-16 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <DotPattern className="opacity-40" />
      <div className="relative z-10">
        <BlurFade>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((s, i) => (
              <StatItem key={i} {...s} />
            ))}
          </div>
        </BlurFade>
      </div>
      </div>
    </section>
  );
}

import { cn } from "../../lib/utils";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#ea580c",
  shimmerSize = "0.1em",
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 font-body text-sm font-medium text-white transition-all duration-300 hover:scale-105 active:scale-95",
        "bg-gradient-to-r from-orange-600 to-orange-500",
        "shadow-[0_0_40px_rgba(234,88,12,0.3)]",
        "hover:shadow-[0_0_60px_rgba(234,88,12,0.5)]",
        className
      )}
      {...props}
    >
      <span
        className="absolute inset-0 overflow-hidden rounded-full"
        style={{ "--shimmer-size": shimmerSize } as React.CSSProperties}
      >
        <span
          className="absolute inset-[-100%] animate-shimmer"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${shimmerColor} 10%, transparent 20%)`,
          }}
        />
      </span>
      <span className="absolute inset-[1px] rounded-full bg-gradient-to-r from-orange-600 to-orange-500" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

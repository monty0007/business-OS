import { cn } from "../../lib/utils";
import { type ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm font-mono",
        "animate-pulse",
        className
      )}
    >
      <span className="bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600 bg-clip-text text-transparent">
        {children}
      </span>
    </span>
  );
}

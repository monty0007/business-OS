import { cn } from "../../lib/utils";
import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface MovingBorderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  borderColor?: string;
  duration?: number;
}

export function MovingBorder({
  children,
  className,
  containerClassName,
  duration = 3,
  ...props
}: MovingBorderProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px]",
        containerClassName
      )}
      {...props}
    >
      <motion.span
        className="absolute inset-0"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 60%, #ea580c 80%, transparent 100%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      />
      <span
        className={cn(
          "relative z-10 inline-flex items-center justify-center rounded-full bg-[#09090b] px-8 py-3 text-sm font-medium text-white",
          className
        )}
      >
        {children}
      </span>
    </button>
  );
}

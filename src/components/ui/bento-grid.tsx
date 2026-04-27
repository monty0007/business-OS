import { cn } from "../../lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function BentoGridItem({
  title,
  description,
  icon,
  className,
  children,
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all duration-300 hover:border-orange-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
            {icon}
          </div>
        )}
        <h3 className="mb-2 font-display text-lg font-bold text-zinc-900">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-500">{description}</p>
        {children}
      </div>
      {/* Border beam on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] p-[1px]" />
      </div>
    </div>
  );
}

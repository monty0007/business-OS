import { useState } from "react";

export function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden">
      <div className="w-full bg-zinc-950 px-6 py-0 md:px-12 min-h-screen flex items-center relative">
        {/* Diagonal watermark pattern */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden select-none"
          aria-hidden="true"
        >
          <div
            className="absolute"
            style={{ inset: "-100%", transform: "rotate(-25deg)" }}
          >
            {Array.from({ length: 60 }).map((_, row) => (
              <div
                key={row}
                className="flex whitespace-nowrap"
                style={{ gap: "32px", marginBottom: "16px" }}
              >
                {Array.from({ length: 40 }).map((_, col) => (
                  <span
                    key={col}
                    className="font-body font-extrabold tracking-tight shrink-0"
                    style={{ fontSize: "15px" }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.07)" }}>Business </span>
                    <span style={{ color: "rgba(234,88,12,0.18)" }}>OS</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-2xl text-center py-16">
          {/* Headline */}
          <h1 className="font-body text-[28px] leading-[1.15] font-extrabold tracking-tight text-white md:text-[44px]">
            The AI-powered platform for{" "}
            <span className="text-orange-400">smarter, faster</span> accounting
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-4 max-w-md font-body text-sm text-zinc-400 leading-relaxed">
            Automate invoices, sync to Tally in one click, and simplify your finance workflow.
          </p>

          {/* Email signup */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full max-w-xs rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 sm:w-auto sm:min-w-[260px]"
            />
            <button className="w-full rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500 sm:w-auto">
              Sign up for free
            </button>
          </div>

          {/* Divider */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-zinc-700" />
            <span className="text-sm text-zinc-500">or</span>
            <div className="h-px w-12 bg-zinc-700" />
          </div>

          {/* OAuth buttons */}
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-800 hover:border-zinc-600 sm:w-auto">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign up with Google
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-800 hover:border-zinc-600 sm:w-auto">
              <svg width="18" height="18" viewBox="0 0 23 23">
                <path fill="#f35325" d="M1 1h10v10H1z" />
                <path fill="#81bc06" d="M12 1h10v10H12z" />
                <path fill="#05a6f0" d="M1 12h10v10H1z" />
                <path fill="#ffba08" d="M12 12h10v10H12z" />
              </svg>
              Sign up with Microsoft
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

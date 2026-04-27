export function Footer() {
  return (
    <footer className="sticky bottom-0 z-0">
      {/* Top highlight line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="w-full bg-[#0c0c0e] border-t border-zinc-800/60 shadow-[0_-24px_60px_rgba(0,0,0,0.5)] px-8 pt-16 pb-12 md:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-body text-2xl font-extrabold">
              <span className="text-white">
                Business <span className="text-orange-500">OS</span>
              </span>
            </p>
            <p className="mt-2 text-base text-zinc-500">By Foetron Lab</p>
            <p className="mt-4 text-base text-zinc-500">+91 6364835217</p>
          </div>

          {/* Product */}
          <div>
            <p className="mb-5 text-base font-semibold text-zinc-300">Product</p>
            <ul className="space-y-3">
              {["Features", "How It Works", "Tally Integration", "Pricing"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-base text-zinc-500 hover:text-zinc-200 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-5 text-base font-semibold text-zinc-300">Company</p>
            <ul className="space-y-3">
              {["About Us", "Academy", "Privacy Policy", "Terms of Service"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base text-zinc-500 hover:text-zinc-200 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row">
          <p className="text-sm text-zinc-600">
            © 2025 Foetron Lab. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

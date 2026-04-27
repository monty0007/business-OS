import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Tally", href: "#tally" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] bg-orange-600">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-10 py-3.5">
        {/* Logo */}
        <a href="#" className="shrink-0 text-lg font-bold tracking-tight text-white">
          Business <span className="text-orange-200">OS</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <a
            href="#demo"
            className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50"
          >
            Schedule Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/20 bg-orange-600 px-6 pb-5 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#demo"
            className="mt-3 block w-full rounded-lg bg-white px-5 py-2.5 text-center text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
          >
            Schedule Demo
          </a>
        </div>
      )}
    </nav>
  );
}

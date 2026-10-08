"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const navigationItems = [
  { name: "Discover", href: "/#opportunities" },
  { name: "Platform", href: "/platform" },
  { name: "Creators", href: "/artists" },
  { name: "CAP", href: "/campus-ambassadors" },
  { name: "Hub", href: "/hub" },
  { name: "Partners", href: "/partners" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-navy/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold rounded-lg p-1">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-light to-gold font-bold text-navy-darker shadow-md">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-gold transition-colors">
              REWAIQ
            </span>
            <span className="text-[9px] font-semibold tracking-widest text-gold-light uppercase -mt-1">
              Technologies Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white hover:border-b-2 hover:border-gold py-1 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Group */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://app.rewaiq.com.ng/login"
            className="text-sm font-semibold text-slate-200 hover:text-white px-4 py-2 transition-colors"
          >
            Sign In
          </a>
          <a
            href="https://app.rewaiq.com.ng"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-navy-darker shadow-md hover:bg-gold-light transition-all transform active:scale-95"
          >
            <span>Join Rewaiq</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gold"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-navy-deep px-6 py-6 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-gold py-1"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="https://app.rewaiq.com.ng/login"
                className="w-full text-center py-2.5 text-sm font-semibold text-slate-200 border border-white/20 rounded-xl"
              >
                Sign In
              </a>
              <a
                href="https://app.rewaiq.com.ng"
                className="w-full text-center py-3 text-sm font-bold bg-gold text-navy-darker rounded-xl hover:bg-gold-light"
              >
                Join Rewaiq
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import logoPath from "@assets/logo_1778860608571.jpg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const pendingNavigation = useRef<(() => void) | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const navigateTo = (href: string) => {
    const navigate = () => {
      if (location !== "/") {
        setLocation("/");
        window.location.hash = href;
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        window.history.replaceState(null, "", href);
        target.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
      }
    };
    if (mobileMenuOpen) {
      // Navigate after the panel exits and its scroll lock has been released.
      pendingNavigation.current = navigate;
      setMobileMenuOpen(false);
    } else {
      navigate();
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          isScrolled || location !== "/"
            ? "border-white/10 bg-background/95 py-3 backdrop-blur-md"
            : "border-transparent bg-transparent py-4 md:py-5"
        }`}
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <div className="container mx-auto flex items-center justify-between px-5 md:px-6">
          <a href="/#home" onClick={(e) => handleScrollTo(e, "#home")} aria-label="Innovative Print House home">
            <img src={logoPath} alt="Innovative Print House" className="h-11 w-auto object-contain md:h-12" />
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={`/${link.href}`} onClick={(e) => handleScrollTo(e, link.href)} className="text-sm font-medium text-white/80 transition-colors hover:text-primary">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button onClick={() => navigateTo("#quote")} className="bg-primary font-bold text-primary-foreground hover:bg-primary/90">Get Quote</Button>
          </nav>
          <Dialog.Trigger asChild>
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden" aria-label="Open navigation menu">
              <Menu size={22} />
            </button>
          </Dialog.Trigger>
        </div>
      </header>

      <Dialog.Portal>
        <Dialog.Overlay className="mobile-menu-backdrop fixed inset-0 z-[90] bg-black/70" />
        <Dialog.Content className="mobile-menu-panel fixed inset-0 z-[100] flex h-dvh flex-col overflow-y-auto overscroll-contain bg-[#0b0b0b] text-white outline-none"
          onCloseAutoFocus={(event) => {
            const navigate = pendingNavigation.current;
            if (navigate) {
              event.preventDefault();
              pendingNavigation.current = null;
              requestAnimationFrame(navigate);
            }
          }}
        >
          <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
          <Dialog.Description className="sr-only">Explore Innovative Print House or request a quote.</Dialog.Description>
          <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
            <img src={logoPath} alt="Innovative Print House" className="h-12 w-auto object-contain" />
            <Dialog.Close className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Close navigation menu">
              <X size={22} />
            </Dialog.Close>
          </div>
          <div className="flex flex-1 flex-col px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-7">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">Explore Innovative</p>
            <nav aria-label="Mobile navigation" className="my-auto">
              <ul>
                {navLinks.map((link, index) => (
                  <li key={link.name} className="border-b border-white/10">
                    <a href={`/${link.href}`} onClick={(e) => handleScrollTo(e, link.href)} className="group flex items-center gap-4 py-[clamp(0.65rem,2.2dvh,1.4rem)] focus-visible:outline-none focus-visible:text-primary">
                      <span className="text-[10px] font-medium tabular-nums text-white/30">0{index + 1}</span>
                      <span className="flex-1 text-[clamp(1.5rem,4dvh,2.5rem)] font-semibold tracking-tight transition-colors group-hover:text-primary">{link.name}</span>
                      <ArrowUpRight size={22} className="text-white/30 transition-colors group-hover:text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-7 pt-3">
              <p className="mb-4 text-sm text-white/45">Have something in mind? Let's print it.</p>
              <Button onClick={() => navigateTo("#quote")} className="h-14 w-full justify-between rounded-xl bg-primary px-5 text-base font-bold text-black hover:bg-primary/90">
                Get a Quote <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

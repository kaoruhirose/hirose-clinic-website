"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReservationLink from "@/components/ReservationLink";
import { site, phoneDisplay } from "@/lib/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    // アンマウント時にスクロールを必ず復元する
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/about", label: "私たちの想い" },
    { href: "/services", label: "診療案内" },
    { href: "/online-consultation", label: "オンライン診療" },
    { href: "/access", label: "アクセス" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-clinic-base/80 backdrop-blur-md border-b border-clinic-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <span className="font-serif text-2xl font-medium tracking-wider text-clinic-blue transition-opacity group-hover:opacity-80">
              廣瀬診療所
            </span>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-sm font-medium tracking-wide hover:text-clinic-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ReservationLink className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium text-white bg-clinic-blue hover:bg-clinic-blue/90 shadow-sm transition-all hover:shadow-md">
            診察予約
          </ReservationLink>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-clinic-blue hover:text-clinic-green transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 80px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-20 left-0 w-full bg-clinic-base/95 backdrop-blur-lg overflow-hidden border-t border-clinic-subtle"
          >
            <nav className="flex flex-col p-8 space-y-6 h-full">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif text-clinic-blue border-b border-clinic-subtle/50 pb-2 flex justify-between items-center"
                  >
                    {link.label}
                    <span className="text-clinic-green">→</span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4 flex flex-col gap-4 mt-auto"
              >
                {/* 電話番号が確定するまでは誤発信防止のため tel: リンクを表示しない */}
                {site.phone && (
                  <a
                    href={`tel:${site.phone}`}
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white border border-clinic-subtle text-clinic-blue font-medium shadow-sm active:bg-clinic-subtle transition-colors"
                  >
                    <Phone className="w-5 h-5 text-clinic-green" />
                    {phoneDisplay}
                  </a>
                )}
                <ReservationLink
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-clinic-blue text-white font-medium shadow-lg hover:bg-clinic-blue/90 active:scale-95 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  今すぐ診察予約
                </ReservationLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

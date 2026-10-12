"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReservationLink from "@/components/ReservationLink";
import { site } from "@/lib/site";

const links = [
  { href: "/about", label: "診療所について" },
  { href: "/services", label: "診療案内" },
  { href: "/online-consultation", label: "オンライン診療", secondary: true },
  { href: "/events", label: "フィールドワーク", secondary: true },
  { href: "/access", label: "アクセス", secondary: true },
];

export default function Header() {
  const pathname = usePathname();
  const home = pathname === "/";
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menu = dialog.current;
    if (!menu || !isOpen) return;
    const previousOverflow = document.body.style.overflow;
    menu.showModal();
    document.body.style.overflow = "hidden";
    const onResize = () => { if (window.innerWidth >= 1024) menu.close(); };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = previousOverflow;
      menu.close();
    };
  }, [isOpen]);

  const close = () => { dialog.current?.close(); setIsOpen(false); };

  return (
    <header className={`site-header${home ? " site-header--over-photo" : ""}`}>
      <div className="header-inner">
        {!home && <Link href="/" className="header-brand" aria-label="廣瀬診療所 トップページ"><span>廣瀬診療所</span><span className="header-brand-latin" lang="en">HIROSESHINRYOJO</span></Link>}
        <nav className="desktop-nav" aria-label="メインメニュー">
          {links.map(link => <Link key={link.href} href={link.href} className={home && link.secondary ? "home-secondary" : undefined} aria-current={pathname === link.href ? "page" : pathname.startsWith(`${link.href}/`) ? "location" : undefined}>{link.label}</Link>)}
          <ReservationLink className="nav-reservation">ご予約</ReservationLink>
        </nav>
        {/* トップの写真の上では、ご予約の右どなり（スマホはメニューの横線の左）に Instagram を置く */}
        {home && site.instagramUrl && (
          <a className="header-instagram" href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="廣瀬診療所のInstagram（新しいタブで開く）">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        )}
        <button ref={trigger} className="menu-trigger" aria-expanded={isOpen} aria-controls="site-menu" aria-label="メニュー" onClick={() => setIsOpen(true)}><span aria-hidden="true"><i /><i /></span></button>
      </div>
      <dialog id="site-menu" className="menu-dialog" ref={dialog} aria-label="サイトメニュー" onClose={() => { setIsOpen(false); trigger.current?.focus(); }}>
        <div className="menu-top"><Link href="/" onClick={close}><span>廣瀬診療所</span><span className="header-brand-latin" lang="en">HIROSESHINRYOJO</span></Link><button onClick={close} autoFocus>閉じる <span aria-hidden="true">×</span></button></div>
        <nav aria-label="モバイルメニュー">
          {links.map((link, i) => <Link key={link.href} href={link.href} onClick={close} aria-current={pathname === link.href ? "page" : pathname.startsWith(`${link.href}/`) ? "location" : undefined}><span className="menu-number" aria-hidden="true">0{i + 1}</span>{link.label}<span aria-hidden="true">→</span></Link>)}
          <Link href="/news" onClick={close}><span className="menu-number" aria-hidden="true">06</span>お知らせ<span aria-hidden="true">→</span></Link>
        </nav>
        <ReservationLink onClick={close} className="text-link menu-reservation">ご予約のご案内<span aria-hidden="true">→</span></ReservationLink>
        <p className="menu-caption">海と山のあいだで、からだの声を聴く。</p>
      </dialog>
    </header>
  );
}

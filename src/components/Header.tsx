"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReservationLink from "@/components/ReservationLink";
import TextSizeToggle from "@/components/TextSizeToggle";
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
  const trigger = useRef<HTMLButtonElement | null>(null); // メニューを開いたボタン（閉じたらそこへ戻る）
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

  // トップでは、表紙の写真を過ぎて白い背景に入ったら、上部に見出しを固定して出す
  const [isStuck, setIsStuck] = useState(false);
  useEffect(() => {
    if (!home) return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const hero = document.querySelector(".home-hero");
      setIsStuck(!!hero && hero.getBoundingClientRect().bottom <= 0);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(check); };
    frame = requestAnimationFrame(check);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      setIsStuck(false);
    };
  }, [home]);

  const instagram = site.instagramUrl && (
    <a className="header-instagram" href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="廣瀬診療所のInstagram（新しいタブで開く）">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    </a>
  );

  // overPhoto: トップの写真の上（屋号なし・主なメニューだけ）。それ以外は屋号つきの見出し。
  const bar = ({ overPhoto = false } = {}) => (
    <div className="header-inner">
      {!overPhoto && <Link href="/" className="header-brand" aria-label="廣瀬診療所 トップページ"><span>廣瀬診療所</span><span className="header-brand-latin" lang="en">HIROSESHINRYOJO</span></Link>}
      <nav className="desktop-nav" aria-label="メインメニュー">
        {links.map(link => <Link key={link.href} href={link.href} className={overPhoto && link.secondary ? "home-secondary" : undefined} aria-current={pathname === link.href ? "page" : pathname.startsWith(`${link.href}/`) ? "location" : undefined}>{link.label}</Link>)}
        <ReservationLink className="nav-reservation">ご予約</ReservationLink>
        <TextSizeToggle className="text-size-toggle--header" kana />
      </nav>
      {/* 右端（スマホはメニューの横線の左）に Instagram を置く */}
      {instagram}
      <button className="menu-trigger" aria-expanded={isOpen} aria-controls="site-menu" aria-label="メニュー" onClick={e => { trigger.current = e.currentTarget; setIsOpen(true); }}><span aria-hidden="true"><i /><i /></span></button>
    </div>
  );

  return (<>
    {/* 写真の上の見出しの指定が及ばないよう、固定の見出しは <header> の外に置く */}
    {home && <div className={`header-sticky header-solid${isStuck ? " is-visible" : ""}`} inert={!isStuck}>{bar()}</div>}
    {/* トップ以外では、この見出しをそのまま上部に残す */}
    <header className={`site-header${home ? " site-header--over-photo" : " site-header--sticky header-solid"}`}>
      {bar({ overPhoto: home })}
      <dialog id="site-menu" className="menu-dialog" ref={dialog} aria-label="サイトメニュー" onClose={() => { setIsOpen(false); trigger.current?.focus({ preventScroll: true }); }}>
        <div className="menu-top"><Link href="/" onClick={close}><span>廣瀬診療所</span><span className="header-brand-latin" lang="en">HIROSESHINRYOJO</span></Link><button onClick={close} autoFocus>閉じる <span aria-hidden="true">×</span></button></div>
        <nav aria-label="モバイルメニュー">
          {links.map((link, i) => <Link key={link.href} href={link.href} onClick={close} aria-current={pathname === link.href ? "page" : pathname.startsWith(`${link.href}/`) ? "location" : undefined}><span className="menu-number" aria-hidden="true">0{i + 1}</span>{link.label}<span aria-hidden="true">→</span></Link>)}
          <Link href="/news" onClick={close}><span className="menu-number" aria-hidden="true">06</span>お知らせ<span aria-hidden="true">→</span></Link>
        </nav>
        <TextSizeToggle className="text-size-toggle--menu" />
        <ReservationLink onClick={close} className="text-link menu-reservation">ご予約のご案内<span aria-hidden="true">→</span></ReservationLink>
        <p className="menu-caption">海と山のあいだで、からだの声を聴く。</p>
      </dialog>
    </header>
  </>);
}

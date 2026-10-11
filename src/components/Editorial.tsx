import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ClinicPhoto } from "@/lib/photos";

export function PageIntro({ eyebrow, title, english, children }: { eyebrow?: string; title: ReactNode; english?: string; children?: ReactNode }) {
  return <header className="page-intro">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1>{english && <p className="intro-english" lang="en">{english}</p>}{children && <div className="intro-copy">{children}</div>}</header>;
}

export function EditorialSection({ id, label, title, english, note, tate = false, children }: { id?: string; label?: string; title?: ReactNode; english?: string; note?: string; tate?: boolean; children: ReactNode }) {
  return <section id={id} className={tate ? "editorial-section editorial-section--tate" : "editorial-section"}><div className="section-heading">{label && <p className="eyebrow">{label}</p>}{title && <h2>{title}</h2>}{english && <p className="section-english" lang="en">{english}</p>}{note && <p className="quiet-note section-note">{note}</p>}</div><div className="editorial-body prose">{children}</div></section>;
}

/** 矢印の決まり（D1）：→ サイト内、↗ 外のサイト、← 戻る */
export function TextLink({ href, children, external = false, back = false }: { href: string; children: ReactNode; external?: boolean; back?: boolean }) {
  const content = back ? <><span aria-hidden="true">←</span>{children}</> : <>{children}<span aria-hidden="true">{external ? "↗" : "→"}</span></>;
  return external ? <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">{content}</a> : <Link className={back ? "text-link text-link--back" : "text-link"} href={href}>{content}</Link>;
}

export function Photo({ photo, className = "" }: { photo: ClinicPhoto | null; className?: string }) {
  if (!photo) return null;
  return <figure className={`editorial-photo ${className}`}><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 700px) 100vw, 1120px" />{photo.caption && <figcaption>{photo.caption}</figcaption>}</figure>;
}

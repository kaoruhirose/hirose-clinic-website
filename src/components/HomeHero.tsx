import { getImageProps } from "next/image";
import { site } from "@/lib/site";

export type WordmarkPosition = "side" | "above" | "below" | "diagonal";

export default function HomeHero({ position = "below", study = false }: { position?: WordmarkPosition; study?: boolean }) {
  const Title = study ? "h2" : "h1";
  const common = { alt: "逗子の海と、夕暮れの富士山と江ノ島", sizes: "100vw", loading: "eager" as const, fetchPriority: "high" as const };
  const { props: { srcSet: desktop } } = getImageProps({ ...common, src: "/images/hero-wide.jpg", width: 1440, height: 748 });
  const { props: mobile } = getImageProps({ ...common, src: "/images/hero-mobile.jpg", width: 620, height: 883 });
  return (
    <section className="home-hero" aria-label="廣瀬診療所">
      <div className="hero-image">
        <picture>
          <source media="(min-width: 701px)" srcSet={desktop} />
          {/* getImageProps で最適化した画像を、画面幅に応じて1枚だけ読み込む。 */}
          <img {...mobile} alt={common.alt} />
        </picture>
      </div>
      <div className={`hero-wordmark hero-wordmark--${position}`}>
        <Title>廣瀬診療所</Title><p className="hero-latin" lang="en">HIROSESHINRYOJO</p>
      </div>
      <p className="hero-photo-caption">〜 診療所からの眺め 〜</p>
      <div className="hero-bottom">
        <p>西洋医学と漢方 <span aria-hidden="true">／</span> 完全予約制</p>
        {!study && <a href="#introduction">診療所のこと <span aria-hidden="true">↓</span></a>}
      </div>
      {!study && site.instagramUrl && (
        <a className="hero-instagram" href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="廣瀬診療所のInstagram（新しいタブで開く）">
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      )}
    </section>
  );
}

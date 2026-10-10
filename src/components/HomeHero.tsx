import { getImageProps } from "next/image";

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
        {!study && <p className="hero-english" lang="en">Care between the sea and the hills.</p>}
      </div>
      <p className="hero-poem">海と山のあいだで、<br />からだの声を聴く。</p>
      <p className="hero-photo-caption">〜 診療所からの眺め 〜</p>
      <div className="hero-bottom">
        <p>西洋医学と漢方 <span aria-hidden="true">／</span> 完全予約制</p>
        {!study && <a href="#introduction">診療所のこと <span aria-hidden="true">↓</span></a>}
      </div>
    </section>
  );
}

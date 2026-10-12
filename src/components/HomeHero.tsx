import { getImageProps } from "next/image";
import heroWide from "../../public/images/hero-wide.jpg";
import heroMobile from "../../public/images/hero-mobile.jpg";

export type WordmarkPosition = "side" | "above" | "below" | "diagonal";

export default function HomeHero({ position = "below", study = false }: { position?: WordmarkPosition; study?: boolean }) {
  const Title = study ? "h2" : "h1";
  const common = { alt: "逗子の海と、夕暮れの富士山と江ノ島", sizes: "100vw", quality: 90, loading: "eager" as const, fetchPriority: "high" as const };
  const { props: { srcSet: desktop } } = getImageProps({ ...common, src: heroWide });
  const { props: mobile } = getImageProps({ ...common, src: heroMobile });
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
      <p className="hero-photo-caption">診療所からの眺め</p>
      {/* 下へ続くことを、文字を使わず細い縦線で示す。読み上げでは「診療所のこと」と伝える */}
      {!study && (
        <div className="hero-bottom">
          <a href="#introduction"><span className="sr-only">診療所のこと</span><span className="hero-scroll-line" aria-hidden="true" /></a>
        </div>
      )}
    </section>
  );
}

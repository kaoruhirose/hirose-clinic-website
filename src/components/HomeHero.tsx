import Image from "next/image";
import heroCover from "../../public/images/hero-cover.jpg";

export type WordmarkPosition = "side" | "above" | "below" | "diagonal";

export default function HomeHero({ position = "below", study = false }: { position?: WordmarkPosition; study?: boolean }) {
  const Title = study ? "h2" : "h1";
  return (
    <section className="home-hero" aria-label="廣瀬診療所">
      <div className="hero-image">
        {/* 写真はどの画面でも1枚。縦長の画面では高さに合わせて左右を切るので、そのとき必要な幅（画面の高さとほぼ同じ）で読み込む。 */}
        <Image src={heroCover} alt="逗子の海と、夕暮れの富士山と江ノ島" fill sizes="(max-aspect-ratio: 1/1) 102vh, 100vw" quality={90} loading="eager" fetchPriority="high" />
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

import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import { EditorialSection, TextLink, Photo } from "@/components/Editorial";
import { photos } from "@/lib/photos";
import { newsItems } from "@/lib/news";

export default function Home() {
  return (
    <>
      <HomeHero />
      <div className="container home-introduction" id="introduction">
        <EditorialSection label="診療所のこと" title={<>日々のなかに、<br />からだがある。</>}>
          <p><span className="text-unit">よく眠れた朝のこと。</span><span className="text-unit">いつもの食事のこと。</span><br className="desktop-break" /><span className="text-unit">まだ言葉にならない、違和感のこと。</span></p>
          <p><span className="text-unit">症状のことも、</span><span className="text-unit">その背景にある暮らしのことも。</span><br className="desktop-break" /><span className="text-unit">西洋医学と漢方、</span><span className="text-unit">ふたつの視点から、</span><br className="desktop-break" /><span className="text-unit">いまのからだを</span><span className="text-unit">一緒に見つめます。</span></p>
          <TextLink href="/about">廣瀬診療所について</TextLink>
        </EditorialSection>
      </div>
      {photos.clinic ? <Photo photo={photos.clinic} className="home-landscape" /> : <figure className="home-landscape"><Image src="/images/hero-wide.jpg" alt="海の向こうに富士山を望む、逗子の夕景" width={1440} height={748} sizes="100vw" /></figure>}
      <div className="container">
        <EditorialSection label="診療のご案内" title={<>一人ひとり、<br />ゆっくりと。</>}>
          <p><span className="text-unit">廣瀬診療所は、</span><span className="text-unit">逗子・桜山の高台にある</span><br className="desktop-break" /><span className="text-unit">完全予約制の診療所です。</span></p>
          <p><span className="text-unit">からだの不調も、</span><span className="text-unit">暮らしのなかの小さな迷いも。</span><br className="desktop-break" /><span className="text-unit">お話を伺う時間を、</span><span className="text-unit">大切にしています。</span></p>
          <ul className="home-link-list">
            <li><Link href="/services"><span>診療案内<small>一般内科・漢方・暮らしの相談</small></span><span aria-hidden="true">↗</span></Link></li>
            <li><Link href="/online-consultation"><span>オンライン診療<small>遠くにお住まいの方へ</small></span><span aria-hidden="true">↗</span></Link></li>
            <li><Link href="/access"><span>ご予約・アクセス<small>お越しになる前に</small></span><span aria-hidden="true">↗</span></Link></li>
          </ul>
        </EditorialSection>
        <Photo photo={photos.hike} />
        <EditorialSection label="フィールドワーク" title={<>足もとから、<br />自然にふれる。</>} english="Sense of wonder">
          <p><span className="text-unit">砂のやわらかさ。</span><span className="text-unit">土の温度。</span><br className="desktop-break" /><span className="text-unit">靴を脱ぐと、</span><span className="text-unit">足もとの世界が</span><span className="text-unit">そっと広がります。</span></p>
          <p><span className="text-unit">逗子の海と山を歩く、</span><span className="text-unit">少人数の裸足ハイク。</span><br className="desktop-break" /><span className="text-unit">波とふれあう、</span><span className="text-unit">サーフセラピー。</span></p>
          <TextLink href="/events">フィールドワークについて</TextLink>
        </EditorialSection>
        <EditorialSection label="診療所から" title="お知らせ">
          <ul className="news-preview">{newsItems.slice(0, 3).map(news => <li key={news.date + news.title}><Link href={`/news#news-${news.date.replaceAll(".", "-")}`}><time dateTime={news.date.replaceAll(".", "-")}>{news.date}</time><span>{news.title}</span><span aria-hidden="true">↗</span></Link></li>)}</ul>
          <TextLink href="/news">すべてのお知らせ</TextLink>
        </EditorialSection>
      </div>
    </>
  );
}

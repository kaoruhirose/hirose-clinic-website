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
          <p>よく眠れた朝のこと。食事のこと。<br />少し気になっていること。</p>
          <p>症状の向こうにある、ひとりひとりの暮らしへ。<br />西洋医学と漢方、ふたつの視点から、<br className="desktop-break" />いまのからだを一緒に見つめます。</p>
          <TextLink href="/about">廣瀬診療所について</TextLink>
        </EditorialSection>
      </div>
      {photos.clinic ? <Photo photo={photos.clinic} className="home-landscape" /> : <figure className="home-landscape"><Image src="/images/hero-wide.jpg" alt="海の向こうに富士山を望む、逗子の夕景" width={1440} height={748} sizes="100vw" /></figure>}
      <div className="container">
        <EditorialSection label="診療のご案内" title={<>ひとりずつ、<br />ゆっくりと。</>}>
          <p>廣瀬診療所は、逗子・桜山の高台にある<br className="desktop-break" />完全予約制の診療所です。</p>
          <p>からだの不調から、暮らしのなかの小さな相談まで。<br className="desktop-break" />お話を伺う時間を、大切にしています。</p>
          <ul className="home-link-list">
            <li><Link href="/services"><span>診療案内<small>一般内科・漢方・暮らしの相談</small></span><span aria-hidden="true">↗</span></Link></li>
            <li><Link href="/online-consultation"><span>オンライン診療<small>遠くにお住まいの方へ</small></span><span aria-hidden="true">↗</span></Link></li>
            <li><Link href="/access"><span>ご予約・アクセス<small>お越しになる前に</small></span><span aria-hidden="true">↗</span></Link></li>
          </ul>
        </EditorialSection>
        <Photo photo={photos.hike} />
        <EditorialSection label="裸足ハイク・催し" title={<>足もとから、<br />自然にふれる。</>}>
          <p>砂のやわらかさ。土の温度。<br />靴を脱ぐと、いつもの景色が少し変わります。</p>
          <p>逗子の海と山を歩く、少人数の裸足ハイク。<br />開催日とご参加について、こちらからご覧ください。</p>
          <TextLink href="/events">裸足ハイク・催しについて</TextLink>
        </EditorialSection>
        <EditorialSection label="診療所から" title="お知らせ">
          <ul className="news-preview">{newsItems.slice(0, 3).map(news => <li key={news.date + news.title}><Link href={`/news#news-${news.date.replaceAll(".", "-")}`}><time dateTime={news.date.replaceAll(".", "-")}>{news.date}</time><span>{news.title}</span><span aria-hidden="true">↗</span></Link></li>)}</ul>
          <TextLink href="/news">すべてのお知らせ</TextLink>
        </EditorialSection>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import { EditorialSection, TextLink, Photo } from "@/components/Editorial";
import { photos } from "@/lib/photos";
import { newsItems } from "@/lib/news";
import fujiDawn from "../../public/images/clinic/fuji-dawn.webp";

export default function Home() {
  return (
    <>
      <HomeHero />
      {/* 詩は表紙の写真に載せず、白い背景の中央に縦書きで置く */}
      <p className="home-poem"><span>海と山のあいだで、</span><span>からだの声を聴く。</span></p>
      <div className="container home-introduction" id="introduction">
        <EditorialSection tate label="診療所のこと" title={<>日々のなかに、<br />からだがある。</>}>
          <p><span className="text-unit">よく眠れているか。</span><span className="text-unit">食事をおいしく食べられているか。</span><span className="text-unit">まだ言葉にならない違和感も、</span><span className="text-unit">大切な手がかりです。</span></p>
          <p><span className="text-unit">症状とあわせて、</span><span className="text-unit">その背景にある暮らしにも</span><span className="text-unit">目を向けながら、</span><span className="text-unit">西洋医学と東洋医学の</span><span className="text-unit">両方から、</span><span className="text-unit">いまのからだを</span><span className="text-unit">診ていきます。</span></p>
          <TextLink href="/about">廣瀬診療所について</TextLink>
        </EditorialSection>
      </div>
      <figure className="home-landscape"><Image src={fujiDawn} alt="診療所から望む、朝焼けの富士山と江ノ島" sizes="100vw" quality={90} /></figure>
      <div className="container">
        <EditorialSection tate label="診療のご案内" title={<>一人ひとり、<br />ゆっくりと。</>}>
          <p><span className="text-unit">廣瀬診療所は、</span><span className="text-unit">逗子・桜山の高台にある</span><span className="text-unit">完全予約制の診療所です。</span></p>
          <p><span className="text-unit">診察はお一人ずつ。</span><span className="text-unit">からだの不調も、</span><span className="text-unit">暮らしのなかの小さな迷いも、</span><span className="text-unit">どうぞ急がずに</span><span className="text-unit">お話しください。</span></p>
          <ul className="home-link-list">
            <li><Link href="/services"><span>診療案内<small>総合内科・漢方・暮らしの相談</small></span><span aria-hidden="true">→</span></Link></li>
            <li><Link href="/online-consultation"><span>オンライン診療<small>遠くにお住まいの方へ</small></span><span aria-hidden="true">→</span></Link></li>
            <li><Link href="/access"><span>ご予約・アクセス<small>お越しになる前に</small></span><span aria-hidden="true">→</span></Link></li>
          </ul>
        </EditorialSection>
        <Photo photo={photos.hike} />
        <EditorialSection tate label="フィールドワーク" title={<>足もとから、<br />自然にふれる。</>} english="Sense of wonder">
          <p><span className="text-unit">靴を脱いで</span><span className="text-unit">砂の上に立つと、</span><span className="text-unit">ふだん忘れている</span><span className="text-unit">足の裏の感覚が</span><span className="text-unit">よみがえります。</span></p>
          <p><span className="text-unit">逗子の海と山を</span><span className="text-unit">少人数で歩く「裸足ハイク」と、</span><span className="text-unit">波にふれる「サーフセラピー」。</span><span className="text-unit">診察室の外で、</span><span className="text-unit">自然とともに過ごす時間です。</span></p>
          <TextLink href="/events">フィールドワークについて</TextLink>
        </EditorialSection>
        <EditorialSection label="診療所から" title="お知らせ">
          <ul className="news-preview">{newsItems.slice(0, 3).map(news => <li key={news.date + news.title}><Link href={`/news#news-${news.date.replaceAll(".", "-")}`}><time dateTime={news.date.replaceAll(".", "-")}>{news.date}</time><span>{news.title}</span><span aria-hidden="true">→</span></Link></li>)}</ul>
          <TextLink href="/news">すべてのお知らせ</TextLink>
        </EditorialSection>
      </div>
    </>
  );
}

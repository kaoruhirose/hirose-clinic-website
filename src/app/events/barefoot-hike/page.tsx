import type { Metadata, ResolvingMetadata } from "next";
import { PageIntro, Photo, TextLink } from "@/components/Editorial";
import { fieldworks } from "@/lib/events";
import { withLatestDates } from "@/lib/eventDates";
import { photos } from "@/lib/photos";
import EventDetails from "../EventDetails";

export const revalidate = 3600;

/**
 * このページ専用のタイトルと説明文（検索結果や、LINEなどでリンクを送ったときのカードに出る）。
 * 開催日はフォームの日程から自動で入り、過ぎた日は消える。
 */
export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = "裸足で海と山を歩く会 ／ 裸足ハイク｜廣瀬診療所";
  const hike = fieldworks[0] ? await withLatestDates(fieldworks[0]) : null;
  const dates = hike?.dates.map((date) => date.replace(/^\d{4}年/, "")) ?? [];
  const description =
    "逗子海岸に集合し、靴を脱いで海から山へと裸足で歩く、少人数のフィールドワーク「裸足ハイク」のご案内です。" +
    (dates.length > 0 ? `開催日：${dates.join("・")}。` : "");
  // 写真はサイト共通のものをそのまま使う
  const images = (await parent).openGraph?.images ?? [];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/events/barefoot-hike",
      siteName: "廣瀬診療所",
      locale: "ja_JP",
      type: "website",
      images,
    },
  };
}

export default async function BarefootHike() {
  const hike = fieldworks[0] ? await withLatestDates(fieldworks[0]) : null;
  return (
    <div className="page-shell">
      <div className="container">
        <TextLink href="/events">フィールドワーク一覧へ戻る</TextLink>
        <PageIntro
          eyebrow="フィールドワーク"
          title={<><span className="text-unit">裸足で海と山を歩く会</span><span className="text-unit"> ／ 裸足ハイク</span></>}
          english="Barefoot walks between the sea and the hills."
        />
        <Photo photo={photos.hike} />
        <div className="fieldwork-detail prose">
          {hike ? <EventDetails ev={hike} /> : <p className="quiet-note">詳細は準備中です。決まり次第こちらでご案内いたします。</p>}
        </div>
        <TextLink href="/events">フィールドワーク一覧へ戻る</TextLink>
      </div>
    </div>
  );
}

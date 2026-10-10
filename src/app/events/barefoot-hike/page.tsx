import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { PageIntro, TextLink } from "@/components/Editorial";
import { fieldworks } from "@/lib/events";
import { withLatestDates } from "@/lib/eventDates";
import EventDetails from "../EventDetails";
import styles from "./page.module.css";

export const revalidate = 3600;

const hikePhotos = [
  { name: "beach-walk", alt: "波打ち際の砂浜を裸足で歩く参加者の足元", caption: "波打ち際を、裸足で。", width: 1240, height: 1654 },
  { name: "walking-together", alt: "緑に囲まれた山道を一列になって裸足で歩く参加者", caption: "海から山へ、みんなで歩く。", width: 1240, height: 1654 },
  { name: "forest-walk", alt: "木漏れ日の差す森を裸足で歩く参加者の後ろ姿", caption: "木漏れ日の中を歩く。", width: 762, height: 1654 },
  { name: "forest-path", alt: "小さな流れに沿って続く、緑に囲まれた山道", caption: "小さな流れに沿って。", width: 1240, height: 1654 },
  { name: "forest-light", alt: "枝葉の間から光が差し込む森の小道", caption: "森の光と、緑の深さ。", width: 1240, height: 1654 },
  { name: "sea-view", alt: "高台から望む海と江ノ島、遠くに見える富士山", caption: "高台から、海を望む。", width: 1108, height: 1477 },
  { name: "barefoot-circle", alt: "芝生の上で円をつくる参加者の裸足", caption: "芝生の上に、裸足の輪。", width: 1240, height: 1654 },
  { name: "footprint", alt: "湿った土に残った裸足の足跡", caption: "土に残る、足跡。", width: 1240, height: 1654 },
];

function HikePhoto({ photo, opening = false, sizes = "(max-width: 700px) 70vw, (max-width: 1100px) 42vw, 600px" }: { photo: typeof hikePhotos[number]; opening?: boolean; sizes?: string }) {
  return (
    <figure className={styles.photo}>
      <div className={photo.name === "forest-walk" ? styles.forestFrame : undefined}>
        <Image
          src={`/images/barefoot-hike/${photo.name}.webp`}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          loading={opening ? "eager" : "lazy"}
        />
      </div>
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

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
  const flowVisuals = {
    sectionClassName: styles.flowSection,
    listClassName: styles.flowList,
    stepClassName: styles.flowStep,
    photos: {
      "海岸で、裸足になる": <HikePhoto photo={hikePhotos[0]} />,
      "砂浜から山へ": <HikePhoto photo={hikePhotos[1]} />,
      "静寂のワーク": <HikePhoto photo={hikePhotos[4]} />,
      "山頂で漢方茶": <HikePhoto photo={hikePhotos[5]} />,
      "流域をたどって、ふたたび海へ": <HikePhoto photo={hikePhotos[3]} />,
    },
  };
  return (
    <div className="page-shell">
      <div className={`container ${styles.pageContainer}`}>
        <TextLink href="/events">フィールドワーク一覧へ戻る</TextLink>
        <PageIntro
          eyebrow="フィールドワーク"
          title={<><span className="text-unit">裸足で海と山を歩く会</span><span className="text-unit"> ／ 裸足ハイク</span></>}
          english="Barefoot walks between the sea and the hills."
        />
        <div className={styles.opening} id="hike-introduction">
          <HikePhoto photo={hikePhotos[2]} opening sizes="(max-width: 700px) 80vw, 48vw" />
          {hike && (
            <div className={`prose ${styles.openingCopy}`}>
              {hike.epigraph && (
                <blockquote className={`event-epigraph ${styles.openingPoem}`} id="hike-poem">
                  <p>{hike.epigraph.text.split("、").map((phrase, index, phrases) => (
                    <span className={styles.poemLine} key={phrase}>{phrase}{index < phrases.length - 1 ? "、" : ""}</span>
                  ))}</p>
                  <footer>{hike.epigraph.author}</footer>
                </blockquote>
              )}
              {hike.lead && <p className="event-lead">{hike.lead}</p>}
              {hike.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          )}
        </div>
        <div className={`fieldwork-detail prose ${styles.details}`}>
          {hike ? (
            <EventDetails
              ev={hike}
              flowVisuals={flowVisuals}
              showIntroduction={false}
              beforeFees={
                <div className={styles.circle} id="hike-circle">
                  <HikePhoto photo={hikePhotos[6]} sizes="(max-width: 700px) 55vw, 280px" />
                </div>
              }
            />
          ) : <p className="quiet-note">詳細は準備中です。決まり次第こちらでご案内いたします。</p>}
        </div>
        <div className={styles.gallery} id="hike-gallery-title">
          <HikePhoto photo={hikePhotos[7]} sizes="(max-width: 700px) 38vw, 220px" />
        </div>
        <TextLink href="/events">フィールドワーク一覧へ戻る</TextLink>
      </div>
    </div>
  );
}

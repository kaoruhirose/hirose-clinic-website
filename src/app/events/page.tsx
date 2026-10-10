import type { Metadata, ResolvingMetadata } from "next";
import { fieldworks, workshops, type ClinicEvent } from "@/lib/events";
import { fetchFormChoices, upcomingDates } from "@/lib/formDates";
import EventsView from "./EventsView";

// 1時間ごとにページを作り直し、Googleフォームの日程を読み直す（formDates.ts の FORM_REVALIDATE_SECONDS と同じ値）
export const revalidate = 3600;

/** フォームから日程を読み、読めなければ events.ts の予備の日程を使う。どちらも過ぎた日は除く */
async function withLatestDates(ev: ClinicEvent): Promise<ClinicEvent> {
  const fromForm =
    ev.formUrl && ev.formDateQuestion
      ? await fetchFormChoices(ev.formUrl, ev.formDateQuestion)
      : null;
  return { ...ev, dates: upcomingDates(fromForm ?? ev.dates) };
}

/**
 * このページ専用のタイトルと説明文（検索結果や、LINEなどでリンクを送ったときのカードに出る）。
 * 開催日はフォームの日程から自動で入り、過ぎた日は消える。
 */
export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = "裸足ハイク・催し｜廣瀬診療所";
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
      url: "/events",
      siteName: "廣瀬診療所",
      locale: "ja_JP",
      type: "website",
      images,
    },
  };
}

export default async function Events() {
  const [fw, ws] = await Promise.all([
    Promise.all(fieldworks.map(withLatestDates)),
    Promise.all(workshops.map(withLatestDates)),
  ]);
  return <EventsView fieldworks={fw} workshops={ws} />;
}

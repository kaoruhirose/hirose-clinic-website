import type { Metadata, ResolvingMetadata } from "next";
import EventsView from "./EventsView";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = "フィールドワーク ／ 自然処方｜廣瀬診療所";
  const description = "廣瀬診療所のフィールドワーク ／ 自然処方。裸足で海と山を歩く会 ／ 裸足ハイク、海と波とサーフセラピーをご案内します。";
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
      images: (await parent).openGraph?.images ?? [],
    },
  };
}

export default function Events() {
  return <EventsView />;
}

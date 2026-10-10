import type { Metadata, ResolvingMetadata } from "next";
import { PageIntro, TextLink } from "@/components/Editorial";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = "海と波とサーフセラピー｜廣瀬診療所";
  const description = "廣瀬診療所のフィールドワーク「海と波とサーフセラピー」。詳細は準備中です。";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/events/surf-therapy",
      siteName: "廣瀬診療所",
      locale: "ja_JP",
      type: "website",
      images: (await parent).openGraph?.images ?? [],
    },
  };
}

export default function SurfTherapy() {
  return (
    <div className="page-shell">
      <div className="container">
        <TextLink href="/events">フィールドワーク一覧へ戻る</TextLink>
        <PageIntro
          eyebrow="フィールドワーク"
          title={<><span className="text-unit">海と波と</span><span className="text-unit">サーフセラピー</span></>}
          english="Meet the sea and the waves."
        >
          <p>詳細は準備中です。開催内容や日程が決まり次第、こちらでご案内いたします。</p>
        </PageIntro>
      </div>
    </div>
  );
}

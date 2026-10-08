import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WordmarkStudy from "./WordmarkStudy";

export const metadata: Metadata = { title: "屋号の配置比較 | 廣瀬診療所", robots: { index: false, follow: false } };

export default function WordmarkPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return <WordmarkStudy />;
}

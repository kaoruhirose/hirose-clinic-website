import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お知らせ | 廣瀬診療所",
  description: "廣瀬診療所からのお知らせ・最新情報の一覧です。",
};

// お知らせの一覧。新しい項目は配列の先頭に追加する。
const newsItems = [
  {
    date: "2026.04.10",
    title: "ゴールデンウィーク期間中の診療について",
  },
  {
    date: "2026.04.05",
    title: "ヨガとメディテーションの体験会を開催します",
  },
  {
    date: "2026.04.01",
    title: "廣瀬診療所、逗子市にて新規開業のお知らせ",
  },
];

export default function News() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Page Header */}
      <section className="bg-clinic-subtle/50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-clinic-blue mb-4">
            お知らせ
          </h1>
          <p className="text-clinic-green font-medium tracking-widest text-sm">
            NEWS & UPDATES
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-16">
        <div className="space-y-4">
          {newsItems.map((news, idx) => (
            <article
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-transparent"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <time className="text-sm font-medium text-clinic-green/80 shrink-0">
                  {news.date}
                </time>
                <h2 className="text-clinic-text font-normal">{news.title}</h2>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-clinic-text/60 text-center leading-relaxed">
          最新の診療状況やイベントのご案内は、このページでお知らせいたします。
        </p>
      </div>
    </div>
  );
}

/**
 * お知らせ記事の一元管理。
 * 新しい記事を配列の先頭に追加すると、トップページ（最新3件）と
 * お知らせ一覧ページの両方に自動で反映される。
 * category は「お知らせ」「イベント」「診療案内」のいずれか。
 */
export type NewsItem = {
  date: string;
  category: "お知らせ" | "イベント" | "診療案内";
  title: string;
  body: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "2026.03.05",
    category: "お知らせ",
    title: "廣瀬診療所を開院しました",
    body: "2026年3月5日、逗子・桜山の高台に廣瀬診療所を開院しました。西洋医学と東洋医学の両方の見方を大切にした、完全予約制の診療所です。ご予約は公式LINEで承っています。",
  },
];

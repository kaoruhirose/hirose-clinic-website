"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

// お知らせ記事はここに新しいものを上に追加してください。
// category は「お知らせ」「イベント」「診療案内」のいずれかを想定しています。
const newsItems = [
  {
    date: "2026.04.10",
    category: "診療案内",
    title: "ゴールデンウィーク期間中の診療について",
    body: "5月3日（日）から5月6日（水）まで休診とさせていただきます。期間中のご予約は、お手数ですが休診明け以降の日程でお願いいたします。",
  },
  {
    date: "2026.04.05",
    category: "イベント",
    title: "ヨガとメディテーションの体験会を開催します",
    body: "逗子の自然の中で、心身を整えるヨガとメディテーションの体験会を開催します。詳細・お申し込み方法は追ってご案内いたします。",
  },
  {
    date: "2026.04.01",
    category: "お知らせ",
    title: "廣瀬診療所、逗子市にて新規開業のお知らせ",
    body: "このたび神奈川県逗子市に廣瀬診療所を開業いたしました。西洋医学と東洋医学の視点から、皆さまの健やかな毎日を支えてまいります。完全予約制にて承っております。",
  },
];

const categoryStyles: Record<string, string> = {
  "お知らせ": "bg-clinic-blue/10 text-clinic-blue",
  "イベント": "bg-clinic-green/10 text-clinic-green",
  "診療案内": "bg-clinic-subtle text-clinic-blue",
};

export default function News() {
  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-clinic-subtle/50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-clinic-blue mb-4"
          >
            お知らせ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-clinic-green font-medium tracking-widest text-sm"
          >
            NEWS & UPDATES
          </motion.p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-6"
        >
          {newsItems.map((news, idx) => (
            <motion.li
              key={idx}
              variants={fadeUp}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-transparent hover:border-clinic-subtle transition-colors"
            >
              <div className="flex items-center gap-4 mb-3">
                <time className="text-sm font-medium text-clinic-green/80">{news.date}</time>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    categoryStyles[news.category] ?? "bg-clinic-subtle text-clinic-blue"
                  }`}
                >
                  {news.category}
                </span>
              </div>
              <h2 className="font-serif text-lg md:text-xl text-clinic-blue mb-2">
                {news.title}
              </h2>
              <p className="text-clinic-text/80 leading-relaxed text-sm">
                {news.body}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <p className="text-sm text-clinic-text/50 mt-12 text-center">
          最新のお知らせは随時こちらに掲載いたします。
        </p>
      </div>
    </div>
  );
}

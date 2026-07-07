"use client";

/**
 * デザイン実験用のプレビューページ（/preview）。
 * The Ecology Center 風の編集的・アーストーンな雰囲気を試すための
 * 別ホーム案。本番トップ（/）には影響しない。
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { KampoArt, EnsoArt, ZushiSceneArt } from "@/components/art";
import { newsItems } from "@/lib/news";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

/** 小さな英字ラベル（アイブロウ） */
function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.32em] uppercase ${className}`}>
      <span className="w-6 h-px bg-current opacity-50" />
      {children}
    </span>
  );
}

const pillars = [
  {
    no: "01",
    en: "Emergency Medicine",
    title: "救急のまなざしで、\nいまを診る",
    body:
      "発熱、痛み、思いがけない怪我。救急医療の最前線で培った判断で、目の前の「いま」に的確に応えます。より高度な治療が要るときは、迷わず次の医療へと橋渡しを。",
    Art: EnsoArt,
  },
  {
    no: "02",
    en: "Kampo / Herbal",
    title: "漢方のちからで、\n根をたがやす",
    body:
      "検査に表れない不調も、大切なからだの便り。脈・舌・お腹の所見と暮らしぶりから体質を見立て、生薬のブレンドでからだ全体の巡りを、内側から整えていきます。",
    Art: KampoArt,
  },
  {
    no: "03",
    en: "Lifestyle",
    title: "暮らしそのものを、\n処方する",
    body:
      "海と山の恵みを、健やかさの糧に。ヨガとメディテーション、食事と睡眠の整え方まで。薬に頼りきらず、自分の力で「めぐり」を取り戻す道のりに伴走します。",
    Art: ZushiSceneArt,
  },
];

export default function Preview() {
  return (
    <div className="flex flex-col w-full bg-clinic-base text-clinic-text">
      {/* ── Hero ───────────────────────────── */}
      <section className="relative w-full h-[92vh] min-h-[640px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="逗子・桜山の高台から望む、夕暮れの富士山と江ノ島"
            fill
            className="object-cover object-[center_75%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-clinic-forest/85 via-clinic-forest/25 to-clinic-forest/10" />
        </div>

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 md:pb-24"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="text-clinic-cream/90">Hirose Shinryojo — Zushi, Kanagawa</Eyebrow>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-[2.75rem] leading-[1.15] md:text-7xl md:leading-[1.1] text-clinic-cream font-medium mt-7 mb-8 max-w-4xl whitespace-pre-line [text-shadow:0_2px_30px_rgba(28,34,22,0.4)]"
          >
            {"自然のリズムに、\nからだをあずける。"}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-clinic-cream/90 text-base md:text-lg leading-loose max-w-xl mb-10"
          >
            富士山と江ノ島を望む逗子・桜山の高台で、西洋医学の確かさと東洋医学の深さ、そして自然の力を携えて。完全予約制の、あなたのための小さな診療所です。
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/access"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-clinic-cream text-clinic-forest text-sm font-medium hover:bg-white transition-colors"
            >
              ご予約・アクセス
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-clinic-cream/50 text-clinic-cream text-sm font-medium hover:bg-clinic-cream/10 transition-colors"
            >
              私たちの想い
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Manifesto ──────────────────────── */}
      <section className="py-28 md:py-40 bg-clinic-base">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow className="text-clinic-clay">Our Philosophy · 私たちの考え</Eyebrow>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="font-serif text-2xl md:text-[2.6rem] leading-[1.7] md:leading-[1.65] text-clinic-forest mt-10 tracking-wide"
            >
              「治す」の、
              <span className="text-clinic-clay">さらに手前</span>から。
              病は、ある日とつぜん訪れるものではありません。日々の巡り、季節のうつろい、暮らしの積み重ね——その延長線上に、からだはあります。
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-clinic-text/70 leading-loose mt-10 max-w-2xl md:text-lg"
            >
              廣瀬診療所は、救急医療で培った西洋医学のまなざしと、漢方が導く東洋医学の深さ、そして逗子の自然を携えて、あなたの「めぐり」に静かに寄り添います。
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Three kinds of care（編集的な交互レイアウト）── */}
      <section className="bg-clinic-cream/60 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-20 md:mb-28"
          >
            <Eyebrow className="text-clinic-clay">Care · 三つの手当て</Eyebrow>
            <h2 className="font-serif text-3xl md:text-5xl text-clinic-forest mt-6 leading-tight">
              ひとつのからだを、<br />三つのまなざしで。
            </h2>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {pillars.map((p, idx) => (
              <motion.div
                key={p.no}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  idx % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <motion.div
                  variants={fadeUp}
                  className="relative h-[340px] md:h-[440px] rounded-[2rem] overflow-hidden shadow-sm [direction:ltr]"
                >
                  <p.Art className="absolute inset-0 w-full h-full" />
                </motion.div>

                <motion.div variants={fadeUp} className="[direction:ltr]">
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-serif text-5xl md:text-6xl text-clinic-clay/90">{p.no}</span>
                    <Eyebrow className="text-clinic-forest/60">{p.en}</Eyebrow>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl text-clinic-forest leading-snug mb-6 whitespace-pre-line">
                    {p.title}
                  </h3>
                  <p className="text-clinic-text/75 leading-loose md:text-lg max-w-md">{p.body}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Place（没入する深緑のバンド）──────── */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="逗子の海と空"
            fill
            className="object-cover object-[center_60%]"
          />
          <div className="absolute inset-0 bg-clinic-forest/88" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow className="text-clinic-cream/80">Place · 逗子・桜山</Eyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-5xl text-clinic-cream leading-[1.4] mt-8"
            >
              海と山に抱かれた、<br />小さな診療所。
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-clinic-cream/85 leading-loose mt-8 max-w-xl mx-auto md:text-lg"
            >
              コンクリートの大きな病院ではなく、暮らしの延長にある「港」のような場所を。晴れた夕暮れには、庭先から富士山と江ノ島が海の向こうに浮かびます。完全予約制だからこそ、ひとりひとりに、ゆっくりと時間をかけて。
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Journal / News ─────────────────── */}
      <section className="py-24 md:py-32 bg-clinic-base">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-14">
            <div>
              <Eyebrow className="text-clinic-clay">Journal · お知らせ</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-clinic-forest mt-5">季節のたより</h2>
            </div>
            <Link
              href="/news"
              className="group hidden sm:inline-flex items-center gap-2 text-sm font-medium text-clinic-forest hover:text-clinic-clay transition-colors"
            >
              すべて見る
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="border-t border-clinic-forest/15">
            {newsItems.slice(0, 3).map((news, idx) => (
              <Link
                key={idx}
                href="/news"
                className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-7 border-b border-clinic-forest/15 hover:px-2 transition-all"
              >
                <time className="text-sm text-clinic-clay font-medium tracking-wide whitespace-nowrap w-24">
                  {news.date}
                </time>
                <span className="text-xs text-clinic-forest/50 tracking-widest uppercase w-24">{news.category}</span>
                <p className="font-serif text-lg md:text-xl text-clinic-forest flex-1 group-hover:text-clinic-clay transition-colors">
                  {news.title}
                </p>
                <ArrowUpRight className="hidden sm:block w-5 h-5 text-clinic-forest/40 group-hover:text-clinic-clay transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────── */}
      <section className="bg-clinic-cream/60 py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Eyebrow className="text-clinic-clay">Reservation · ご予約</Eyebrow>
          <h2 className="font-serif text-3xl md:text-5xl text-clinic-forest leading-tight mt-8 mb-10">
            その不調、ひとりで<br />抱え込まずに。
          </h2>
          <Link
            href="/access"
            className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-clinic-forest text-clinic-cream text-sm font-medium hover:bg-clinic-green transition-colors"
          >
            ご予約・ご相談はこちら
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* プレビュー識別バー */}
      <div className="bg-clinic-forest text-clinic-cream/70 text-center text-xs py-4 px-6">
        これは The Ecology Center 風のデザイン実験ページ（/preview）です。本番トップページには影響しません。
      </div>
    </div>
  );
}

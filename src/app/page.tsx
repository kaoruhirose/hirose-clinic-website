"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeartPulse, Leaf, Waves, Check, ArrowRight } from "lucide-react";
import { KampoArt } from "@/components/art";
import { newsItems } from "@/lib/news";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const pillars = [
  {
    title: "西洋医学",
    subtitle: "救急科専門医の確かさ",
    desc: "救急医療の最前線で培った経験をもとに、急な発熱や痛み、怪我にも的確な初期対応を行います。専門的な治療が必要なときは、適切な医療機関へ迷いなくお繋ぎします。",
    icon: HeartPulse,
    tone: "text-clinic-blue bg-clinic-blue/10",
  },
  {
    title: "東洋医学",
    subtitle: "漢方専門医の全体観",
    desc: "検査に表れない「なんとなくの不調」も、大切な体からのサインです。脈・舌・お腹の所見と暮らしぶりから体質を見立て、漢方でからだ全体の巡りを整えます。",
    icon: Leaf,
    tone: "text-clinic-green bg-clinic-green/10",
  },
  {
    title: "ライフスタイル",
    subtitle: "逗子の自然とともに",
    desc: "海と山に抱かれたこの土地の恵みを、健やかさの処方箋に。ヨガとメディテーション、食事や睡眠の整え方まで、暮らしそのものからの回復を伴走します。",
    icon: Waves,
    tone: "text-clinic-gold bg-clinic-gold/10",
  },
];

const concerns = [
  "病院に行くほどではない気がするけれど、なんとなく不調が続いている",
  "検査では「異常なし」。それでも、つらい症状が消えない",
  "薬を増やすのではなく、体質から根本的に見直したい",
  "自然に寄り添った、自分らしいペースで健康を保ちたい",
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[88vh] min-h-[620px] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-mobile.jpg"
            alt="逗子・桜山の高台から望む、夕暮れの富士山と江ノ島と夕陽の一望"
            fill
            className="object-cover object-center md:hidden"
            priority
          />
          <Image
            src="/images/hero-wide.jpg"
            alt="逗子・桜山の高台から望む、夕暮れの富士山と江ノ島と夕陽の一望"
            fill
            className="object-cover object-center hidden md:block"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-clinic-blue/45 via-clinic-blue/5 to-transparent md:from-clinic-blue/60 md:via-clinic-blue/10" />
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-24 md:pb-28"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="text-white/85 tracking-[0.35em] text-xs md:text-sm mb-6 uppercase"
          >
            Hirose Shinryojo — Zushi, Kanagawa
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl md:text-6xl text-white font-medium leading-tight mb-8 [text-shadow:0_2px_24px_rgba(28,60,90,0.45)]"
          >
            <span className="inline-block">健やかな巡りを、</span>
            <span className="inline-block">ここ逗子から。</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-loose mb-10 [text-shadow:0_1px_12px_rgba(28,60,90,0.5)]"
          >
            富士山と江ノ島を望む、逗子・桜山の高台。<br />
            救急医療で培った西洋医学の確かさと、漢方が導く東洋医学の深さで、<br className="hidden md:block" />
            あなたの心とからだに、静かに向き合う完全予約制の診療所です。
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-clinic-blue bg-white/95 hover:bg-white rounded-full shadow-lg transition-all hover:-translate-y-0.5"
            >
              私たちの想いを見る
            </Link>
            <Link
              href="/access"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white border border-white/70 hover:bg-white/10 rounded-full transition-colors"
            >
              ご予約・アクセス
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-clinic-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-clinic-green font-medium tracking-widest text-sm mb-3">
              OUR APPROACH
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl text-clinic-blue mb-4">
              3つの柱で支える、これからの医療
            </motion.h2>
            <div className="w-12 h-1 bg-clinic-green mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeUp} className="text-clinic-text/80 max-w-2xl mx-auto leading-relaxed">
              「病気を治す」だけで終わらせない。病のずっと手前から、
              暮らしと体質に寄り添う——港のように開かれた、あなたの健康の拠り所を目指しています。
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${pillar.tone}`}>
                  <pillar.icon className="w-7 h-7" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl font-medium text-clinic-blue mb-1">{pillar.title}</h3>
                <p className="text-xs text-clinic-green tracking-wider mb-4">{pillar.subtitle}</p>
                <p className="text-clinic-text/80 leading-relaxed text-sm">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-24 bg-clinic-subtle/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg"
            >
              <KampoArt className="absolute inset-0 w-full h-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <h2 className="font-serif text-3xl text-clinic-blue mb-8 leading-snug">
                こんなお悩み、<br className="sm:hidden" />ありませんか？
              </h2>
              <ul className="space-y-6">
                {concerns.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-clinic-green/10 flex items-center justify-center text-clinic-green mt-1 mr-4">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-clinic-text/90 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-clinic-text/70 leading-relaxed">
                そのお悩み、ひとりで抱え込まずに聞かせてください。
                完全予約制だからこそ、ゆっくり時間をかけてお話を伺えます。
              </p>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="group inline-flex items-center text-clinic-green font-medium hover:text-clinic-green/80 transition-colors"
                >
                  診療内容について詳しく見る
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Sneak Peek */}
      <section className="py-24 bg-clinic-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl text-clinic-blue mb-2">お知らせ</h2>
              <p className="text-clinic-text/70 text-sm tracking-widest">NEWS & UPDATES</p>
            </div>
            <Link
              href="/news"
              className="group inline-flex items-center text-sm font-medium text-clinic-blue hover:text-clinic-green transition-colors"
            >
              すべて見る
              <ArrowRight className="ml-1.5 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="space-y-4">
            {newsItems.slice(0, 3).map((news, idx) => (
              <Link
                key={idx}
                href="/news"
                className="group block bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-clinic-subtle"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <time className="text-sm font-medium text-clinic-green/80 whitespace-nowrap">{news.date}</time>
                  <p className="text-clinic-text group-hover:text-clinic-blue transition-colors">{news.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

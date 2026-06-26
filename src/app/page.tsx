"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="逗子の海岸から望む富士山と江ノ島の夕景"
            fill
            className="object-cover object-[center_88%]"
            priority
          />
          <div className="absolute inset-0 bg-clinic-base/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-clinic-base/70 via-transparent to-transparent" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto translate-y-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl text-white font-medium leading-tight mb-12"
          >
            健やかな巡りを、<br className="md:hidden" />ここ逗子から。
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-clinic-text max-w-2xl mx-auto leading-relaxed mb-10"
          >
            西洋医学の鋭さと、東洋医学の深さ。<br />
            自然と調和し、ライフスタイルから心身を整える<br className="hidden md:block" />
            あなたのための新しい「拠り所」です。
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-clinic-blue border-2 border-clinic-blue rounded-full hover:bg-clinic-blue hover:text-white transition-colors"
            >
              私たちの想いを見る
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
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl text-clinic-blue mb-4">
              3つの柱で支える、新しい医療
            </motion.h2>
            <div className="w-12 h-1 bg-clinic-green mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeUp} className="text-clinic-text/80 max-w-2xl mx-auto">
              従来の「病院」という枠に囚われず、カフェや港のように開かれた空間で総合的なアプローチをご提案します。
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "西洋医学 (救急)",
                desc: "急な体調不良や怪我に対して、救急専門医としての経験を活かした的確な初期対応を行います。",
                icon: "🩺"
              },
              {
                title: "東洋医学 (漢方)",
                desc: "「未病」のサインを見逃さず、漢方を用いた根本的な体質改善で、身体全体のバランスを整えます。",
                icon: "🌿"
              },
              {
                title: "ライフスタイル (環境)",
                desc: "ヨガやメディテーションを通し、逗子の豊かな自然と呼応しながら生きる喜びを共有します。",
                icon: "🌊"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="font-serif text-xl font-medium text-clinic-blue mb-3">{feature.title}</h3>
                <p className="text-clinic-text/80 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Empathy Section with Image */}
      <section className="py-24 bg-clinic-subtle/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-lg"
            >
              <Image 
                src="/images/kampo.png" 
                alt="漢方の自然な素材" 
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <h2 className="font-serif text-3xl text-clinic-blue mb-8">
                こんなお悩み、ありませんか？
              </h2>
              <ul className="space-y-6">
                {[
                  "病院に行くほどではない気がするが、何となく不調が続く",
                  "検査では「異常なし」と言われたが、辛い症状がある",
                  "薬を飲み続けるのではなく、根本的に体質を改善したい",
                  "自然と調和した、自分らしいペースで健康を維持したい"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-clinic-green/10 flex items-center justify-center text-clinic-green mt-1 mr-4">
                      ✓
                    </span>
                    <span className="text-clinic-text/90 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10">
                <Link 
                  href="/services" 
                  className="group inline-flex items-center text-clinic-green font-medium hover:text-clinic-green/80 transition-colors"
                >
                  診療内容について詳しく見る
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
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
              <p className="text-clinic-text/70 text-sm">News & Updates</p>
            </div>
            <Link href="/news" className="text-sm font-medium text-clinic-blue hover:text-clinic-green transition-colors">
              すべて見る →
            </Link>
          </div>
          
          <div className="space-y-4">
            {[
              { date: "2026.04.01", title: "廣瀬診療所、逗子市にて新規開業のお知らせ" },
              { date: "2026.04.05", title: "ヨガとメディテーションの体験会を開催します" },
              { date: "2026.04.10", title: "ゴールデンウィーク期間中の診療について" }
            ].map((news, idx) => (
              <Link 
                key={idx} 
                href="/news"
                className="group block bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-clinic-subtle"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <time className="text-sm font-medium text-clinic-green/80">{news.date}</time>
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

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Services() {
  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-clinic-subtle/50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-clinic-blue mb-4"
          >
            診療案内
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-clinic-green font-medium tracking-widest text-sm"
          >
            SERVICES
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.p variants={fadeUp} className="text-lg leading-relaxed text-clinic-text/80">
            廣瀬診療所では、保険診療による確実なアプローチと、自費診療（自由診療）による柔軟なアプローチを組み合わせ、お一人おひとりに最適なケアをご提案します。
          </motion.p>
        </motion.div>

        {/* 一般内科・救急対応 */}
        <motion.section 
          id="general"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border-t-4 border-clinic-blue"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 bg-clinic-blue/10 text-clinic-blue text-2xl rounded-2xl">
              🩺
            </span>
            <div>
              <h2 className="font-serif text-2xl text-clinic-blue">一般内科・救急対応</h2>
              <p className="text-sm text-clinic-text/60 mt-1">保険診療の範囲</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-4 text-clinic-text/80 leading-relaxed mb-6 text-sm md:text-base">
            <p>
              風邪、発熱、腹痛などの急性症状から、高血圧、脂質異常症、糖尿病などの生活習慣病の管理まで、幅広く対応いたします。
            </p>
            <p>
              また、救急専門医としての経験を活かし、怪我の処置（縫合等）や、より高度な医療機関での治療が必要かどうかの迅速なトリアージ・初期対応も行います。「こんなことで受診して良いのかな？」と迷う場合も、まずはご相談ください。
            </p>
          </motion.div>
        </motion.section>

        {/* 漢方専門外来 */}
        <motion.section 
          id="kampo"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border-t-4 border-clinic-green"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 bg-clinic-green/10 text-clinic-green text-2xl rounded-2xl">
              🌿
            </span>
            <div>
              <h2 className="font-serif text-2xl text-clinic-blue">漢方専門外来</h2>
              <p className="text-sm text-clinic-text/60 mt-1">保険診療・自費診療（処方内容による）</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-4 text-clinic-text/80 leading-relaxed mb-6 text-sm md:text-base">
            <p>
              西洋医学的な検査では異常が見つからない「未病」の状態や、慢性的な疲労、冷え、女性特有のお悩みに対して、漢方薬を用いた体質改善を目指します。
            </p>
            <p>
              漢方専門医が、脈や舌の所見はもちろん、生活習慣や体質（証）を総合的に見極め、あなたに最も適した生薬のブレンド（煎じ薬またはエキス剤）を処方します。症状を長引かせている根本原因にアプローチします。
            </p>
          </motion.div>
        </motion.section>

        {/* ライフスタイル相談 */}
        <motion.section 
          id="lifestyle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border-t-4 border-yellow-500"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 bg-yellow-500/10 text-yellow-600 text-2xl rounded-2xl">
              🌊
            </span>
            <div>
              <h2 className="font-serif text-2xl text-clinic-blue">ライフスタイル相談</h2>
              <p className="text-sm text-clinic-text/60 mt-1">自費診療（カウンセリング・プログラム）</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-4 text-clinic-text/80 leading-relaxed mb-6 text-sm md:text-base">
            <p>
              「薬を手放したい」「ストレスと上手く付き合いたい」「より自然に調和した生き方にシフトしたい」という方に向けた、総合的なヘルスケアコンサルティングです。
            </p>
            <p>
              食事や睡眠のレビュー、メディテーションの習慣化サポート、ヨガ等のセルフケアスキルの指導を通して、ご自身の力で健やかさを維持できるよう伴走します。環境への配慮も含めた、エシカルでサステナブルな健康づくりを一緒に考えましょう。
            </p>
          </motion.div>
        </motion.section>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center pt-8"
        >
          <Link 
            href="/access" 
            className="inline-flex items-center justify-center px-10 py-4 text-white bg-clinic-blue hover:bg-clinic-blue/90 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
          >
            ご予約・ご相談はこちら
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

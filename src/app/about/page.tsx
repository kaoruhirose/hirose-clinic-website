"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

export default function About() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Page Header */}
      <section className="bg-clinic-subtle/50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-clinic-blue mb-4"
          >
            私たちの想い
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-clinic-green font-medium tracking-widest text-sm"
          >
            ABOUT US
          </motion.p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-32">
        {/* Story Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeUp} className="order-2 md:order-1">
            <h2 className="font-serif text-3xl text-clinic-blue mb-6">
              なぜ、逗子の自宅で開院したのか
            </h2>
            <div className="space-y-4 text-clinic-text/80 leading-relaxed">
              <p>
                救急医療の最前線で命と向き合い続ける中で、「病気になってから治す」ことの限界を感じるようになりました。ストレスや環境の変化が引き起こす不調を、もっと手前で防ぐことはできないのか。
              </p>
              <p>
                その答えを求めて東洋医学（漢方）を学び、人を「全体」として捉えることの重要性に気づきました。自然の営みと人間の体は深く繋がっています。
              </p>
              <p>
                海と山に囲まれたこの逗子の地で、地域に溶け込んだ「港」のような場所を作りたい。それが、コンクリートの大きな病院ではなく、温もりある自宅の一部を診療所として開いた理由です。
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="order-1 md:order-2 relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
            {/* プレースホルダーとして海や自然の画像を使用 */}
            <Image 
              src="/images/hero.png" 
              alt="逗子の自然" 
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.section>

        {/* Profile Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-clinic-subtle/50 flex flex-col md:flex-row gap-12 items-start"
        >
          <motion.div variants={fadeUp} className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-48 h-48 bg-clinic-subtle rounded-full mb-6 overflow-hidden flex items-center justify-center">
              <span className="text-clinic-text/40 text-sm">ポートレート画像が入ります</span>
            </div>
            <h3 className="font-serif text-2xl text-clinic-blue font-medium mb-1">廣瀬 薫</h3>
            <p className="text-clinic-green text-sm mb-4">院長 / 医師</p>
          </motion.div>
          <motion.div variants={fadeUp} className="w-full md:w-2/3">
            <h4 className="font-serif text-xl text-clinic-blue mb-4">略歴・資格</h4>
            <ul className="space-y-2 text-clinic-text/80 text-sm mb-6 list-disc list-inside">
              <li>救急専門医 / 漢方専門医</li>
              <li>全米ヨガアライアンス認定（RYT200）</li>
            </ul>
            <h4 className="font-serif text-xl text-clinic-blue mb-4">メッセージ</h4>
            <p className="text-clinic-text/80 leading-relaxed text-sm">
              「なんとなく調子が悪い」「病院に行くべきか迷う」そんな時こそ、お気軽にご相談ください。西洋医学の客観的な診断と、東洋医学の体質改善、そして適切なライフスタイルの提案を通じて、あなたらしい健康づくりをサポートします。
            </p>
          </motion.div>
        </motion.section>

        {/* Yoga & Meditation Section */}
        <motion.section 
          id="yoga"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeUp} className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
            <Image 
              src="/images/yoga.png" 
              alt="ヨガ・メディテーション風景" 
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <h2 className="font-serif text-3xl text-clinic-blue mb-6">
              ヨガとメディテーション<br />
              <span className="text-xl text-clinic-green mt-2 block">自然と繋がり、自らを整える</span>
            </h2>
            <div className="space-y-4 text-clinic-text/80 leading-relaxed">
              <p>
                当クリニックでは、治療という枠を超えて「予防医学」の一環として、ヨガやメディテーションの指導・ワークショップも行っています。
              </p>
              <p>
                RYT200（全米ヨガアライアンス）の資格を持つ院長自らが、心身の緊張を解きほぐす呼吸法や、逗子の自然を感じるフィールドワークをご案内します。薬に頼りすぎるのではなく、自分自身の力で「巡り」を良くする体験を始めてみませんか？
              </p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

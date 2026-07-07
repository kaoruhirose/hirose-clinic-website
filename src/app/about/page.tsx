"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EnsoArt } from "@/components/art";

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
            <h2 className="font-serif text-3xl text-clinic-blue mb-6 leading-snug">
              なぜ、逗子の自宅で<br />開院したのか
            </h2>
            <div className="space-y-4 text-clinic-text/80 leading-loose">
              <p>
                救急医療の最前線で命と向き合い続けるなかで、「病気になってから治す」ことの限界を感じるようになりました。ストレスや環境の変化が引き起こす不調を、もっと手前で防ぐことはできないのか——。
              </p>
              <p>
                その答えを探して東洋医学（漢方）を学び、人を臓器や検査値ではなく「全体」として捉えることの大切さに気づきました。自然の営みと人のからだは、深くつながっています。
              </p>
              <p>
                晴れた夕暮れには、庭先から富士山と江ノ島が海の向こうに浮かびます。海と山に抱かれたこの逗子・桜山の地で、大きな病院ではなく、暮らしの延長にある「港」のような場所をつくりたい。それが、自宅の一部を診療所として開いた理由です。
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="order-1 md:order-2 relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/hero.jpg"
              alt="診療所のある高台から望む、夕暮れの富士山と江ノ島"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[center_70%]"
            />
            <p className="absolute bottom-3 right-4 text-[11px] text-white/85 tracking-wider [text-shadow:0_1px_8px_rgba(28,60,90,0.6)]">
              診療所のある高台からの眺め
            </p>
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
            <div className="w-48 h-48 rounded-full mb-6 overflow-hidden bg-gradient-to-br from-clinic-subtle to-clinic-base border border-clinic-subtle flex items-center justify-center">
              <span className="font-serif text-6xl text-clinic-blue/70 select-none">薫</span>
            </div>
            <h3 className="font-serif text-2xl text-clinic-blue font-medium mb-1">廣瀬 薫</h3>
            <p className="text-clinic-green text-sm mb-4">代表 / 医師</p>
          </motion.div>
          <motion.div variants={fadeUp} className="w-full md:w-2/3">
            <h4 className="font-serif text-xl text-clinic-blue mb-4">略歴・資格</h4>
            <ul className="space-y-2 text-clinic-text/80 text-sm mb-8 list-disc list-inside">
              <li>救急科専門医 / 漢方専門医</li>
              <li>全米ヨガアライアンス認定インストラクター（RYT200）</li>
            </ul>
            <h4 className="font-serif text-xl text-clinic-blue mb-4">ごあいさつ</h4>
            <div className="space-y-3 text-clinic-text/80 leading-loose text-sm">
              <p>
                「なんとなく調子が悪い」「病院に行くべきか迷っている」——そんなときこそ、どうぞ気軽に扉を叩いてください。
              </p>
              <p>
                西洋医学の客観的な診断と、東洋医学による体質からの見立て、そして無理のないライフスタイルの提案。この3つを行き来しながら、あなたが自分の力で健やかさを取り戻していく道のりに、伴走いたします。
              </p>
            </div>
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
            <EnsoArt className="absolute inset-0 w-full h-full" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <h2 className="font-serif text-3xl text-clinic-blue mb-6">
              ヨガとメディテーション<br />
              <span className="text-xl text-clinic-green mt-2 block">自然とつながり、自らを整える</span>
            </h2>
            <div className="space-y-4 text-clinic-text/80 leading-loose">
              <p>
                当診療所では、治療という枠を超えた「予防医学」の実践として、ヨガとメディテーションの指導・ワークショップを行っています。
              </p>
              <p>
                RYT200（全米ヨガアライアンス）の資格を持つ代表が、心身の緊張をほどく呼吸法から、逗子の海と山を感じるフィールドワークまでをご案内します。薬に頼りきるのではなく、自分自身の力で「巡り」を良くしていく——その最初の一歩を、ここから始めてみませんか。
              </p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

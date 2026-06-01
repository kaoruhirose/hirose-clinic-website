"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const sections = [
  {
    title: "1. 個人情報の定義",
    body: [
      "本プライバシーポリシーにおける「個人情報」とは、個人情報の保護に関する法律に定める個人情報を指し、氏名、生年月日、住所、電話番号、メールアドレス、診療に関する情報など、特定の個人を識別できる情報をいいます。",
    ],
  },
  {
    title: "2. 個人情報の取得と利用目的",
    body: [
      "当院は、適正な手段により個人情報を取得し、以下の目的の範囲内で利用いたします。",
    ],
    list: [
      "診療・医療サービスの提供および予約管理のため",
      "診療費の請求・会計処理のため",
      "ご予約内容の確認やお問い合わせへの対応のため",
      "医療の質の向上を目的とした院内での検討のため",
      "法令に基づく対応および行政機関への報告のため",
    ],
  },
  {
    title: "3. 第三者への提供",
    body: [
      "当院は、次のいずれかに該当する場合を除き、ご本人の同意なく個人情報を第三者へ提供することはありません。",
    ],
    list: [
      "法令に基づく場合",
      "人の生命、身体または財産の保護のために必要があり、ご本人の同意を得ることが困難な場合",
      "他の医療機関との連携など、適切な診療の継続のために必要な場合",
    ],
  },
  {
    title: "4. 個人情報の安全管理",
    body: [
      "当院は、取得した個人情報の漏えい、滅失またはき損の防止その他の安全管理のために、必要かつ適切な措置を講じます。個人情報を取り扱う従業者に対しても、適切な監督を行います。",
    ],
  },
  {
    title: "5. 開示・訂正・利用停止の請求",
    body: [
      "ご本人から個人情報の開示、訂正、追加、削除、利用停止または消去のご請求があった場合は、ご本人であることを確認のうえ、法令に従い速やかに対応いたします。",
    ],
  },
  {
    title: "6. お問い合わせ窓口",
    body: [
      "個人情報の取り扱いに関するお問い合わせは、ご予約時にご案内する連絡先、または当院窓口までご連絡ください。",
    ],
  },
  {
    title: "7. 本ポリシーの変更",
    body: [
      "当院は、法令の改正や運用の見直しに応じて、本プライバシーポリシーを予告なく変更することがあります。変更後の内容は、本ページに掲載した時点から効力を生じるものとします。",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-clinic-subtle/50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-clinic-blue mb-4"
          >
            プライバシーポリシー
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-clinic-green font-medium tracking-widest text-sm"
          >
            PRIVACY POLICY
          </motion.p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-4 mb-12"
        >
          <ShieldCheck className="w-7 h-7 text-clinic-green flex-shrink-0 mt-1" />
          <p className="text-clinic-text/80 leading-relaxed">
            廣瀬診療所（以下「当院」といいます）は、患者さまの個人情報を適切に保護することが社会的責務であると考え、個人情報の保護に関する法律および関連法令を遵守し、以下の方針に基づいて個人情報を取り扱います。
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-10"
        >
          {sections.map((section) => (
            <motion.section key={section.title} variants={fadeUp}>
              <h2 className="font-serif text-xl md:text-2xl text-clinic-blue mb-4 border-b border-clinic-subtle pb-3">
                {section.title}
              </h2>
              {section.body.map((paragraph, idx) => (
                <p key={idx} className="text-clinic-text/80 leading-relaxed mb-3">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="text-clinic-text/80 space-y-2 list-disc list-inside leading-relaxed">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}
        </motion.div>

        <p className="text-sm text-clinic-text/50 mt-16 text-right">
          制定日：2026年6月1日
        </p>
      </div>
    </div>
  );
}

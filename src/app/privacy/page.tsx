import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 廣瀬診療所",
  description: "廣瀬診療所における個人情報の取り扱いについてご案内します。",
};

// 各条項。見出しと本文（段落の配列）で構成する。
const sections = [
  {
    heading: "1. 基本方針",
    paragraphs: [
      "廣瀬診療所（以下「当院」）は、患者さまの個人情報を適切に保護することが医療機関の重要な責務であると考え、個人情報の保護に関する法律および関連法令・ガイドラインを遵守し、個人情報を適正に取り扱います。",
    ],
  },
  {
    heading: "2. 取得する個人情報",
    paragraphs: [
      "当院は、診療のご予約・診察・お問い合わせの際に、氏名、連絡先、症状・既往歴などの診療に必要な情報を取得することがあります。",
      "なお、当ウェブサイト自体には入力フォームを設置しておらず、ウェブサイトの閲覧のみによって個人情報を取得することはありません。また、現在アクセス解析ツール等による閲覧情報の収集も行っておりません。",
    ],
  },
  {
    heading: "3. 利用目的",
    paragraphs: [
      "取得した個人情報は、次の目的の範囲内で利用します。（1）診療・保健指導などの医療の提供、（2）ご予約の確認・変更などのご連絡、（3）医療保険事務、（4）医療の質の向上を目的とした院内での症例検討。",
    ],
  },
  {
    heading: "4. 第三者への提供",
    paragraphs: [
      "法令に基づく場合、人の生命・身体・財産の保護のために必要がある場合、その他法令で認められる場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。",
      "他の医療機関への紹介や検査の委託など、診療上必要な範囲での情報提供を行う場合があります。ご希望されない場合はお申し出ください。",
    ],
  },
  {
    heading: "5. 安全管理",
    paragraphs: [
      "個人情報への不正アクセス、紛失、漏えい等を防止するため、適切な安全管理措置を講じます。",
    ],
  },
  {
    heading: "6. 開示・訂正・利用停止",
    paragraphs: [
      "ご本人からの個人情報の開示・訂正・利用停止等のお申し出には、法令に基づき適切に対応いたします。ご来院時、またはお電話にてお申し出ください。",
    ],
  },
  {
    heading: "7. 本ポリシーの改定",
    paragraphs: [
      "本ポリシーの内容は、法令の改正や運用の見直しに応じて変更することがあります。変更後の内容は当ページに掲載した時点から適用されます。",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Page Header */}
      <section className="bg-clinic-subtle/50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-clinic-blue mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-clinic-green font-medium tracking-widest text-sm">
            PRIVACY POLICY
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-clinic-subtle/50 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-xl text-clinic-blue mb-3">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.paragraphs.map((text, idx) => (
                  <p
                    key={idx}
                    className="text-clinic-text/80 text-sm leading-relaxed"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <p className="text-clinic-text/60 text-xs pt-4 border-t border-clinic-subtle/50">
            制定日：2026年4月1日<br />
            廣瀬診療所
          </p>
        </div>
      </div>
    </div>
  );
}

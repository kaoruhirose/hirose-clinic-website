import { EditorialSection, PageIntro, TextLink } from "@/components/Editorial";
import ReservationLink from "@/components/ReservationLink";
import { site, phoneDisplay } from "@/lib/site";

const benefits = [
  {
    title: "通院の負担を減らす",
    description: "診療所まで移動せずに受診できるため、遠くにお住まいの方や、通院が負担になる方にもご利用いただけます。",
  },
  {
    title: "慣れた場所から",
    description: "落ち着ける場所で、日々の不調や気になることを、ご自身の言葉でお話しいただけます。",
  },
  {
    title: "外出を控えたいときに",
    description: "通院のための外出や、待合室で人と接する機会を減らせます。",
  },
];

const steps = [
  {
    title: "予約",
    description: site.lineUrl
      ? "診療開始後のご予約については、廣瀬診療所の公式LINEからご案内します。"
      : "診療開始後のご予約については、お電話でお問い合わせください。",
  },
  { title: "準備", description: "予約時間に、静かな場所でお待ちください。" },
  { title: "診察", description: "ビデオ通話にて医師が診察を行います。" },
  { title: "会計", description: "クレジットカード等でのオンライン決済です。" },
  { title: "お薬", description: "処方箋をご指定の住所へ郵送、またはお近くの薬局へお送りします。" },
];

const questions = [
  {
    question: "初診でもオンライン診療は可能ですか？",
    answer: "診療開始後は、初診の方もご利用いただける予定です。ただし、症状によっては対面での診察が必要と判断される場合があります。",
  },
  {
    question: "費用はどのくらいかかりますか？",
    answer: "通常の診察料に加え、システム利用料（事務手数料）が必要となります。詳細は予約時にご確認ください。",
  },
  {
    question: "どんな環境が必要ですか？",
    answer: "安定したインターネット環境と、スマートフォンやPC、タブレットが必要です。専用アプリのインストールをお願いする場合がございます。",
  },
  {
    question: "処方箋はどのようにもらえますか？",
    answer: "ご指定の住所への郵送、または指定された調剤薬局へのFAX送信が可能です。生活スタイルに合わせて選択いただけます。",
  },
];

export default function OnlineConsultation() {
  return (
    <div className="page-shell">
      <div className="container">
        <PageIntro eyebrow="オンライン診療" title={<>いつもの場所で、<br />診療の時間を。</>} english="Across the distance, a space to be heard.">
          <p>
            いつもの場所から、からだのことを話す時間を。
            西洋医学と漢方、ふたつの視点を大切にしたオンライン診療を準備しています。
          </p>
          <p>オンライン診療は現在、システム構築中です。準備が整い次第、開始時期やご利用方法をご案内します。</p>
        </PageIntro>

        <EditorialSection label="診療について" title={<><span className="text-unit">くつろげる</span><span className="text-unit">場所から、</span><br /><span className="text-unit">お話しする時間。</span></>}>
          <ul className="rule-list">
            {benefits.map((benefit) => (
              <li key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </li>
            ))}
          </ul>
        </EditorialSection>

        <EditorialSection label="開始後のご利用の流れ（予定）" title={<>ご予約から、<br />お薬まで。</>}>
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
          <p>
            <ReservationLink className="text-link">
              オンライン診療のお問い合わせ方法
            </ReservationLink>
          </p>
          <p className="quiet-note">
            {site.lineUrl
              ? "公式LINEの友だち追加・お問い合わせの案内へ移動します。"
              : "ご予約方法とお電話のご案内ページへ移動します。"}
          </p>
        </EditorialSection>

        <EditorialSection label="ご確認事項" title={<>受診の前に、<br />ご確認ください。</>}>
          <dl className="detail-list detail-list--questions">
            {questions.map((item) => (
              <div key={item.question}>
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </EditorialSection>

        <EditorialSection label="お問い合わせ" title="お電話でのご相談">
          <div className="prose">
            <p>
              操作方法や、症状がオンライン診療に適しているかなど、
              ご不明な点はお電話でご相談ください。
            </p>
            <p>
              {site.phone ? (
                <TextLink href={`tel:${site.phone}`}>{phoneDisplay}</TextLink>
              ) : (
                phoneDisplay
              )}
            </p>
            <p className="quiet-note">電話受付時間　9:00〜18:00</p>
          </div>
        </EditorialSection>
      </div>
    </div>
  );
}

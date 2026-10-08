import { EditorialSection, PageIntro, TextLink } from "@/components/Editorial";
import ReservationLink from "@/components/ReservationLink";
import { site, phoneDisplay } from "@/lib/site";

const benefits = [
  {
    title: "通院・待ち時間の解消",
    description: "移動時間や待合室での待ち時間がなくなり、お忙しい方や体調が優れない方でもスムーズに受診できます。",
  },
  {
    title: "リラックスした環境",
    description: "ご自宅など、ご自身が最もリラックスできる環境でお話しいただけるため、些細な悩みも相談しやすくなります。",
  },
  {
    title: "感染症リスクの低減",
    description: "外出を控えることで、他の感染症に罹患するリスクを抑えることができ、二次感染の防止にも繋がります。",
  },
];

const steps = [
  {
    title: "予約",
    description: site.reservationUrl
      ? "アプリまたはWebから日時を選択して予約します。"
      : "WEB予約のご案内は現在準備中です。ご予約についてはお電話でお問い合わせください。",
  },
  { title: "準備", description: "予約時間に、静かな場所でお待ちください。" },
  { title: "診察", description: "ビデオ通話にて医師が診察を行います。" },
  { title: "会計", description: "クレジットカード等でのオンライン決済です。" },
  { title: "お薬", description: "処方箋をご自宅へ郵送、またはお近くの薬局へお送りします。" },
];

const questions = [
  {
    question: "初診でもオンライン診療は可能ですか？",
    answer: "はい、可能です。ただし、症状によっては対面での診察が必要と判断される場合があります。",
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
    answer: "ご自宅への郵送、または指定された調剤薬局へのFAX送信が可能です。生活スタイルに合わせて選択いただけます。",
  },
];

export default function OnlineConsultation() {
  return (
    <div className="page-shell">
      <div className="container">
        <PageIntro eyebrow="オンライン診療" title={<>いつもの場所で、<br />診療の時間を。</>}>
          <p>
            移動の負担を減らし、いつもの環境でリラックスして受診いただけます。
            西洋医学と東洋医学の知見を、オンラインでも丁寧にお届けします。
          </p>
        </PageIntro>

        <EditorialSection label="診療について" title={<>ご自宅から、<br />お話しする時間。</>}>
          <ul className="rule-list">
            {benefits.map((benefit) => (
              <li key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </li>
            ))}
          </ul>
        </EditorialSection>

        <EditorialSection label="ご利用の流れ" title={<>ご予約から、<br />お薬まで。</>}>
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
              {site.reservationUrl ? "オンライン診療を予約する" : "ご予約方法・お問い合わせ"}
            </ReservationLink>
          </p>
          <p className="quiet-note">
            {site.reservationUrl
              ? "外部の予約システムへ移動します。"
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
              操作方法や、ご自身の症状がオンライン診療に適しているかなど、
              不明な点がございましたらお気軽にお電話ください。
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

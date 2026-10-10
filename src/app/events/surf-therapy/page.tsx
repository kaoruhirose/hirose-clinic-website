import type { Metadata, ResolvingMetadata } from "next";
import { PageIntro, TextLink } from "@/components/Editorial";
import { site } from "@/lib/site";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = "海と波とサーフセラピー｜廣瀬診療所";
  const description = "サーフィン歴30年以上の医師（救急医）と一緒に海に入る、90分の自然処方プログラム。波と触れあいながら心と身体をゆるめる時間を、初めての方も少人数で体験できます。料金・初回の流れ・持ち物をご案内します。";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/events/surf-therapy",
      siteName: "廣瀬診療所",
      locale: "ja_JP",
      type: "website",
      images: (await parent).openGraph?.images ?? [],
    },
  };
}

export default function SurfTherapy() {
  return (
    <div className="page-shell">
      <div className="container">
        <TextLink href="/events">フィールドワーク一覧へ戻る</TextLink>
        <PageIntro
          eyebrow="フィールドワーク ／ 自然処方"
          title={<><span className="text-unit">海と波と</span><span className="text-unit">サーフセラピー</span></>}
          english="Meet the sea and the waves."
        >
          <p>波と触れあいながら、心と身体をゆるめる時間。廣瀬診療所の自然処方プログラムです。</p>
        </PageIntro>
        <div className="fieldwork-detail prose">
          <article className="event-article">
            <p>サーフィン歴30年以上の医師（救急医）と一緒に海に入る、90分の体験プログラムです。</p>
            <p>上手に波に乗ることを目指すのではなく、海や波を感じながら、自分のペースで過ごします。サーフィンが初めての方も歓迎します。</p>

            <dl className="detail-list">
              <div><dt>所要時間</dt><dd>90分</dd></div>
              <div><dt>定員</dt><dd>1〜3名（少人数制）</dd></div>
              <div><dt>開催場所</dt><dd>材木座海岸・由比ヶ浜海岸などを検討しています。開催日時・集合場所は、お問い合わせの際に個別にご案内します。</dd></div>
            </dl>

            <section className="event-part">
              <h2>初回の流れ（90分）</h2>
              <ol className="steps">
                <li><strong className="event-step-title">はじめの15分</strong>体調を確認し、浜辺で呼吸を整えます。</li>
                <li><strong className="event-step-title">次の60分</strong>海に入り、波と触れあいます。経験や体調に合わせて、無理のないペースで進めます。</li>
                <li><strong className="event-step-title">おわりの15分</strong>クールダウンをして、体験をふりかえります。</li>
              </ol>
              <p>2回目以降は、ご経験やご希望、その日の体調に合わせて、プログラムの内容を個別に調整します。</p>
            </section>

            <section className="event-part">
              <h2>参加費</h2>
              <p>料金はすべて税込、1人あたりの金額です。</p>
              <div className="schedule-wrap">
                <table className="schedule-table whitespace-nowrap">
                  <caption className="sr-only">サーフセラピー90分の参加費（税込・1人あたり）</caption>
                  <thead><tr><th scope="col">人数</th><th scope="col">初めての方</th><th scope="col">2回目以降</th></tr></thead>
                  <tbody>
                    <tr><th scope="row">1名</th><td>7,700円/人</td><td>5,500円/人</td></tr>
                    <tr><th scope="row">2名（ペア割）</th><td>7,150円/人</td><td>4,950円/人</td></tr>
                    <tr><th scope="row">3名（グループ割）</th><td>6,600円/人</td><td>4,400円/人</td></tr>
                  </tbody>
                </table>
              </div>
              <ul className="rule-list">
                <li>初めての方の料金には、サーフボードのレンタル代が含まれます。</li>
                <li>2回目以降のボードレンタルは、1枚につき1,650円です。ご自身のボードをお持ちいただく場合、レンタル代はかかりません。</li>
              </ul>
              <h3>延長について</h3>
              <p>ご希望に応じて、15分ごとに延長できます。延長料金は1組につき15分1,650円（税込）、体験時間は最長120分までです。</p>
            </section>

            <section className="event-part">
              <h2>持ち物・服装</h2>
              <ul className="rule-list">
                <li>水着・タオル・飲み物をお持ちください。</li>
                <li>夏季はウェットスーツなしでご参加いただけます。お持ちの方はご持参ください。</li>
                <li>ウェットスーツのレンタルは1着1,650円です（参加費とは別料金）。ご希望の方は、お申し込み時にご相談ください。</li>
              </ul>
            </section>

            <section className="event-part">
              <h2>参加前の健康チェック</h2>
              <p>事前に簡単な健康チェック票をご記入いただき、医師が内容を確認します。運動や体調に不安のある方も、まずはご相談ください。</p>
            </section>

            <section className="event-part">
              <h2>波・天候による中止について</h2>
              <p>波や天候の状況により中止する場合は、追加料金なしで別の日程へ振り替えます。</p>
            </section>

            <section className="event-part">
              <h2>お申し込み・お問い合わせ</h2>
              <p>参加をご希望の方は、お気軽にお問い合わせください。開催日時・集合場所を個別にご案内します。ご質問だけでも歓迎します。</p>
              {site.lineUrl && <TextLink href={site.lineUrl} external>公式LINEで相談する</TextLink>}
            </section>
          </article>
        </div>
        <TextLink href="/events">フィールドワーク一覧へ戻る</TextLink>
      </div>
    </div>
  );
}

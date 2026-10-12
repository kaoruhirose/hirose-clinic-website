import LineText from "@/components/LineText";
import Image from "next/image";
import { EditorialSection, PageIntro } from "@/components/Editorial";
import ReservationLink from "@/components/ReservationLink";
import room from "../../../public/images/clinic/room.webp";

export default function Services() {
  return (
    <div className="page-shell">
      <div className="container">
        <PageIntro title="診療案内" english="Care, in step with the rhythm of your days.">
          <p>
            症状や体質、日々の暮らしを伺いながら、診療をご提案します。診療内容により、保険診療または自由診療（自費診療）となります。
          </p>
        </PageIntro>
      </div>

      <figure className="wide-photo"><Image src={room} alt="診療所の室内。大きな窓の向こうに、緑と海が広がる" sizes="100vw" quality={90} /></figure>

      <div className="container">
        <EditorialSection id="general" title="総合内科・救急対応" note="保険診療">
          <p>
            風邪、発熱、腹痛などの急な不調から、高血圧、脂質異常症、糖尿病などの生活習慣病の管理まで、幅広く対応します。
          </p>
          <p>
            救急科専門医としての経験をもとに、怪我の処置（縫合等）や初期対応も行います。治療の緊急性や、専門的な医療機関への受診が必要かを判断します。「こんなことで受診してよいのかな」と迷うときも、まずはご相談ください。
          </p>
        </EditorialSection>

        <EditorialSection id="kampo" title="漢方専門外来" note="自由診療（自費診療）">
          <p>
            検査で異常が見つからなくても、調子がすぐれない。疲れや冷えが続く。女性特有の不調がある。こうしたお悩みを伺い、漢方の視点から体質やからだの状態を見つめます。
          </p>
          <p>
            漢方専門医が脈と舌と腹部を診察し、生活習慣や体質についても丁寧にお話を伺います。そのうえで、漢方医学の「証」（からだの状態をとらえる見立て）にもとづいて、煎じ薬またはエキス剤を処方します。
          </p>
        </EditorialSection>

        <EditorialSection id="lifestyle" title="ライフスタイル相談" note="自由診療（自費診療）">
          <p>
            薬との付き合い方を見直したい、ストレスをため込まずに過ごしたい、自然を暮らしに取り入れたい。そうしたご希望を伺いながら、毎日の習慣を一緒に見直していく相談です。
          </p>
          <p>
            食事や睡眠を振り返り、瞑想やヨガなど、ご自宅でも続けられる方法をご案内します。ご自身にも環境にもやさしい暮らし方を、ご自分のペースで探していきましょう。
          </p>
        </EditorialSection>

        <EditorialSection title="ご予約・ご相談">
          <p><LineText>診療のご予約・ご相談は、廣瀬診療所の公式LINEからお問い合わせください。</LineText></p>
          <ReservationLink className="text-link">ご予約・ご相談の方法はこちら<span aria-hidden="true">→</span></ReservationLink>
        </EditorialSection>
      </div>
    </div>
  );
}

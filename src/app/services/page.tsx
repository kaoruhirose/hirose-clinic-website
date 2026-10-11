import { EditorialSection, PageIntro } from "@/components/Editorial";
import ReservationLink from "@/components/ReservationLink";

export default function Services() {
  return (
    <div className="page-shell">
      <div className="container">
        <PageIntro title="診療案内" english="Care, in step with the rhythm of your days.">
          <p>
            保険診療と自費診療（自由診療）を組み合わせながら、症状や体質、日々の暮らしに合わせた診療をご提案します。
          </p>
        </PageIntro>

        <EditorialSection id="general" title="一般内科・救急対応">
          <p className="quiet-note">保険診療の範囲</p>
          <p>
            風邪、発熱、腹痛などの急な不調から、高血圧、脂質異常症、糖尿病などの生活習慣病の管理まで、幅広く対応します。
          </p>
          <p>
            救急専門医としての経験をもとに、怪我の処置（縫合等）や初期対応も行います。治療の緊急性や、専門的な医療機関への受診が必要かを判断します。「こんなことで受診してよいのかな」と迷うときも、まずはご相談ください。
          </p>
        </EditorialSection>

        <EditorialSection id="kampo" title="漢方専門外来">
          <p className="quiet-note">保険診療・自費診療（処方内容による）</p>
          <p>
            検査で異常が見つからなくても、調子がすぐれない。疲れや冷えが続く。女性特有の不調がある。こうしたお悩みを伺い、漢方の視点から体質やからだの状態を見つめます。
          </p>
          <p>
            漢方専門医が、脈や舌の状態に加え、生活習慣や体質を丁寧に伺います。漢方医学の「証」（からだの状態を捉える見立て）に基づき、煎じ薬またはエキス剤を処方します。症状と、その背景にあるからだの状態をあわせて考えます。
          </p>
        </EditorialSection>

        <EditorialSection id="lifestyle" title="ライフスタイル相談">
          <p className="quiet-note">自費診療（カウンセリング・プログラム）</p>
          <p>
            薬との付き合い方を見直したい。ストレスとうまく付き合いたい。自然とのつながりを暮らしに取り入れたい。そんな思いを、日々の習慣から一緒に考える相談です。
          </p>
          <p>
            食事や睡眠を振り返り、メディテーション（瞑想）やヨガなど、ご自身で取り入れられる方法をご案内します。あなたのペースで、無理なく続けられることを。ご自身にも環境にもやさしい暮らし方を、一緒に探していきます。
          </p>
        </EditorialSection>

        <EditorialSection title="ご予約・ご相談">
          <p>診療のご予約・ご相談は、廣瀬診療所の公式LINEからお問い合わせください。</p>
          <ReservationLink className="text-link">ご予約・ご相談の方法はこちら</ReservationLink>
        </EditorialSection>
      </div>
    </div>
  );
}

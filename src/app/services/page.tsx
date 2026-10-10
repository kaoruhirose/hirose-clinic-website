import { EditorialSection, PageIntro } from "@/components/Editorial";
import ReservationLink from "@/components/ReservationLink";

export default function Services() {
  return (
    <div className="page-shell">
      <div className="container">
        <PageIntro title="診療案内" english="Care shaped around your everyday life.">
          <p>
            廣瀬診療所では、保険診療による確実なアプローチと、自費診療（自由診療）による柔軟なアプローチを組み合わせ、お一人おひとりに最適なケアをご提案します。
          </p>
        </PageIntro>

        <EditorialSection id="general" title="一般内科・救急対応">
          <p className="quiet-note">保険診療の範囲</p>
          <p>
            風邪、発熱、腹痛などの急性症状から、高血圧、脂質異常症、糖尿病などの生活習慣病の管理まで、幅広く対応いたします。
          </p>
          <p>
            また、救急専門医としての経験を活かし、怪我の処置（縫合等）や、より高度な医療機関での治療が必要かどうかの迅速なトリアージ・初期対応も行います。「こんなことで受診して良いのかな？」と迷う場合も、まずはご相談ください。
          </p>
        </EditorialSection>

        <EditorialSection id="kampo" title="漢方専門外来">
          <p className="quiet-note">保険診療・自費診療（処方内容による）</p>
          <p>
            西洋医学的な検査では異常が見つからない「未病」の状態や、慢性的な疲労、冷え、女性特有のお悩みに対して、漢方薬を用いた体質改善を目指します。
          </p>
          <p>
            漢方専門医が、脈や舌の所見はもちろん、生活習慣や体質（証）を総合的に見極め、あなたに最も適した生薬のブレンド（煎じ薬またはエキス剤）を処方します。症状を長引かせている根本原因にアプローチします。
          </p>
        </EditorialSection>

        <EditorialSection id="lifestyle" title="ライフスタイル相談">
          <p className="quiet-note">自費診療（カウンセリング・プログラム）</p>
          <p>
            「薬を手放したい」「ストレスと上手く付き合いたい」「より自然に調和した生き方にシフトしたい」という方に向けた、総合的なヘルスケアコンサルティングです。
          </p>
          <p>
            食事や睡眠のレビュー、メディテーションの習慣化サポート、ヨガ等のセルフケアスキルの指導を通して、ご自身の力で健やかさを維持できるよう伴走します。環境への配慮も含めた、エシカルでサステナブルな健康づくりを一緒に考えましょう。
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

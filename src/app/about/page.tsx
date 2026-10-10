import { EditorialSection, PageIntro, Photo, TextLink } from "@/components/Editorial";
import { photos } from "@/lib/photos";

export default function About() {
  return (
    <div className="page-shell">
      <div className="container">
        <PageIntro title="私たちの想い" />

        <Photo photo={photos.clinic} />

        <EditorialSection title={<>なぜ、逗子で<br />開院したのか</>}>
          <p>
            救急医療の最前線で命と向き合い続けるなかで、「病気になってから治す」ことの限界を感じるようになりました。ストレスや環境の変化が引き起こす不調を、もっと手前で防ぐことはできないのか——。
          </p>
          <p>
            その答えを探して東洋医学（漢方）を学び、人を臓器や検査値ではなく「全体」として捉えることの大切さに気づきました。自然の営みと人のからだは、深くつながっています。
          </p>
          <p>
            晴れた夕暮れに、高台にある診療所の窓辺からは、富士山と江ノ島が海の向こうに浮かびます。海と山に抱かれたこの逗子・桜山の地で、大きな病院ではなく、暮らしの延長にある「港」のような場所をつくりたい。それが、この地に診療所を開いた理由です。
          </p>
        </EditorialSection>

        <EditorialSection label="代表 / 医師" title="廣瀬 薫">
          <Photo photo={photos.portrait} />
          <h3>略歴</h3>
          <ul className="rule-list">
            <li>国立大学法人宮崎大学 医学部医学科 卒業</li>
            <li>湘南鎌倉総合病院 救急総合診療科 チーフレジデント 修了</li>
            <li>湘南鎌倉総合病院 救命救急センター 医員</li>
            <li>葉山ハートセンター 救急総合診療科 部長</li>
          </ul>
          <h3>資格</h3>
          <ul className="rule-list">
            <li>日本救急医学会認定 救急科専門医</li>
            <li>日本東洋医学会認定 漢方専門医</li>
            <li>全米ヨガアライアンス認定インストラクター（RYT200）</li>
          </ul>
          <h3>ごあいさつ</h3>
          <p>
            「なんとなく調子が悪い」「病院に行くべきか迷っている」——そんなときこそ、どうぞ気軽に扉を叩いてください。
          </p>
          <p>
            西洋医学の客観的な診断と、東洋医学による体質からの見立て、そして無理のないライフスタイルの提案。この3つを行き来しながら、あなたが自分の力で健やかさを取り戻していく道のりに、伴走いたします。
          </p>
        </EditorialSection>

        <EditorialSection id="yoga" title={<>ヨガと<br />メディテーション</>}>
          <h3>自然とつながり、自らを整える</h3>
          <p>
            当診療所では、治療という枠を超えた「予防医学」の実践として、ヨガとメディテーションの指導・ワークショップを行っています。
          </p>
          <p>
            ヨガインストラクター（全米ヨガアライアンスRYT200）の資格を持つ代表が、心身の緊張をほどく呼吸法から、逗子の海と山を感じるフィールドワークまでをご案内します。薬に頼りきるのではなく、自分自身の力で「巡り」を良くしていく——その最初の一歩を、ここから始めてみませんか。
          </p>
          <TextLink href="/events">イベントのご案内</TextLink>
        </EditorialSection>
      </div>
    </div>
  );
}

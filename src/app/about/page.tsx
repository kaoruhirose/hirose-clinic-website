import { EditorialSection, PageIntro, Photo, TextLink } from "@/components/Editorial";
import { photos } from "@/lib/photos";

export default function About() {
  return (
    <div className="page-shell about-page">
      <div className="container">
        <PageIntro title="私たちの想い" english="Listening for the stories the body holds.">
          <div className="clinic-philosophy">
            <div className="clinic-philosophy-copy">
              <p><span className="text-unit">からだと、暮らす土地は、</span><span className="text-unit">ひとつながり。</span></p>
              <p><span className="text-unit">海を渡る風、</span><span className="text-unit">足もとの土、</span><span className="text-unit">季節の移ろい。</span><br /><span className="text-unit">からだもまた、</span><span className="text-unit">その営みのなかにあります。</span></p>
            </div>
            <p className="clinic-philosophy-title">身土不二</p>
          </div>
        </PageIntro>

        <Photo photo={photos.clinic} />

        <EditorialSection title={<>なぜ、逗子で<br />開院したのか</>}>
          <p>
            救急医療の最前線で命と向き合うなかで、不調の背景にある日々の暮らしにも目を向けたいと考えるようになりました。からだが大きく調子を崩す前に、できることはないか。その問いが、今の診療につながっています。
          </p>
          <p>
            その問いをたどり、東洋医学（漢方）を学びました。臓器や検査値に加えて、体質や暮らし、心の状態まで見渡すこと。季節や環境とともに変わるからだに、耳を澄ませること。診療で大切にしている視点です。
          </p>
          <p>
            晴れた夕暮れに、高台にある診療所の窓辺からは、富士山と江ノ島が海の向こうに浮かびます。海と山のあいだ、この逗子・桜山で、日々の暮らしに近い診療を営みたい。ひと息ついて、からだのことを話せる「港」のような場所を思い描きました。
          </p>
        </EditorialSection>

        <EditorialSection label="代表 / 医師" title="廣瀬 薫" english="KAORU HIROSE, M.D.">
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
            「なんとなく調子が悪い」「病院に行くべきか迷っている」。そんな小さな迷いも、どうぞお聞かせください。
          </p>
          <p>
            西洋医学による診断、漢方からの見立て、日々の暮らしの工夫。いくつかの視点を重ねながら、あなたに合う道筋を一緒に考えていきます。無理なく続けられることを、少しずつ。
          </p>
        </EditorialSection>

        <EditorialSection id="yoga" title={<>ヨガと<br />メディテーション</>}>
          <h3>呼吸から、自分に立ち返る</h3>
          <p>
            診療に加えて、日々のからだに目を向ける時間として、ヨガとメディテーション（瞑想）の指導・ワークショップを行っています。
          </p>
          <p>
            ヨガインストラクター（全米ヨガアライアンスRYT200）の資格を持つ代表が、呼吸に意識を向ける時間から、逗子の海と山を感じるフィールドワークまでをご案内します。息をすること、からだを動かすこと、自然にふれること。身近な営みから、ご自身をいたわる習慣を見つけていきます。
          </p>
          <TextLink href="/events">イベントのご案内</TextLink>
        </EditorialSection>
      </div>
    </div>
  );
}

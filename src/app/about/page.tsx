import { EditorialSection, PageIntro, Photo, TextLink } from "@/components/Editorial";
import { photos } from "@/lib/photos";

export default function About() {
  return (
    <div className="page-shell about-page">
      <div className="container">
        <PageIntro title="大切にしていること" english="Listening for the stories the body holds.">
          <div className="clinic-philosophy">
            <div className="clinic-philosophy-copy">
              <p><span className="text-unit">からだと、暮らす土地は、</span><span className="text-unit">ひとつながり。</span></p>
              <p><span className="text-unit">海を渡る風、</span><span className="text-unit">足もとの土、</span><span className="text-unit">季節の移ろい。</span><br /><span className="text-unit">からだもまた、</span><span className="text-unit">その営みのなかにあります。</span></p>
            </div>
            <p className="clinic-philosophy-title">身土不二</p>
          </div>
        </PageIntro>

        <Photo photo={photos.clinic} />

        <EditorialSection title="この土地と生きる">
          <p>
            救急医療の現場で多くの患者さんと向き合うなかで、不調の背景にある毎日の暮らしにも目を向けたいと考えるようになりました。大きく体調を崩す前に、医師としてできることはないか。それが、いまの診療の出発点です。
          </p>
          <p>
            その答えを探して、漢方（東洋医学）を学びました。検査の数値だけでなく、体質や暮らしぶり、心の状態までを見渡し、季節や環境とともに移り変わるからだの声に耳を傾ける。いまの診療で、何より大切にしていることです。
          </p>
          <p>
            晴れた日の夕暮れ、高台にある診療所の窓からは、海の向こうに富士山と江ノ島が浮かびます。海と山にはさまれたこの逗子・桜山で、ひと息ついてからだのことを話せる「港」のような場所をつくりたい。そう考えて、ここに診療所を開きました。
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
            「なんとなく調子が悪い」「病院に行くほどなのか迷っている」。そんなときも、どうぞ気軽にご相談ください。
          </p>
          <p>
            西洋医学による診断に、漢方の見立てと暮らしの工夫を重ねながら、その方に合った治療や養生の方法を一緒に考えます。無理なく続けられることから、少しずつ始めていきましょう。
          </p>
        </EditorialSection>

        <EditorialSection id="yoga" title="ヨガと瞑想" english="Yoga & Meditation">
          <h3>呼吸から、自分に立ち返る</h3>
          <p>
            診療とは別に、ヨガと瞑想の指導やワークショップも行っています。
          </p>
          <p>
            呼吸に意識を向けるクラスから、逗子の海と山を歩くフィールドワークまで、ヨガインストラクターの資格をもつ代表がご案内します。息をする、からだを動かす、自然にふれる。身近なことから、自分をいたわる習慣を見つけていきましょう。
          </p>
          <TextLink href="/events">フィールドワークのご案内</TextLink>
        </EditorialSection>
      </div>
    </div>
  );
}

import Image from "next/image";
import { EditorialSection, PageIntro, Photo, TextLink } from "@/components/Editorial";
import { photos } from "@/lib/photos";
import fujiDawn from "../../../public/images/clinic/fuji-dawn.webp";

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

        <EditorialSection id="grounding" title="この土地と生きる" english="Grounding in the rhythms of nature">
          <p>
            救急医療の現場で多くの患者さんと向き合うなかで、不調の背景にある毎日の暮らしにも目を向けたいと考えるようになりました。大きく体調を崩す前に、医師としてできることはないか。それが、いまの診療の出発点です。
          </p>
          <p>
            その答えを探して、漢方（東洋医学）を学びました。検査の数値だけでなく、体質や暮らしぶり、心の状態までを見渡し、季節や環境とともに移り変わるからだの声に耳を傾ける。いまの診療で、何より大切にしていることです。
          </p>
          <p>
            晴れた日には、高台の診療所から、海の向こうに富士山と江ノ島が浮かんで見えます。海と山にはさまれたこの逗子・桜山で、ひと息ついてからだのことを話せる「港」のような場所をつくりたい。そう考えて、ここに診療所を開きました。
          </p>
          <figure className="fuji-landscape"><Image src={fujiDawn} alt="診療所から望む、朝焼けの富士山と江ノ島" sizes="(max-width: 700px) 100vw, 640px" quality={90} /></figure>
        </EditorialSection>

        <EditorialSection id="prescription" title="自然処方と社会処方" english="Natural & Social prescription">
          <h3>自然と、人とのつながりを処方する</h3>
          <p>
            からだの不調の背景には、季節や環境、人との関わりといった、暮らしそのものがあります。当院では、お薬の処方とあわせて、自然のなかで過ごす時間や、人とつながる機会を「処方」としてご提案しています。
          </p>
          <p>
            自然処方は、海辺を裸足で歩く、波にふれる、土にふれるなど、自然のリズムにからだをゆだねる時間です。社会処方は、地域の集まりやボランティア、畑仕事などを通して、人とのつながりや自分の居場所を見つけていくことです。欧州では、すでに医療のなかに取り入れられている考え方です。
          </p>
          <p>
            人の健康と、地球の健康はひとつながり。どこに暮らす方にとっても、自然にふれる時間と、人とつながる場所は大切なものです。逗子・葉山の海と山へ、そしてこの土地の人の輪へ。この診療所が、その入り口になれたらと考えています。
          </p>
        </EditorialSection>

        <EditorialSection id="planetary-health" title="プラネタリーヘルス" english="Planetary Health">
          <h3>人も地球も、ともに健やかに</h3>
          <p>
            医師として、目の前の方を治すことに力を注いできました。その一方で、サーファーとして海に通ううちに、自然から受け取る恵みの大きさと、自然への畏れを感じるようになりました。海や大地を守り、再生する活動にも参加してきましたが、医療と自然への想いは、どこか別々のものでした。
          </p>
          <p>
            その二つをひとつに結んでくれたのが、プラネタリーヘルスとの出会いでした。プラネタリーヘルスとは、人の健康と、それを支える地球の自然の健康を、ひとつながりのものとして捉える新しい考え方です。人は地球に生かされ、人の営みがまた地球をいきいきとさせる。人も地球もともに健やかな世の中をつくることを、医師としてのライフワークにしたいと考えています。
          </p>
          <p>
            はじめの一歩は、身近な暮らしのなかにあります。日々の選択で、環境への負担が少しでも少ないほうを選んでみる。空や木々、季節の移ろいに目を向けてみる。わずかな時間でも外に出て、自然にふれる。自然から癒やしを受け取る関係を、暮らしのなかで少しずつ深めていきましょう。
          </p>
          <p>
            当院は、一般社団法人プラネタリーヘルスイニシアティブと連携し、この考え方を診療や地域の活動のなかで実践していきます。
          </p>
          <div><TextLink href="https://phi.or.jp/phi/planetary-health/" external>プラネタリーヘルスとは（PHIのサイト）</TextLink></div>
          <div><TextLink href="/events">フィールドワークのご案内</TextLink></div>
          <h3 className="reference-heading">参考リンク</h3>
          <ul className="rule-list reference-list">
            {[
              { href: "https://phi.or.jp/", title: "一般社団法人プラネタリーヘルスイニシアティブ（PHI）", note: "当院が連携している団体です" },
              { href: "https://planetaryhealthalliance.org/", title: "Planetary Health Alliance", note: "プラネタリーヘルスの国際的なネットワーク（英語）" },
              { href: "https://www.env.go.jp/policy/hakusyo/r05/html/hj23010101.html", title: "環境白書 令和5年版「地球の限界（プラネタリー・バウンダリー）」", note: "環境省" },
              { href: "https://www.stockholmresilience.org/research/planetary-boundaries.html", title: "Planetary boundaries", note: "ストックホルム・レジリエンス・センター（英語）" },
            ].map(link => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">{link.title}<span aria-hidden="true"> ↗</span></a>
                <br /><span className="quiet-note">{link.note}</span>
              </li>
            ))}
          </ul>
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
      </div>
    </div>
  );
}

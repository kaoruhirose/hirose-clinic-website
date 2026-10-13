import LineText from "@/components/LineText";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import fujiDusk from "../../public/images/clinic/fuji-dusk.webp";

export default function Footer() {
  const copyright = `© ${new Date().getFullYear()} HIROSESHINRYOJO All rights reserved.`;
  return (
    <>
    <footer className="site-footer">
      {/* 診療所から見える夕暮れの富士山を背景に、文字を重ねる */}
      <Image src={fujiDusk} alt="" fill sizes="(max-width: 700px) 140vw, 100vw" quality={90} className="footer-photo" />
      <div className="container">
        <div className="footer-main">
          <div><Link href="/" className="footer-brand">廣瀬診療所</Link><p className="footer-latin">HIROSESHINRYOJO</p><p className="footer-address">〒{site.postalCode}<br />{site.address}<br /><span><LineText>詳しい住所は、ご予約の確定後に公式LINEでお知らせします。</LineText></span></p></div>
          <nav aria-label="フッターメニュー"><Link href="/about">診療所について</Link><Link href="/services">診療案内</Link><Link href="/online-consultation">オンライン診療</Link><Link href="/events">フィールドワーク</Link><Link href="/access">ご予約・アクセス</Link><Link href="/news">お知らせ</Link></nav>
        </div>
        <div className="footer-bottom">
          <Link href="/privacy" className="footer-privacy">Privacy Policy</Link>
          <small className="footer-copyright">{copyright}</small>
        </div>
      </div>
    </footer>
    {/* PCでは権利表記を画面の右下に縦書きで置く（フッター内の表記はPCでは隠す） */}
    <small className="site-copyright">{copyright}</small>
    </>
  );
}

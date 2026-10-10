import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div><Link href="/" className="footer-brand">廣瀬診療所</Link><p className="footer-latin">HIROSESHINRYOJO</p><p className="footer-address">〒{site.postalCode}<br />{site.address}<br /><span>詳しい所在地は、ご予約時にお伝えします。</span></p></div>
          <nav aria-label="フッターメニュー"><Link href="/about">診療所について</Link><Link href="/services">診療案内</Link><Link href="/online-consultation">オンライン診療</Link><Link href="/events">フィールドワーク</Link><Link href="/access">ご予約・アクセス</Link><Link href="/news">お知らせ</Link></nav>
        </div>
        <div className="footer-bottom"><small>© {new Date().getFullYear()} HIROSESHINRYOJO</small><Link href="/privacy">プライバシーポリシー</Link><a href="#main-content">ページの上へ ↑</a></div>
        {site.instagramUrl && (
          <div className="footer-social">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram（@hiroseshinryojo・新しいタブで開く）">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}

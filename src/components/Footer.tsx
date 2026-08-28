import Link from "next/link";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-clinic-subtle/30 border-t border-clinic-subtle mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-2xl font-medium tracking-wider text-clinic-blue inline-block mb-4">
              廣瀬診療所
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              富士山と江ノ島を望む逗子・桜山の高台で、救急医療で培った西洋医学の確かさと、漢方が導く東洋医学の深さから心とからだを整える、完全予約制のプライベート診療所です。
            </p>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-5 h-5 text-clinic-green shrink-0" />
              <p>{site.address}<br /><span className="text-xs text-gray-500">※詳細な番地はご予約時にお伝えします</span></p>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-clinic-blue">診療案内</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services#general" className="hover:text-clinic-green transition-colors">一般内科・救急対応</Link></li>
              <li><Link href="/services#kampo" className="hover:text-clinic-green transition-colors">漢方専門外来</Link></li>
              <li><Link href="/online-consultation" className="hover:text-clinic-green transition-colors text-clinic-green font-medium">オンライン診療</Link></li>
              <li><Link href="/services#lifestyle" className="hover:text-clinic-green transition-colors">ライフスタイル相談</Link></li>
              <li><Link href="/about#yoga" className="hover:text-clinic-green transition-colors">ヨガ・メディテーション</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-clinic-blue">クリニック情報</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-clinic-green transition-colors">代表紹介</Link></li>
              <li><Link href="/access" className="hover:text-clinic-green transition-colors">アクセス</Link></li>
              <li><Link href="/events" className="hover:text-clinic-green transition-colors">イベント</Link></li>
              <li><Link href="/news" className="hover:text-clinic-green transition-colors">お知らせ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-clinic-subtle/50 flex flex-col items-center gap-6 text-sm text-gray-500">
          {/* Instagram（シンボルマークを最下段中央に配置。URLは site.ts で管理） */}
          {site.instagramUrl && (
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram（@hiroseshinryojo）"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-clinic-blue shadow-sm hover:text-white hover:bg-clinic-blue transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          )}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <p>&copy; {new Date().getFullYear()} Hirose Shinryojo. All rights reserved.</p>
            <Link href="/privacy" className="hover:text-clinic-blue transition-colors">プライバシーポリシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

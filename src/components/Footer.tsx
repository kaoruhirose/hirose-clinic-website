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
              「救急専門医の確かな技術」×「漢方専門医の全体観」。逗子の自然と調和する、あなたのための総合診療窓口です。
            </p>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-5 h-5 text-clinic-green shrink-0" />
              <p>神奈川県逗子市〇〇 1-2-3<br /><span className="text-xs text-gray-500">※詳細な住所はご予約時にお伝えします</span></p>
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
            <ul className="space-y-3 text-sm mb-6">
              <li><Link href="/about" className="hover:text-clinic-green transition-colors">代表紹介</Link></li>
              <li><Link href="/access" className="hover:text-clinic-green transition-colors">アクセス</Link></li>
              <li><Link href="/news" className="hover:text-clinic-green transition-colors">お知らせ</Link></li>
            </ul>
            {/* InstagramのURLが確定するまでは表示しない（site.ts で設定） */}
            {site.instagramUrl && (
              <div className="flex gap-4">
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-white rounded-full text-clinic-blue hover:text-white hover:bg-clinic-blue transition-colors shadow-sm text-sm font-medium"
                >
                  Instagram
                </a>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-clinic-subtle/50 text-center md:text-left md:flex md:justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hirose Clinic. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-clinic-blue transition-colors">プライバシーポリシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

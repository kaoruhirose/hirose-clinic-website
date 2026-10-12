import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TEXT_SIZE_KEY } from "@/lib/textSize";

// 文字サイズ「大」を選んだ端末では、表示前に反映してちらつきを防ぐ。
// next/script（beforeInteractive）は本番ではNext.jsの読み込み後に実行されるため、<head>に直接書く。
// （開発時だけ React が「script タグ」の注意を出すが、サーバーで出力した HTML では最初に実行される）
const textSizeScript = `try{if(localStorage.getItem(${JSON.stringify(TEXT_SIZE_KEY)})==="large")document.documentElement.dataset.textSize="large"}catch(e){}`;

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  variable: "--font-clinic-sans",
  subsets: ["latin"], // Note: Google Fonts subset configuration typically uses "latin" or similar even for JP fonts if needed to fetch the CSS sheet properly.
});

const shippori = Shippori_Mincho({
  weight: ["400", "500", "700"],
  variable: "--font-clinic-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiroseshinryojo.jp"),
  title: "廣瀬診療所 | 西洋医学×東洋医学 逗子の自然と調和する診療所",
  description: "神奈川県逗子市にある廣瀬診療所。救急科専門医と漢方専門医の視点から、未病を防ぎ、自然と調和するライフスタイルを提案します。",
  openGraph: {
    title: "廣瀬診療所 | 西洋医学×東洋医学 逗子の自然と調和する診療所",
    description: "神奈川県逗子市にある廣瀬診療所。救急科専門医と漢方専門医の視点から、未病を防ぎ、自然と調和するライフスタイルを提案します。",
    url: "/",
    siteName: "廣瀬診療所",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 3024,
        height: 3251,
        alt: "逗子の海岸から望む富士山と江ノ島の夕景",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      data-scroll-behavior="smooth"
      className={`${zenKaku.variable} ${shippori.variable} antialiased selection:bg-clinic-blue/20 selection:text-clinic-blue`}
      suppressHydrationWarning
    >
      <head>
        <script id="text-size" dangerouslySetInnerHTML={{ __html: textSizeScript }} />
      </head>
      <body className="bg-clinic-base text-clinic-text font-sans min-h-screen flex flex-col scroll-smooth">
        <a className="skip-link" href="#main-content">本文へ移動</a>
        <Header />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

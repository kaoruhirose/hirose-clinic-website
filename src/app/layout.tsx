import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  subsets: ["latin"], // Note: Google Fonts subset configuration typically uses "latin" or similar even for JP fonts if needed to fetch the CSS sheet properly.
});

const shippori = Shippori_Mincho({
  weight: ["400", "500", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiroseshinryojo.jp"),
  title: "廣瀬診療所 | 西洋医学×東洋医学 逗子の自然と調和する診療所",
  description: "神奈川県逗子市にある廣瀬診療所。救急専門医と漢方専門医の視点から、未病を防ぎ、自然と調和するライフスタイルを提案します。",
  openGraph: {
    title: "廣瀬診療所 | 西洋医学×東洋医学 逗子の自然と調和する診療所",
    description: "神奈川県逗子市にある廣瀬診療所。救急専門医と漢方専門医の視点から、未病を防ぎ、自然と調和するライフスタイルを提案します。",
    url: "/",
    siteName: "廣瀬診療所",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1440,
        height: 1548,
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
      className={`${zenKaku.variable} ${shippori.variable} antialiased selection:bg-clinic-blue/20 selection:text-clinic-blue`}
    >
      <body className="bg-clinic-base text-clinic-text font-sans min-h-screen flex flex-col scroll-smooth">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

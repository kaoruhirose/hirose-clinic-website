# A案を全ページへ展開（2026-10-08）

承認: ユーザーがA案を採用し、全体の雰囲気と英字位置比較を依頼。公開・pushは対象外。
判定: 影響範囲+1、金銭/個人情報/不可逆0 = P3。ベースライン lint/build とも成功。
入力見込み80〜160k、出力20〜40k（未較正）。外部有料API追加なし。

共通: 大きな写真、小さめの明朝見出し、紙色、細い罫線、余白。丸いカード・アイコン・影・飾りの英語を減らす。診療の事実と申込先を保持。写真は後日、偽の写真や準備中枠を見せない。

## ファイル分担
- 親: globals.css、Header/Footer/layout、トップ、英字比較、共有部品。
- about/services担当: この2ページのみ。
- online/access担当: この2ページのみ。
- events/news/privacy担当: EventsView.tsx、news/page.tsx、privacy/page.tsxのみ。
- src/lib の既存データと events/page.tsx の取得処理は変更しない。

## 共通部品の契約
src/components/Editorial.tsx: PageIntro({eyebrow?,title,children?}) / EditorialSection({id?,label?,title?,children}) / TextLink({href,children,external?}) / Photo({photo,className?})。
ページ全体を `<div className="page-shell"><div className="container">…</div></div>` で囲む。PageIntroと各EditorialSectionはcontainer内。EditorialSectionは左に見出し、右に本文の2列、スマホは縦並び。
CSS: prose（段落行間）、quiet-note、text-link、detail-list（dl直下divにdt/dd）、rule-list（ul/li薄罫線）、steps（ol/li）、schedule-wrap（表スクロール）、schedule-table、article-list、article-meta、article-title。
写真: `photos` from @/lib/photos に clinic/portrait/hike がnullで準備済。必要箇所にPhotoを置く。nullは何も出さない。

## 合格条件（各担当＋親の再検証）
1. `npx eslint <担当ファイル>` → 新規警告/エラー0。
2. `git diff -- <担当ファイル>` と旧内容を照合 → 時間、料金、資格、連絡先、法的本文、申込URLを保持。予約URL未設定時は受付開始済と書かない。
3. ブラウザで各ページ1280px/375pxを表示 → 横はみ出し0、見出し/本文/リンクが重ならない（親が実行）。
4. 各ページのリンク・メニューを操作 → 行先が存在、nullの予約URLではaccessへ誘導、events日程4件表示（親が実行）。
5. 全員完了後 `npm run lint && npm run build` → 成功（親だけ実行）。
6. 全員完了後 英字4案切替とモバイルメニューの開閉/ページ移動 → 表示とスクロール復元が正常（親）。

実装前に自身の担当ファイル全文とNextローカルガイドを読む。担当以外は編集しない。ローカルCSSの追加は自身のフォルダ内のmoduleに限り可能。自己修正2敗で理由付きで差し戻し。実行結果/変更要旨/残課題/attemptsを報告。

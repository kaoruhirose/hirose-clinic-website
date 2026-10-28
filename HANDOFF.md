# 引き継ぎメモ（廣瀬診療所サイト＆メール）

最終更新：2026-07-29

> **（2026-10-28 追記）** このメモは 7/29 時点のもので、古い部分がある。いまの状況と宿題は `MAP.md` の冒頭が正本。
> GitHub が一般公開のため、アカウントの ID と個人の Gmail アドレスを伏せ字にした（過去のセーブ記録には残っている）。
> ~~下の「次にやること」1・2（送受信テスト・DKIM）は、2026-10-28 時点でまだ。`MAP.md` の宿題の1つめ（最重要）。~~
> → （2026-10-28 訂正）1・2 は **2026-10-28 に済んだ**。DNS に TXT `google._domainkey`（DKIM）と `_dmarc`（`p=none`）を足し、テストで dkim・spf・dmarc とも pass。下の「触ってはいけない/残す DNS レコード」にこの2行も加わる。詳しくは `MAP.md` の 10/28 その2。

## ✅ 完了（サイト公開）
- サイト（Next.js / Vercel）を独自ドメイン **`hiroseshinryojo.jp`** で公開済み。
- ドメイン登録は**お名前.com**（会員ID は伏せ字。お名前.com Navi で確認できる）。DNSも**お名前.com（`01〜04.dnsv.jp`）**で管理。
  - ネームサーバーを Xserver → お名前.com に切替済み（反映完了）。
- Vercel の Domains は3つとも **Valid（緑）**：
  - `hiroseshinryojo.jp`（www へ308リダイレクト）／`www.hiroseshinryojo.jp`／`hirose-clinic-website.vercel.app`
- `https://hiroseshinryojo.jp` が HTTPS で表示OK。
- トップのヒーロー画像：PC＝広角パノラマ(`hero-wide.jpg`)、スマホ＝富士山を上げた縦構図(`hero-mobile.jpg`)。

## ✅ 完了（メールDNS）
- **Google Workspace Business Starter が有効**（Annual/月払い ¥800＋税、ユーザー `dr.kaoru@hiroseshinryojo.jp`、
  管理者ログインも `dr.kaoru@`、顧客ID は伏せ字（管理画面で確認できる）、次回請求 2026/08/01）。
  ※ 個人の Google One（AI Pro ¥29,000/年）は**別物**。混同注意。
- お名前.com の DNS を Google 宛に設定・反映済み：
  - **MX → `smtp.google.com`（優先1）**
  - **SPF(TXT) → `v=spf1 include:_spf.google.com ~all`**
- → 今後 `dr.kaoru@hiroseshinryojo.jp` 宛メールは **Google Workspace の受信箱**に届く
  （以前の「Xserver受信→個人Gmail転送」ではなくなった）。

## ⚠️ 触ってはいけない/残すDNSレコード
- A `hiroseshinryojo.jp` → `216.198.79.1`（Vercel）
- CNAME `www` → `84159c5496e070eb.vercel-dns-017.com.`（Vercel）
- CNAME `69313836` / `69315202` → `google.com.`（Google認証）
- TXT `google-gws-recovery-domain-verification=69313836` / `=69315202`（Google認証）
- NS `01〜04.dnsv.jp`

## 🔲 次にやること（残タスク）
1. **メール送受信テスト（最優先）**
   - Gmail に `dr.kaoru@hiroseshinryojo.jp` でログイン
   - 別アドレス（例：薫さんの個人 Gmail。アドレスは伏せ字）から `dr.kaoru@` 宛にテスト送信 → 受信確認
   - `dr.kaoru@` から返信 → 送信確認
   - ※今後 `dr.kaoru@` 宛は個人Gmail（伏せ字）には入らない。Workspace側を見る。
2. **DKIM 設定**（Workspace管理画面→Gmail→メールの認証）で送信の信頼性UP（任意だが推奨）。DMARCも任意で。
3. 希望あれば：Workspace `dr.kaoru@` から個人Gmailへの転送設定。
4. 将来：診療予約の自動化（Google Calendar 連携等）を別途設計。

## 管理画面
- お名前.com Navi: https://navi.onamae.com/
- Vercel: https://vercel.com/dashboard （プロジェクト `hirose-clinic-website`）
- Google Workspace管理: https://admin.google.com （`dr.kaoru@` でログイン）
- Xserver: サーバーID・サーバー番号は伏せ字（Xserver の管理画面で確認できる）（※メールはGoogleに移行したので基本使わない）

## 開発メモ
- ブランチ：`main`。お知らせ記事は `src/lib/news.ts` を編集。
- 画像処理に sharp、スクショに playwright-core を `--no-save` で利用（node_modules内、コミット対象外）。
- 画像を差し替えるとき、ファイル名を同じにすると Next の画像最適化キャッシュで古い画像が出る場合あり → `.next` を消して再描画で確認。

# ドメイン切り替え作業の引き継ぎメモ

## ゴール
ドメイン `hiroseshinryojo.jp` で、Vercel 上にデプロイしたサイトを表示させる。

## 現状（2026-06-25 時点・お名前.com の設定完了通知メールで確認）
- **ドメインの管理元は「お名前.com」**（※当初エックスサーバーと想定していたが誤りだった）。
- ネームサーバーは `01〜04.dnsv.jp`（お名前.com の DNS）。すべて有効。
- **DNS はすでに Vercel を指している（切り替え完了）:**
  - `hiroseshinryojo.jp` → **A `216.198.79.1`**（Vercel の本番 IP）
  - `www.hiroseshinryojo.jp` → **CNAME `84159c5496e070eb.vercel-dns-017.com.`**（Vercel）
- サイトのコードは GitHub にプッシュ済み（Next.js / Vercel デプロイ）。

## ⚠️ 触ってはいけないレコード（メール・認証用）
以下は Google（おそらく Google Workspace）関連。**絶対に消さない／変更しない**：
- `69313836.hiroseshinryojo.jp` CNAME → `google.com.`
- `69315202.hiroseshinryojo.jp` CNAME → `google.com.`
- TXT `google-gws-recovery-domain-verification=69313836`
- TXT `google-gws-recovery-domain-verification=69315202`

## 未確認・要注意
- **MX レコード（メール配送先）が完了通知に載っていない。**
  独自ドメインのメールを使う場合は MX が別途必要。
  今メールが使えているなら問題なし。これから使うなら別途設定。
  → いずれにせよ、この作業では MX に触れない。

## 残りの確認作業（これだけ）
1. ブラウザで `https://hiroseshinryojo.jp` と `https://www.hiroseshinryojo.jp` を開き、
   Vercel のサイトが表示されるか確認（DNS 伝播に数時間かかる場合あり）。
2. Vercel ダッシュボード → 対象プロジェクト → Settings → Domains で
   `hiroseshinryojo.jp` が「Valid Configuration（緑）」になっているか確認。

## 管理画面
- お名前.com Navi: https://navi.onamae.com/  （会員 ID: 58255565）
- Vercel: https://vercel.com/dashboard

# ドメイン切り替え作業の引き継ぎメモ

## ゴール
ドメイン `hiroseshinryojo.jp` で、Vercel 上にデプロイしたサイトを表示させる。

## 現状（2026-07-06 時点・実際の DNS 応答を照会して確認）
- ドメインの**登録**は「お名前.com」。ただし **実際に使われているネームサーバーはエックスサーバー**
  （`ns1〜ns5.xserver.jp`）のまま。
- そのため、お名前.com 側に設定した Vercel 向けレコード
  （A `216.198.79.1` / www CNAME `84159c5496e070eb.vercel-dns-017.com.`）は
  **設定済みだが有効になっていない（休眠状態）**。
- 実際の名前解決は今もエックスサーバーの値：
  - `hiroseshinryojo.jp` A → `85.131.209.115`（旧サーバー）
  - `www` A → `85.131.209.115`
  - **MX → `hiroseshinryojo.jp`（apex 自身）** ＝ メールはエックスサーバーで受けている構成
  - SPF TXT に `sv16574.xserver.jp` あり（Xserver のメールサーバー）
- お名前.com の完了メールの注記どおり、「DNS レコード設定用ネームサーバー変更確認」に
  チェックが入っていなかったため、ネームサーバーが `01〜04.dnsv.jp` に切り替わっていない。
- Vercel のドメイン画面が「Invalid Configuration」なのはこれが原因。
  **ネームサーバーを切り替えない限り緑にならない。**
- サイトのコードは GitHub にプッシュ済み（Next.js / Vercel デプロイ済み、`.vercel.app` は正常）。

## メール：使用中と確認済み（2026-07-07）
- `〇〇@hiroseshinryojo.jp` は**使用中**。エックスサーバーで受信し **Gmail に転送**する運用。
- 転送処理はエックスサーバーのサーバー内で行われるため、
  **メールがエックスサーバー（sv16574.xserver.jp）に届き続ける限り転送も生きる**。

## 確定した切り替え手順（この順番を厳守）
1. **先に** お名前.com の DNS レコードに以下の2行を**追加**する：
   - MX（ホスト名は空欄=apex）→ 値 `sv16574.xserver.jp`、優先度 `10`
   - TXT（ホスト名は空欄=apex）→ 値
     `v=spf1 +a:sv16574.xserver.jp +mx include:spf.sender.xserver.jp ~all`
2. **その後で** ネームサーバーを `01.dnsv.jp` `02.dnsv.jp` `03.dnsv.jp` `04.dnsv.jp` に変更する
   （お名前.com Navi のネームサーバー設定。DNSレコード設定画面の
   「DNSレコード設定用ネームサーバー変更確認」チェックでも可）。
3. 伝播後の確認：
   - 外部アドレスから `@hiroseshinryojo.jp` 宛にテストメール → Gmail に届くか
   - Vercel の Domains 画面で Refresh → Valid Configuration（緑）になるか
   - whatsmydns.net で NS が `dnsv.jp` 系に変わったか

## サイト刷新（2026-07-07 完了）
- AI生成画像・絵文字を全廃し、実写（自宅からの富士山・江ノ島）と
  オリジナルSVG意匠に統一。文言も全ページリライト済み。main へマージ済み。
- お知らせ記事の追加は `src/lib/news.ts` を編集。

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

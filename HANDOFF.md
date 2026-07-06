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

## 分岐点：メール利用の有無（未確認・最重要）
- MX が apex を指しているため、**apex の A を Vercel に変えるとメール受信が壊れる**構成。
- `〇〇@hiroseshinryojo.jp` のメールを使っているか確認が必要。
  - **使っていない** → お名前.com Navi でネームサーバーを `01.dnsv.jp〜04.dnsv.jp` に変更するだけで完了。
  - **使っている** → 切り替え前に、お名前.com DNS へメール用レコード
    （MX を `sv16574.xserver.jp` 等へ、SPF TXT のコピー）を追加してからネームサーバーを切り替える。

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

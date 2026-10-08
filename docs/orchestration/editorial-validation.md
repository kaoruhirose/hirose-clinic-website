# A案展開の検収 — 2026-10-08

## 合格した確認

1. 改修前と最終版で `npm run lint` / `npm run build` を実行 → エラー・lint警告0、型チェック成功、全ページ生成成功。
2. `git diff --check` → 空白エラー0。既存lib/events.ts・formDates.ts・news.ts・site.ts・events/page.tsxをgit HEADとバイト比較 → 同一。privacyのsections配列を文字列比較 → 同一。
3. 生成HTMLをPython HTMLParserで検査 → 8ページすべてh1が1つ、全内部リンク/ページ内参照の行先あり、空hrefなし。design/wordmark.metaのstatus=404。
4. ブラウザ1280×720 / 375×667で8ページを表示 → 横はみ出し0、画像欠損0。トップ、紹介、アクセス、FAQ、イベント、お知らせ、プライバシーを目視。モバイルFAQは1列327px、診療時間表は327pxに収まる。
5. スマホメニュー開く→閉じる/Escape→アクセスへ移動を実操作 → 開いている間だけbody overflow=hidden、閉じた後は空文字に復元。Escapeでフォーカスがメニューボタンへ戻る。ネイティブdialogを使用。
6. 英字4案を実操作 → 選択と表示が一致。綴りはすべてHIROSESHINRYOJO。漢字の中心は1280pxで640px、375pxで187.5px。スマホ右斜め下の英字範囲215.5〜328.1px、はみ出し0。
7. イベント画面 → 10/30・11/9・11/29・12/13の4件、Googleフォーム申込リンク1個、ワークショップ準備中の表示を実読。
8. 新規ファイル・ソース・記録を秘密情報パターン検索 → 該当0。追加の送信フォーム/個人情報保存/API鍵なし。

## 途中で見つけて修正したこと

- 予約URLがnullなのに受付中と読める表現を、問い合わせ案内へ統一。
- モバイルFAQが細い左列へ折り返すため、質問と回答を縦並びへ。画面と計算された列幅327pxで再確認。
- 長いイベント名の括弧内が途中で割れないよう副題を別行へ。データ自体は保持。
- 画面別の写真をpicture/getImagePropsで1枚選択。英字比較操作欄はスクロール中も上端に表示。
- ローカル開発環境のTurbopackが古いCSSを保持したため、最終確認のプレビューは標準のwebpack起動へ切替。公開用buildは標準Turbopackで成功。

## 安全性・失敗時

日程取得/通信失敗時の予備日程は既存コードのまま。イベント日程が0件・formUrl=nullの表示分岐は担当者の描画試験と主担当のコード実読で確認。写真未設定ではPhotoがnullを返す。比較ページは開発限定・検索避け。本番の住所公開範囲、連絡先、申込先を広げていない。公開・pushは未実施。

## 証跡

- design-studies/site-home-desktop.jpg / site-home-mobile.jpg
- design-studies/site-about-desktop.jpg
- design-studies/site-wordmark-options.jpg（おすすめの下置き）

追加の独立レビューは担当の利用上限により未完了。担当ページの自己検収と、主担当の差分/生成物/ブラウザ検収で確認した。新しい写真と英字位置の最終選択はユーザー確認待ち。

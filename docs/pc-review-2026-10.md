# PC表示の見直し — 引き継ぎメモ（2026-10-11）

> 次のセッションの AI へ：MAP.md の最新の記録と、このメモを読んでから始めること。
> 修正案の画像つき一覧（修正案帳）：https://claude.ai/artifact/EF5Y39gRx34rowfq5g9LK9 （薫さんだけが開ける非公開ページ）

## 決まったこと（F：反映・公開済み）

| 項目 | 決定 |
|---|---|
| F1 | 番地の連絡は公式LINE。表記「詳しい住所は、ご予約の確定後に公式LINEでお知らせします。」（アクセス・フッター）。「詳しい地図」の行は削除 |
| F2 | 主な窓口は公式LINE。電話（携帯）受付 9:00〜18:30、水・木・日・祝を除く（`site.phoneHours`） |
| F3 | 保険診療は近くの薬局へ処方箋をデータで送付、自由診療は自宅へ郵送 |
| F4 | 「一人ひとり、ゆっくりと。」はトップだけ。アクセスの予約欄は小見出し「はじめての方へ」・見出し「ご予約・お申し込み」（診療に限らない表現） |
| F5 | AIが作った架空のお知らせ3件を削除。開院（2026年3月5日）の記事だけを掲載。研修（名古屋・兵庫・熊野）・保育園の健診などの記事は、薫さんから情報をもらってから追加 |
| F6 | 紹介ページの大見出しを「私たちの想い」→「大切にしていること」（ひとまず。よい言葉があれば変更） |

## 決まったこと（A：一部反映）

| 項目 | 決定 |
|---|---|
| A1 | 今のまま（端は広々と。中間案も比較済みで不採用） |
| A2 | B案。裸足ハイクは1120px幅・詩は写真の上端にそろえる。サーフセラピーは2列。C案・写真を左端いっぱいの案は不採用 |
| A3 | B案。見出しを画面に残す（PCのみ） |
| A4〜A8 | すべてB案で反映（10/11）。A7は参加費・キャンセル規定の表のみ。A8はInstagramをPCで最下段右端へ |

## 決まったこと（B：反映済み）

| 項目 | 決定 |
|---|---|
| B1〜B7 | すべてB案で反映（10/11）。B7以外はPCのみ。設定は `globals.css` の「B1」〜「B6」の注記の所。表紙の詩・「身土不二」・一覧の大見出しの大きさはCで扱う |

## 決まったこと（C：反映済み）

| 項目 | 決定 |
|---|---|
| C1 | 表紙の写真には屋号だけ。詩は写真の下の白い背景の中央に縦書き2列（散らし書き）。PC・スマホとも（10/12）。「富士山の左の空」案・左下の横書き・写真の上部は不採用 |
| C2〜C4 | B案で反映（10/12、PCのみ）。設定は `globals.css` の「C2」〜「C4」の注記の所 |

## 決まったこと（D：反映・公開済み）

| 項目 | 決定 |
|---|---|
| D1〜D4・D6 | おすすめどおり反映（10/12）。D1〜D4はスマホにも反映 |
| D5 | 帯を薫さんの「朝焼けの富士山」に差し替え。あわせて夕焼けの富士山をフッターの背景、診療所の室内を診療案内の冒頭に |

## 決まったこと（E：反映済み）

| 項目 | 決定 |
|---|---|
| E0〜E12 | 修正案どおり反映（10/12）。E7のみ「脈と舌と腹部を診察し」に変更。「西洋医学と漢方」は「西洋医学と東洋医学」の表記に合わせた。E10はF1・F4で反映済み |

## 以前の選択肢一覧（記録として残す）

修正案帳で、薫さんに項目ごとに選んでもらう。おすすめは修正案帳の一覧表のとおり。

- **A 骨組み**：A1 ヘッダーと本文の端をそろえる／A2 フィールドワーク2ページの幅（裸足ハイクは10/10に「写真を左右いっぱい」を選んだ経緯あり）／A3 見出しを画面に残す／A4 節の余白 80→112px／A5 小見出しと説明を近づける／A6 二重線（不具合）／A7 表の列を近づける／A8 フッター
- **B 文字**：B1 文字サイズ22種類→9種類／B2 本文16px・1行36字・両端そろえ／B3 リード文を明朝17px／B4 見出しの大小の逆転／B5 最小12px／B6 プライバシーの見出し20px／B7 句点のあとのすき間（不具合。6か所のうち3か所は今回の文面変更で解消。残りはオンライン診療の冒頭、アクセスの冒頭、アクセスの「電車・バス」）
- **D 部品**：D1 矢印（→ サイト内、↗ 外部、← 戻る）／D2 呼び方（救急科専門医など）／D3 斜線・波線／D4 時間表の●／D5 トップの写真の重複（C案：裸足ハイクの sea-view を「フィールドワーク」直前へ、`object-position: center 68%`）／D6 「保険診療の範囲」を見出しの下へ
- **E 文章**：E0 表記ルール、E1〜E12 ページごとの文面（修正案帳に全文あり）

## 次の進め方（1セッション＝1かたまり）

1. 不具合と骨組み・文字（A・B）
2. 縦書き（C）
3. 部品（D）と文章（E）
4. お知らせの記事追加（薫さんの情報が届いたら）

## 試作で使った見た目の設定（実装の出発点）

デザインの直しはPCだけに効かせる（`@media (min-width: 1024px)`）。スマホの表示は変えない。試作は確認用ブラウザに一時的に当てただけで、本物のファイルには入っていない。

```css
/* A1 ヘッダーの左右を本文の幅（1120px）にそろえる */
.header-inner { padding-inline: max(56px, calc((100% - 1120px) / 2)); }

/* A4 余白 */
.editorial-section { padding-block: 112px; }
.page-intro { padding: 120px 0 104px; }

/* A5 近接 */
.rule-list > li > h3 { margin: 0 0 6px; font-size: 19px; }
.rule-list > li { padding-block: 26px; }
.steps > li > h3 { margin: 0 0 4px; }
.steps > li { padding-bottom: 40px; }

/* A6 二重線（全幅に適用） */
.detail-list dd .rule-list > li:last-child { border-bottom: 0; }
.detail-list dd .rule-list { margin-top: 12px; }

/* A3 見出しを画面に残す */
.editorial-section > .section-heading { position: sticky; top: 72px; align-self: start; }

/* B2 本文：16px、幅36字ちょうど、両端そろえ（text-wrap: pretty だと字間が広がるので wrap） */
.prose { font-size: 16px; line-height: 2.05; letter-spacing: .05em; }
.editorial-body.prose > * { max-width: 37.8em; }
.prose p { text-align: justify; text-wrap: wrap; }

/* B3 リード文 */
.intro-copy { font-family: var(--font-serif); font-size: 17px; line-height: 2.15; letter-spacing: .06em; max-width: 34em; }
.intro-copy p + p { margin-top: 1em; }

/* B4 見出しの親子 */
.prose .event-part > h2 { font-size: 24px; letter-spacing: .06em; margin-bottom: 28px; }
.prose .event-part h3 { font-size: 18px; margin-top: 36px; }

/* B1 節の見出し */
.section-heading h2 { font-size: 28px; }

/* C1 表紙の詩（HTMLは2行を span.l1 / span.l2 に分ける。左の空の案） */
.hero-poem { writing-mode: vertical-rl; left: 14%; right: auto; bottom: auto; top: 17%; font-size: 23px; letter-spacing: .32em; line-height: 2.4; }
.hero-poem span { display: block; }
.hero-poem .l2 { padding-top: 3.2em; }

/* C2 トップの見出しを縦書き（お知らせの節は横書きのまま） */
.section-heading { display: flex; flex-direction: row-reverse; justify-content: flex-start; align-items: flex-start; gap: 22px; }
.section-heading h2 { writing-mode: vertical-rl; font-size: 30px; letter-spacing: .28em; line-height: 2; margin: 0; }
.section-heading .eyebrow, .section-heading .section-english { writing-mode: vertical-rl; margin: 0; }

/* C3 身土不二（言葉を <p>からだと、暮らす土地は、<br>ひとつながり。</p><p>海を渡る風、<br>足もとの土、<br>季節の移ろい。<br>からだもまた、<br>その営みのなかにあります。</p> に） */
.clinic-philosophy { justify-content: center; align-items: flex-start; gap: 56px; padding-right: 0; margin-top: 72px; }
.clinic-philosophy-copy { writing-mode: vertical-rl; text-align: start; font-size: 16px; line-height: 2.3; letter-spacing: .18em; }
.clinic-philosophy-copy p + p { margin-top: 0; margin-right: 1.6em; }
```

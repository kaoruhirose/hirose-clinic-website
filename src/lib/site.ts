/**
 * サイト全体で使う連絡先・外部URLの一元管理。
 *
 * 値が null の項目は「未確定」を意味し、各コンポーネントは
 * プレースホルダー表示や代替導線（予約案内ページへのリンク等）に
 * 自動的にフォールバックする。
 * 公開時はこのファイルだけを書き換えれば全ページに反映される。
 */
export const site = {
  name: "廣瀬診療所",

  /** 代表電話（基本のご連絡先） */
  phone: "046-827-7399" as string | null,

  /** お急ぎのご用件のための連絡先（携帯） */
  urgentPhone: "090-4212-4600" as string | null,

  /** 所在地 */
  postalCode: "249-0005",
  address: "神奈川県逗子市桜山9丁目",

  /** TODO: STORES予約など外部予約システムのURLが確定したら設定する */
  reservationUrl: null as string | null,

  /** InstagramのプロフィールURL（フッターに表示される） */
  instagramUrl: "https://www.instagram.com/hiroseshinryojo/" as string | null,
};

/** 電話番号の画面表示用文字列（未確定の間はプレースホルダー） */
export const phoneDisplay = site.phone ?? "046-XXX-XXXX";

/**
 * 裸足ハイクなどイベントの参加申込に使う「使い回し用」Googleフォームの設定。
 *
 * 【セットアップ手順】
 *  1. Googleフォームを1つ作成し、「参加希望日」をプルダウン設問にする
 *  2. そのフォームの「◁ プレビュー」ではなく編集画面URLの
 *     「.../viewform」までを baseUrl に貼る
 *  3. 「回答を事前入力したURLを取得」で希望日に適当な値を入れてリンクを生成し、
 *     URL内の「entry.XXXXXXXXX」部分を dateEntryId に設定する
 *  4. events.ts の各日付と、フォームのプルダウン選択肢の文言を一致させる
 *
 * baseUrl が null の間は、各イベントの申込ボタンが自動的に
 * 「申込フォーム準備中」表示になる（デッドリンクにならない）。
 */
export const eventForm = {
  /** GoogleフォームのベースURL（「.../viewform」まで）。未設定なら null */
  baseUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfGSxfca0c_myWvSRCsC14JnR6W91FPWqjyx8j4QGImo7K7Hw/viewform" as
      | string
      | null,
  /** 「参加希望日」プルダウン設問の entry ID */
  dateEntryId: "entry.1828901912",
};

/**
 * 指定した開催日を「参加希望日」に事前入力したGoogleフォームのURLを組み立てる。
 * baseUrl 未設定の場合は null を返す（呼び出し側で「準備中」表示にする）。
 */
export function buildEventFormUrl(dateValue: string): string | null {
  if (!eventForm.baseUrl) return null;
  const url = new URL(eventForm.baseUrl);
  url.searchParams.set("usp", "pp_url");
  url.searchParams.set(eventForm.dateEntryId, dateValue);
  return url.toString();
}

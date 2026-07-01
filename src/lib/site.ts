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

  /** TODO: 開業時に実際の電話番号を設定する（例: "046-123-4567"） */
  phone: null as string | null,

  /** TODO: STORES予約など外部予約システムのURLが確定したら設定する */
  reservationUrl: null as string | null,

  /** TODO: InstagramのURLが確定したら設定する（設定するとフッターに表示される） */
  instagramUrl: null as string | null,
};

/** 電話番号の画面表示用文字列（未確定の間はプレースホルダー） */
export const phoneDisplay = site.phone ?? "046-XXX-XXXX";

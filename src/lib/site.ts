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

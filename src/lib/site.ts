/**
 * サイト全体で使う連絡先・外部URLの一元管理。
 *
 * 値が null の項目は「未確定」を意味し、各コンポーネントは
 * プレースホルダー表示や代替導線（予約案内ページへのリンク等）に
 * 自動的にフォールバックする。
 * 公開時はこのファイルだけを書き換えれば全ページに反映される。
 */
/** URLを変更した場合は public/images/line-friend-qr.svg も再生成する。 */
const lineUrl = "https://lin.ee/PcCz3wj" as string | null;

export const site = {
  name: "廣瀬診療所",

  /** お電話でのお問い合わせ先 */
  phone: "090-4212-4600" as string | null,

  /** 所在地 */
  postalCode: "249-0005",
  address: "神奈川県逗子市桜山9丁目",

  /** 診療予約の案内先（サイト内の友だち追加・QRコードの案内） */
  reservationUrl: "/access#reservation",

  /** 公式LINEの友だち追加URL（診療予約・イベントのお問い合わせ先） */
  lineUrl,

  /** InstagramのプロフィールURL（フッターに表示される） */
  instagramUrl: "https://www.instagram.com/hiroseshinryojo/" as string | null,
};

/** 電話番号の画面表示用文字列（未確定の間はプレースホルダー） */
export const phoneDisplay = site.phone ?? "電話番号は準備中です";

/**
 * Googleフォームの選択肢から、開催日程を読み取る（サーバー側でのみ使う）。
 *
 * 公開中のフォームのページには、質問と選択肢が `FB_PUBLIC_LOAD_DATA_` という
 * データとして埋め込まれている。そこから指定した質問（例：「参加希望日」）の
 * 選択肢を取り出す。APIキーなどは不要。
 *
 * Googleがフォームの作りを変えると読み取れなくなる。そのときは null を返し、
 * 呼び出し側は events.ts の `dates`（予備の日程）を使う。
 */

/** フォームを読み直す間隔（秒）。イベントページの revalidate と合わせる */
export const FORM_REVALIDATE_SECONDS = 3600;

/** 「2026年12月13日（日）」から日付を取り出すための形 */
const DATE_PATTERN = /(\d{4})年(\d{1,2})月(\d{1,2})日/;

/**
 * 指定した質問の選択肢を返す。読み取れなかったときは null。
 * 選択肢が0件のとき（フォーム側で日程を全部消したとき）は空の配列。
 */
export async function fetchFormChoices(
  formUrl: string,
  questionTitle: string,
): Promise<string[] | null> {
  try {
    const res = await fetch(formUrl, {
      next: { revalidate: FORM_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const html = await res.text();

    const match = html.match(/FB_PUBLIC_LOAD_DATA_ = ([\s\S]*?);<\/script>/);
    if (!match) return null;
    const data: unknown = JSON.parse(match[1]);

    // data[1][1] が質問の一覧。各質問は [id, 質問文, 説明, 種類, [[id, 選択肢一覧, ...]]]
    const questions = (data as unknown[][])?.[1]?.[1];
    if (!Array.isArray(questions)) return null;

    const question = questions.find(
      (q) => Array.isArray(q) && typeof q[1] === "string" && q[1].trim() === questionTitle,
    );
    if (!question) return null;

    const options = question[4]?.[0]?.[1];
    if (!Array.isArray(options)) return [];

    return options
      .map((o: unknown) => (Array.isArray(o) ? o[0] : null))
      .filter((s: unknown): s is string => typeof s === "string" && s.trim() !== "")
      .map((s: string) => s.trim());
  } catch {
    return null;
  }
}

/**
 * 日付として読める選択肢だけを残し、開催日が過ぎたものを除く。
 * 当日はまだ表示する（日本時間で、翌日になったら消える）。
 */
export function upcomingDates(choices: string[], now: Date = new Date()): string[] {
  // 日本時間の「今日」を YYYYMMDD の数字にする
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const today =
    jst.getUTCFullYear() * 10000 + (jst.getUTCMonth() + 1) * 100 + jst.getUTCDate();

  return choices.filter((choice) => {
    const m = choice.match(DATE_PATTERN);
    if (!m) return false;
    const day = Number(m[1]) * 10000 + Number(m[2]) * 100 + Number(m[3]);
    return day >= today;
  });
}

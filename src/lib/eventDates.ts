import type { ClinicEvent } from "@/lib/events";
import { fetchFormChoices, upcomingDates } from "@/lib/formDates";

/** フォームから日程を読み、読めなければ events.ts の予備の日程を使う。どちらも過ぎた日は除く */
export async function withLatestDates(ev: ClinicEvent): Promise<ClinicEvent> {
  const fromForm =
    ev.formUrl && ev.formDateQuestion
      ? await fetchFormChoices(ev.formUrl, ev.formDateQuestion)
      : null;
  return { ...ev, dates: upcomingDates(fromForm ?? ev.dates) };
}


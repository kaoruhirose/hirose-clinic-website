import { fieldworks, workshops, type ClinicEvent } from "@/lib/events";
import { fetchFormChoices, upcomingDates } from "@/lib/formDates";
import EventsView from "./EventsView";

// 1時間ごとにページを作り直し、Googleフォームの日程を読み直す（formDates.ts の FORM_REVALIDATE_SECONDS と同じ値）
export const revalidate = 3600;

/** フォームから日程を読み、読めなければ events.ts の予備の日程を使う。どちらも過ぎた日は除く */
async function withLatestDates(ev: ClinicEvent): Promise<ClinicEvent> {
  const fromForm =
    ev.formUrl && ev.formDateQuestion
      ? await fetchFormChoices(ev.formUrl, ev.formDateQuestion)
      : null;
  return { ...ev, dates: upcomingDates(fromForm ?? ev.dates) };
}

export default async function Events() {
  const [fw, ws] = await Promise.all([
    Promise.all(fieldworks.map(withLatestDates)),
    Promise.all(workshops.map(withLatestDates)),
  ]);
  return <EventsView fieldworks={fw} workshops={ws} />;
}

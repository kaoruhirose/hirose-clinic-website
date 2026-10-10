import { EditorialSection, PageIntro, Photo, TextLink } from "@/components/Editorial";
import type { ClinicEvent } from "@/lib/events";
import { photos } from "@/lib/photos";

function EventDetails({ ev }: { ev: ClinicEvent }) {
  const titleParts = ev.title.match(/^(.*?)(（[^）]+）)$/);
  const timeParts = ev.time.split(/(?=（)/);
  return (
    <li>
      <article>
        <h3 className="article-title">{titleParts ? <>{titleParts[1]}<span className="event-subtitle">{titleParts[2]}</span></> : ev.title}</h3>
        <p>{ev.description}</p>

        <dl className="detail-list">
          <div>
            <dt>開催日程</dt>
            <dd>
              {ev.dates.length === 0 ? (
                <p className="quiet-note">
                  次回の日程は、決まり次第こちらでお知らせします。
                </p>
              ) : (
                <ul className="rule-list">
                  {ev.dates.map((date) => <li key={date}><span className="text-unit">{date}</span></li>)}
                </ul>
              )}
            </dd>
          </div>
          <div><dt>時間</dt><dd>{timeParts.map((part) => <span className="text-unit" key={part}>{part}</span>)}</dd></div>
          <div><dt>集合場所</dt><dd>{ev.place}</dd></div>
          <div>
            <dt>参加費</dt>
            <dd>
              <ul className="fee-list">
                {ev.fee.split("／").map((fee, index) => {
                  const parts = fee.trim().match(/^(.*?)(\d[\d,]*円)(.*)$/);
                  return (
                    <li key={index}>
                      {parts ? <><span className="text-unit">{parts[1].trim()}</span>{" "}<span className="text-unit">{parts[2]}</span><span className="text-unit">{parts[3]}</span></> : fee}
                    </li>
                  );
                })}
              </ul>
            </dd>
          </div>
          <div><dt>定員</dt><dd>{ev.capacity}</dd></div>
        </dl>

        {ev.formUrl && ev.dates.length > 0 ? (
          <div>
            <TextLink href={ev.formUrl} external>参加を申し込む</TextLink>
            <p className="quiet-note">
              ご希望の日程は、申込フォームの中でお選びください。
            </p>
          </div>
        ) : (
          <div>
            <p>申込受付前</p>
            <p className="quiet-note">
              お申し込みの受付開始まで今しばらくお待ちください。
            </p>
          </div>
        )}
      </article>
    </li>
  );
}

function EventSection({
  title,
  items,
  emptyText,
}: {
  title: string;
  items: ClinicEvent[];
  emptyText: string;
}) {
  return (
    <EditorialSection title={title}>
      {items.length === 0 ? (
        <p className="quiet-note">{emptyText}</p>
      ) : (
        <ul className="article-list">
          {items.map((ev) => <EventDetails key={ev.title} ev={ev} />)}
        </ul>
      )}
    </EditorialSection>
  );
}

export default function EventsView({
  fieldworks,
  workshops,
}: {
  fieldworks: ClinicEvent[];
  workshops: ClinicEvent[];
}) {
  return (
    <div className="page-shell">
      <div className="container">
        <PageIntro title="イベント" />
        <Photo photo={photos.hike} />
        <EventSection
          title="フィールドワーク"
          items={fieldworks}
          emptyText="現在、開催を予定しているフィールドワークはありません。次回の開催が決まりましたら、こちらでご案内いたします。"
        />
        <EventSection
          title="ワークショップ"
          items={workshops}
          emptyText="現在準備中です。決まり次第こちらでお知らせします。"
        />
      </div>
    </div>
  );
}

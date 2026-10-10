import type { CSSProperties } from "react";
import { EditorialSection, PageIntro, Photo, TextLink } from "@/components/Editorial";
import type { ClinicEvent } from "@/lib/events";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

/** 申込への導線。日程が1件もない間は「受付前」と表示する */
function ApplyLink({ ev }: { ev: ClinicEvent }) {
  return ev.formUrl && ev.dates.length > 0 ? (
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
  );
}

/**
 * イベント名を1行に収めるための、名前の長さ（全角1文字＝1）。
 * 半角の文字や空白は幅が狭いので少なめに数え、字間のぶんを足す。
 */
function titleLength(title: string): number {
  const chars = [...title];
  const width = chars.reduce((sum, c) => sum + (c.charCodeAt(0) < 256 ? 0.5 : 1), 0);
  return Math.round((width + chars.length * 0.04) * 1.03 * 10) / 10;
}

function EventDetails({ ev }: { ev: ClinicEvent }) {
  const timeParts = ev.time.split(/(?=（)/);
  return (
    <li>
      <article className="event-article">
        <h3
          className="article-title event-title"
          style={{ "--title-length": titleLength(ev.title) } as CSSProperties}
        >
          {ev.title}
        </h3>
        {ev.lead && <p className="event-lead">{ev.lead}</p>}
        {ev.epigraph && (
          <blockquote className="event-epigraph">
            <p>{ev.epigraph.text}</p>
            <footer>── {ev.epigraph.author}</footer>
          </blockquote>
        )}
        {ev.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

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
          <div>
            <dt>集合場所</dt>
            <dd>
              {ev.place}
              {ev.mapUrl && (
                <>
                  <br />
                  <a href={ev.mapUrl} target="_blank" rel="noopener noreferrer">地図を開く</a>
                </>
              )}
            </dd>
          </div>
          <div><dt>定員</dt><dd>{ev.capacity}</dd></div>
          {/* 参加費の表（feeTable）がないイベントは、ここに区分ごとの参加費を並べる */}
          {!ev.feeTable && (
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
          )}
        </dl>

        <ApplyLink ev={ev} />

        {ev.flow && (
          <section className="event-part">
            <h4>当日の流れ</h4>
            <ol className="steps">
              {ev.flow.map((step) => (
                <li key={step.title}>
                  <strong className="event-step-title">{step.title}</strong>
                  {step.text}
                </li>
              ))}
            </ol>
          </section>
        )}

        {ev.audience && (
          <section className="event-part">
            <h4>こんな方へ</h4>
            <ul className="rule-list">
              {ev.audience.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        )}

        {ev.reassurance && (
          <section className="event-part">
            <h4>安心して歩いていただくために</h4>
            <ul className="rule-list">
              {ev.reassurance.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        )}

        {(ev.feeTable || ev.payment) && (
          <section className="event-part">
            <h4>参加費</h4>
            {ev.feeTable && (
              <div className="schedule-wrap">
                <table className="schedule-table">
                  <caption className="sr-only">{ev.title}の参加費</caption>
                  <thead>
                    <tr>
                      <th scope="col">区分</th>
                      <th scope="col">初参加（税込）</th>
                      <th scope="col">リピーター（税込）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ev.feeTable.map((row) => (
                      <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        <td>{row.first}</td>
                        <td>{row.repeat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {ev.payment?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        )}

        {ev.belongings && (
          <section className="event-part">
            <h4>持ち物・服装</h4>
            <ul className="rule-list">
              {ev.belongings.map((b) => (
                <li key={b.item}>
                  {b.item}
                  {b.note && <p className="quiet-note">{b.note}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {(ev.weather || ev.cancellation) && (
          <section className="event-part">
            <h4>雨天・キャンセルについて</h4>
            {ev.weather && <p>{ev.weather}</p>}
            {ev.cancellation && (
              <div className="schedule-wrap">
                <table className="schedule-table">
                  <caption className="sr-only">{ev.title}のキャンセル規定</caption>
                  <thead>
                    <tr>
                      <th scope="col">ご連絡の時期</th>
                      <th scope="col">キャンセル料</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ev.cancellation.map((row) => (
                      <tr key={row.when}>
                        <th scope="row">{row.when}</th>
                        <td>{row.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {ev.cancellationNote && <p>{ev.cancellationNote}</p>}
          </section>
        )}

        {ev.host && (
          <section className="event-part">
            <h4>主催</h4>
            <p>
              <strong>{ev.host.name}</strong>｜{ev.host.role}
              <br />
              <span className="quiet-note">{ev.host.credentials}</span>
            </p>
            <p>{ev.host.bio}</p>
            {ev.host.closing && (
              <p className="event-closing">
                {ev.host.closing.map((line) => <span key={line}>{line}</span>)}
              </p>
            )}
          </section>
        )}

        {(ev.flow || ev.host) && (
          <section className="event-part">
            <h4>お申し込み・お問い合わせ</h4>
            <ApplyLink ev={ev} />
            {site.lineUrl && (
              <p>
                ご不明な点や気になることがございましたら、
                <a href={site.lineUrl} target="_blank" rel="noopener noreferrer">廣瀬診療所の公式LINE</a>
                よりお気軽にお問い合わせください。個別にご案内いたします。
              </p>
            )}
          </section>
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

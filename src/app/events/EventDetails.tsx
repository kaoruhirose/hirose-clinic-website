import { TextLink } from "@/components/Editorial";
import type { ClinicEvent } from "@/lib/events";
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

export default function EventDetails({ ev }: { ev: ClinicEvent }) {
  const timeParts = ev.time.split(/(?=（)/);
  return (
    <article className="event-article">
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
          <h2>当日の流れ</h2>
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
          <h2>こんな方へ</h2>
          <ul className="rule-list">
            {ev.audience.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      )}

      {ev.reassurance && (
        <section className="event-part">
          <h2>安心して歩いていただくために</h2>
          <ul className="rule-list">
            {ev.reassurance.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      )}

      {(ev.feeTable || ev.payment) && (
        <section className="event-part">
          <h2>参加費</h2>
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
          <h2>持ち物・服装</h2>
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
          <h2>雨天・キャンセルについて</h2>
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
          <h2>主催</h2>
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
          <h2>お申し込み・お問い合わせ</h2>
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
  );
}


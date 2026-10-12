import LineText from "@/components/LineText";
import Image from "next/image";
import { EditorialSection, PageIntro, Photo, TextLink } from "@/components/Editorial";
import { photos } from "@/lib/photos";
import { site, phoneDisplay } from "@/lib/site";

export default function Access() {
  return (
    <div className="page-shell">
      <div className="container">
        <PageIntro eyebrow="ご予約・アクセス" title={<><span className="text-unit">桜山の高台で、</span><br /><span className="text-unit">お待ちしています。</span></>} english="A quiet welcome on the hills of Sakurayama.">
          <p>廣瀬診療所は、逗子・桜山の住宅街にある完全予約制の診療所です。ご来院の前に、ご予約とアクセスのご案内をご確認ください。</p>
        </PageIntro>

        <Photo photo={photos.clinic} />

        <EditorialSection id="reservation" label="はじめての方へ" title="ご予約・お申し込み">
          <div className="prose">
            {site.lineUrl ? (
              <>
                <p><LineText>診療のご予約、サーフセラピーのお申し込み、フィールドワークについてのご質問は、廣瀬診療所の公式LINEで承っています。</LineText></p>
                <div className="line-registration">
                  <figure id="line-qr" className="line-qr scroll-mt-24">
                    <Image src="/images/line-friend-qr.svg" width={132} height={132} unoptimized alt="廣瀬診療所の公式LINEを友だち追加するQRコード" />
                    <figcaption>廣瀬診療所 公式LINE</figcaption>
                  </figure>
                  <div className="line-registration-copy">
                    <TextLink href={site.lineUrl} external>友だち追加</TextLink>
                    <p className="quiet-note">追加後、ご用件をメッセージでお送りください。</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p>
                  ご予約についてはお電話でお問い合わせください。
                </p>
                <p>
                  {site.phone ? (
                    <TextLink href={`tel:${site.phone}`}>{phoneDisplay}</TextLink>
                  ) : (
                    phoneDisplay
                  )}
                </p>
              </>
            )}
          </div>
        </EditorialSection>

        <EditorialSection label="診療時間" title="ご来院の時間">
          <div className="schedule-wrap">
            <table className="schedule-table schedule-table--hours">
              <caption className="sr-only">廣瀬診療所の曜日別診療時間</caption>
              <thead>
                <tr>
                  <th scope="col">診療時間</th>
                  <th scope="col">月</th>
                  <th scope="col">火</th>
                  <th scope="col">水</th>
                  <th scope="col">木</th>
                  <th scope="col">金</th>
                  <th scope="col">土</th>
                  <th scope="col">日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="block sm:inline">09:00</span>
                    <span className="block sm:inline">〜13:00</span>
                  </th>
                  <td><span className="slot" role="img" aria-label="診療" /></td>
                  <td><span className="slot" role="img" aria-label="診療" /></td>
                  <td className="slot-closed">休</td>
                  <td className="slot-closed">休</td>
                  <td><span className="slot" role="img" aria-label="診療" /></td>
                  <td><span className="slot" role="img" aria-label="診療" /></td>
                  <td className="slot-closed">休</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="block sm:inline">15:00</span>
                    <span className="block sm:inline">〜18:30</span>
                  </th>
                  <td><span className="slot" role="img" aria-label="診療" /></td>
                  <td><span className="slot" role="img" aria-label="診療" /></td>
                  <td className="slot-closed">休</td>
                  <td className="slot-closed">休</td>
                  <td><span className="slot" role="img" aria-label="診療" /></td>
                  <td><span className="slot slot--limited" role="img" aria-label="予約診療（自費診療のみ）" />※</td>
                  <td className="slot-closed">休</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="quiet-note">
            <p>休診日：水曜・木曜・日曜・祝日</p>
            <p><span className="slot slot--limited" aria-hidden="true" />※ 土曜午後は予約診療（自費診療のみ）となります。</p>
          </div>
        </EditorialSection>

        <EditorialSection label="アクセス" title="診療所への道のり">
          <dl className="detail-list">
            <div>
              <dt>所在地</dt>
              <dd>
                <p>〒{site.postalCode}<br />{site.address}</p>
                <p className="quiet-note"><LineText>詳しい住所は、ご予約の確定後に公式LINEでお知らせします。</LineText></p>
              </dd>
            </div>
            <div>
              <dt>電車・バス</dt>
              <dd>
                <p>JR横須賀線「逗子駅」または京急逗子線「逗子・葉山駅」が最寄りです。両駅から京急バス（葉山方面行き）が便利です。</p>
                <ul className="rule-list">
                  <li>逗子駅／逗子・葉山駅方面から：「切り通し下」バス停で下車</li>
                  <li>葉山方面から：「鐙摺（あぶずり）」バス停で下車</li>
                </ul>
              </dd>
            </div>
          </dl>
        </EditorialSection>

        <EditorialSection id="contact" label="お問い合わせ" title="お電話でのご連絡">
          <dl className="detail-list">
            <div>
              <dt>お問い合わせ</dt>
              <dd>
                {site.phone ? (
                  <TextLink href={`tel:${site.phone}`}>{phoneDisplay}</TextLink>
                ) : (
                  phoneDisplay
                )}
              </dd>
            </div>
            <div>
              <dt>受付時間</dt>
              <dd>{site.phoneHours}</dd>
            </div>
          </dl>
          <p className="quiet-note">
            {site.lineUrl
              ? <LineText>{"ご予約・お申し込みは、公式LINEで承っています。"}</LineText>
              : "ご予約についてはお電話でお問い合わせください。"}
          </p>
        </EditorialSection>
      </div>
    </div>
  );
}

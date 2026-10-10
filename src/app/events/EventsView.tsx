import Link from "next/link";
import { PageIntro } from "@/components/Editorial";

export default function EventsView() {
  return (
    <div className="page-shell fieldwork-index">
      <div className="container">
        <PageIntro title={<><span className="text-unit">フィールドワーク</span><span className="text-unit"> ／ 自然処方</span></>} english="Field work ／ Nature Prescription" />
        <ul className="fieldwork-list">
          <li>
            <Link href="/events/barefoot-hike">
              <span className="fieldwork-label"><span className="fieldwork-marker" aria-hidden="true">-</span><span><span className="text-unit">裸足で海と山を歩く会</span><span className="text-unit"> ／ 裸足ハイク</span></span></span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
          <li>
            <Link href="/events/surf-therapy">
              <span className="fieldwork-label"><span className="fieldwork-marker" aria-hidden="true">-</span><span><span className="text-unit">海と波と</span><span className="text-unit">サーフセラピー</span></span></span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

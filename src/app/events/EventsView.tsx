import Link from "next/link";
import { PageIntro } from "@/components/Editorial";

export default function EventsView() {
  return (
    <div className="page-shell">
      <div className="container">
        <PageIntro title="フィールドワーク" english="Field work" />
        <ul className="fieldwork-list">
          <li>
            <Link href="/events/barefoot-hike">
              <span><span className="text-unit">裸足で海と山を歩く会</span><span className="text-unit"> ／ 裸足ハイク</span></span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
          <li>
            <Link href="/events/surf-therapy">
              <span><span className="text-unit">海と波と</span><span className="text-unit">サーフセラピー</span></span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

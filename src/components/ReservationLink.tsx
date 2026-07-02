import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

/**
 * 予約ボタンの共通リンク。
 * 外部予約システムのURL（site.reservationUrl）が確定するまでは、
 * デッドリンクにせず予約案内ページ（/access）へ誘導する。
 */
export default function ReservationLink({ className, children, onClick }: Props) {
  if (site.reservationUrl) {
    return (
      <a
        href={site.reservationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href="/access" className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

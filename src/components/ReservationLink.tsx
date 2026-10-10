import { site } from "@/lib/site";

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

/**
 * 予約ボタンの共通リンク。
 * サイト内の予約案内へ進み、QRコード・友だち追加ボタンを表示する。
 */
export default function ReservationLink({ className, children, onClick }: Props) {
  return (
    <a href={site.reservationUrl} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

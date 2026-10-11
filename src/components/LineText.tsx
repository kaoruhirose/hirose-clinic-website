import { Fragment } from "react";

/** 本文中の「公式LINE」を、お問い合わせページのQRコードへ案内する。 */
export default function LineText({ children }: { children: string }) {
  const parts = children.split("公式LINE");
  return parts.map((part, index) => (
    <Fragment key={index}>
      {index > 0 && <a href="/access#line-qr" className="underline">公式LINE</a>}
      {part}
    </Fragment>
  ));
}

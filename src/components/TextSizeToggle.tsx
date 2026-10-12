"use client";

import { useSyncExternalStore } from "react";
import { TEXT_SIZE_KEY } from "@/lib/textSize";

// 文字サイズ「標準／大」の切り替え。選んだ大きさは <html data-text-size> に反映し、
// その端末だけに覚えておく（どこにも送らない）。最初の表示は layout.tsx の textSizeScript が先に反映する。
type TextSize = "standard" | "large";

const listeners = new Set<() => void>();
const subscribe = (fn: () => void) => { listeners.add(fn); return () => { listeners.delete(fn); }; };
const getSnapshot = (): TextSize => document.documentElement.dataset.textSize === "large" ? "large" : "standard";
const getServerSnapshot = (): TextSize => "standard";

function setTextSize(size: TextSize) {
  if (size === "large") document.documentElement.dataset.textSize = "large";
  else delete document.documentElement.dataset.textSize;
  try { localStorage.setItem(TEXT_SIZE_KEY, size); } catch {}
  listeners.forEach(fn => fn());
}

// kana：PC上部用の「あ / あ」表記（見出しなし）。読み上げでは「標準」「大」と伝える。
export default function TextSizeToggle({ className = "", label = "文字サイズ", kana = false }: { className?: string; label?: string; kana?: boolean }) {
  const size = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <div className={`text-size-toggle ${className}`} role="group" aria-label="文字サイズ">
      {!kana && <span className="text-size-label" aria-hidden="true">{label}</span>}
      <button type="button" aria-pressed={size === "standard"} aria-label={kana ? "標準" : undefined} onClick={() => setTextSize("standard")}>{kana ? "あ" : "標準"}</button>
      {kana && <span className="text-size-slash" aria-hidden="true">/</span>}
      <button type="button" aria-pressed={size === "large"} aria-label={kana ? "大" : undefined} onClick={() => setTextSize("large")}>{kana ? "あ" : "大"}</button>
    </div>
  );
}

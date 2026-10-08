"use client";

import { useState } from "react";
import HomeHero, { type WordmarkPosition } from "@/components/HomeHero";

const options: { value: WordmarkPosition; title: string; description: string }[] = [
  { value: "side", title: "左脇に縦書き", description: "漢字にそっと添えて、縦の流れを揃える。" },
  { value: "above", title: "上に横書き", description: "屋号の上に小さな英字を。すっきりと端正な印象。" },
  { value: "below", title: "下に横書き", description: "採用した配置。屋号の下に、HIROSESHINRYOJOをひと続きで添える。" },
  { value: "diagonal", title: "右斜め下に横書き", description: "余白へ少しずらして。左右の非対称を楽しむ、軽やかな配置。" },
];

export default function WordmarkStudy() {
  const [position, setPosition] = useState<WordmarkPosition>("below");
  return <><div className="wordmark-study-controls"><h1>屋号の配置を比べる</h1><fieldset><legend className="sr-only">アルファベットの位置</legend>{options.map((option, i) => <label key={option.value}><input type="radio" name="wordmark-position" value={option.value} checked={position === option.value} onChange={() => setPosition(option.value)} /><span><small>0{i + 1}</small>{option.title}</span></label>)}</fieldset><p aria-live="polite">{options.find(option => option.value === position)?.description}</p></div><HomeHero position={position} study /></>;
}

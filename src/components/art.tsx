/**
 * サイト専用に描き起こしたSVGアートワーク。
 * 写真が用意できていない箇所を、AI生成画像ではなく
 * ブランドカラーによる意匠で埋めるためのコンポーネント群。
 * 色は globals.css の @theme トークンと同じ値を用いる。
 */

const C = {
  base: "#f7f5f0",
  subtle: "#e0f0e9",
  blue: "#1c3c5a",
  green: "#2a5d3e",
  gold: "#b08b4f",
};

/** 漢方・生薬をモチーフにした植物画（お悩みセクション等のパネル用） */
export function KampoArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      role="img"
      aria-label="漢方をイメージした植物の意匠"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="kampo-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbf9f4" />
          <stop offset="100%" stopColor="#f1ede2" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#kampo-bg)" />

      {/* 背景の円環（縁起の円） */}
      <circle cx="205" cy="245" r="150" fill="none" stroke={C.green} strokeOpacity="0.14" strokeWidth="1.5" />
      <circle cx="205" cy="245" r="118" fill={C.subtle} fillOpacity="0.28" />

      {/* 主茎 */}
      <path
        d="M 128 452 C 150 372 178 306 226 224 C 254 176 272 136 279 92"
        fill="none"
        stroke={C.green}
        strokeWidth="3"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
      {/* 副茎 */}
      <path
        d="M 150 452 C 176 396 214 350 268 306"
        fill="none"
        stroke={C.green}
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />

      {/* 葉（主茎に沿って交互に） */}
      <g fill={C.green}>
        <path d="M 168 332 Q 128 318 104 330 Q 128 356 168 332 Z" fillOpacity="0.75" />
        <path d="M 196 276 Q 238 258 266 268 Q 240 296 196 276 Z" fillOpacity="0.6" />
        <path d="M 150 388 Q 116 380 96 392 Q 118 412 150 388 Z" fillOpacity="0.5" />
        <path d="M 236 208 Q 274 190 300 198 Q 276 226 236 208 Z" fillOpacity="0.7" />
        <path d="M 214 244 Q 178 230 156 240 Q 178 264 214 244 Z" fillOpacity="0.45" />
        <path d="M 262 148 Q 296 132 318 140 Q 296 166 262 148 Z" fillOpacity="0.55" />
      </g>

      {/* 副茎の小葉 */}
      <g fill={C.green} fillOpacity="0.35">
        <path d="M 208 356 Q 240 344 260 352 Q 240 374 208 356 Z" />
        <path d="M 240 326 Q 268 314 286 322 Q 268 342 240 326 Z" />
      </g>

      {/* 実・種子 */}
      <g fill={C.gold}>
        <circle cx="279" cy="84" r="7" fillOpacity="0.9" />
        <circle cx="296" cy="102" r="5" fillOpacity="0.7" />
        <circle cx="262" cy="98" r="4" fillOpacity="0.6" />
        <circle cx="286" cy="122" r="3.5" fillOpacity="0.5" />
      </g>

      {/* 漂う種のアクセント */}
      <g stroke={C.blue} strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" fill="none">
        <path d="M 96 150 q 8 -10 20 -8" />
        <path d="M 120 118 q 8 -10 20 -8" />
        <path d="M 322 388 q 8 -10 20 -8" />
      </g>
    </svg>
  );
}

/** 円相（えんそう）と水平線 — ヨガ・メディテーションの静けさを表す意匠 */
export function EnsoArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      role="img"
      aria-label="円相と水平線 — 瞑想をイメージした意匠"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="enso-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbf9f4" />
          <stop offset="70%" stopColor="#f3efe4" />
          <stop offset="100%" stopColor="#e9ecdf" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#enso-bg)" />

      {/* 水平線（海） */}
      <line x1="0" y1="300" x2="400" y2="300" stroke={C.blue} strokeOpacity="0.25" strokeWidth="1.5" />
      <g stroke={C.green} strokeOpacity="0.18" strokeWidth="1.2" fill="none">
        <path d="M 30 330 q 30 -8 60 0 t 60 0 t 60 0" />
        <path d="M 210 358 q 30 -8 60 0 t 60 0" />
        <path d="M 60 388 q 30 -8 60 0 t 60 0" />
      </g>

      {/* 朝日 */}
      <circle cx="200" cy="252" r="34" fill={C.gold} fillOpacity="0.55" />

      {/* 円相：筆の運びを模した一筆の円（右上に開き） */}
      <circle
        cx="200"
        cy="250"
        r="132"
        fill="none"
        stroke={C.blue}
        strokeOpacity="0.82"
        strokeWidth="9"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray="90 10"
        strokeDashoffset="-13"
      />
      <circle
        cx="200"
        cy="250"
        r="132"
        fill="none"
        stroke={C.blue}
        strokeOpacity="0.28"
        strokeWidth="14"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray="60 40"
        strokeDashoffset="-24"
      />

      {/* 海鳥 */}
      <g stroke={C.blue} strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M 96 128 q 7 -8 14 0 q 7 -8 14 0" />
        <path d="M 300 100 q 6 -7 12 0 q 6 -7 12 0" />
      </g>
    </svg>
  );
}

/**
 * 逗子の高台から望む相模湾・富士山・江ノ島の遠景。
 * オンライン診療ページ等の背景として低コントラストで敷く。
 */
export function ZushiSceneArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 600"
      className={className}
      role="img"
      aria-label="逗子の高台から望む富士山と江ノ島の遠景の意匠"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="scene-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f9f7f1" />
          <stop offset="72%" stopColor="#f6efdd" />
          <stop offset="100%" stopColor="#f2e6cd" />
        </linearGradient>
        <linearGradient id="scene-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dfe7e0" />
          <stop offset="100%" stopColor="#c5d6cc" />
        </linearGradient>
      </defs>

      <rect width="1440" height="420" fill="url(#scene-sky)" />
      <rect y="420" width="1440" height="180" fill="url(#scene-sea)" />

      {/* 夕日 */}
      <circle cx="920" cy="330" r="52" fill={C.gold} fillOpacity="0.5" />

      {/* たなびく雲 */}
      <g fill="#ffffff" fillOpacity="0.55">
        <ellipse cx="380" cy="150" rx="190" ry="14" />
        <ellipse cx="640" cy="110" rx="130" ry="10" />
        <ellipse cx="1080" cy="180" rx="220" ry="13" />
        <ellipse cx="880" cy="250" rx="150" ry="9" />
      </g>

      {/* 富士山の稜線 */}
      <path
        d="M 60 420 C 250 404 330 340 416 218 Q 452 190 488 218 C 574 340 654 404 844 420 Z"
        fill={C.blue}
        fillOpacity="0.2"
      />
      {/* 山頂の雪 */}
      <path
        d="M 416 218 Q 452 190 488 218 C 478 236 466 240 452 232 C 438 240 426 236 416 218 Z"
        fill="#ffffff"
        fillOpacity="0.75"
      />

      {/* 海霞 */}
      <rect y="392" width="1440" height="34" fill="#ffffff" fillOpacity="0.4" />

      {/* 江ノ島と灯台 */}
      <g>
        <path d="M 1096 420 C 1130 400 1194 394 1236 404 L 1270 420 Z" fill={C.blue} fillOpacity="0.34" />
        <rect x="1198" y="376" width="5" height="24" fill={C.blue} fillOpacity="0.5" />
        <circle cx="1200.5" cy="373" r="4" fill={C.blue} fillOpacity="0.5" />
      </g>

      {/* さざ波 */}
      <g stroke={C.blue} strokeOpacity="0.14" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M 120 470 q 40 -10 80 0 t 80 0 t 80 0" />
        <path d="M 640 505 q 40 -10 80 0 t 80 0" />
        <path d="M 1020 480 q 40 -10 80 0 t 80 0" />
        <path d="M 300 545 q 40 -10 80 0 t 80 0" />
        <path d="M 900 555 q 40 -10 80 0 t 80 0" />
      </g>

      {/* 海鳥 */}
      <g stroke={C.blue} strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M 250 240 q 9 -10 18 0 q 9 -10 18 0" />
        <path d="M 320 280 q 7 -8 14 0 q 7 -8 14 0" />
        <path d="M 1150 260 q 8 -9 16 0 q 8 -9 16 0" />
      </g>
    </svg>
  );
}

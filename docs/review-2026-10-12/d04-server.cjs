// 文字サイズ（標準／大）比較用の中継サーバー（確認専用・本番には使わない）。
// /__d04 で比較画面を返し、それ以外は手元の確認用サイト（npm run dev）へ中継する。
// 比較画面と中のページを同じ住所にすることで、左右で文字サイズを切り替えて並べられる。
/* eslint-disable @typescript-eslint/no-require-imports -- node で直接動かす .cjs のため */
const http = require("http");
const net = require("net");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3121);
const TARGET_PORT = Number(process.env.TARGET_PORT || 3000);
// 比較画面の住所 → 資料ファイル
const PAGES = {
  "/__d04": "d04-compare.html",
  "/__header": "text-size-header-compare.html",
  "/__demo": "text-size-demo.html",
};

// 確認用サイトは「よそからの読み込み」を防ぐため、中継時は手元のサイトから来たように見せる
const upstreamHeaders = (h) => {
  const out = { ...h, host: `localhost:${TARGET_PORT}` };
  const swap = (v) => v && v.replace(`127.0.0.1:${PORT}`, `localhost:${TARGET_PORT}`);
  if (out.origin) out.origin = swap(out.origin);
  if (out.referer) out.referer = swap(out.referer);
  return out;
};

const server = http.createServer((req, res) => {
  const page = PAGES[req.url.replace(/\/$/, "")];
  if (page) {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" });
    fs.createReadStream(path.join(__dirname, page)).pipe(res);
    return;
  }
  const upstream = http.request(
    { host: "127.0.0.1", port: TARGET_PORT, path: req.url, method: req.method, headers: upstreamHeaders(req.headers) },
    (r) => { res.writeHead(r.statusCode || 502, r.headers); r.pipe(res); },
  );
  upstream.on("error", () => { res.writeHead(502); res.end("確認用サイト（npm run dev）が起動していません"); });
  req.pipe(upstream);
});

// 確認用サイトの自動更新（WebSocket）もそのまま中継する
server.on("upgrade", (req, socket, head) => {
  const up = net.connect(TARGET_PORT, "127.0.0.1", () => {
    const headers = Object.entries(upstreamHeaders(req.headers)).map(([k, v]) => `${k}: ${v}`).join("\r\n");
    up.write(`${req.method} ${req.url} HTTP/1.1\r\n${headers}\r\n\r\n`);
    if (head && head.length) up.write(head);
    up.pipe(socket); socket.pipe(up);
  });
  up.on("error", () => socket.destroy());
  socket.on("error", () => up.destroy());
});

server.listen(PORT, "127.0.0.1", () => console.log(`比較: http://127.0.0.1:${PORT}/__d04 ・ http://127.0.0.1:${PORT}/__header`));

// 試作と既存の写真だけを、このMac内に配信する確認用サーバー。
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const routes = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ...['a', 'b', 'c'].map(name => [`/${name}.html`, [`${name}.html`, 'text/html; charset=utf-8']]),
  ['/study.js', ['study.js', 'text/javascript; charset=utf-8']],
  ...['hero-wide', 'hero-mobile', 'hero'].map(name => [`/images/${name}.jpg`, [`../public/images/${name}.jpg`, 'image/jpeg']]),
]);
const port = Number(process.env.DESIGN_STUDY_PORT || 4173);
const server = createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, {Allow:'GET, HEAD'}); res.end(); return; }
  let route;
  try { route = routes.get(new URL(req.url, 'http://127.0.0.1').pathname); }
  catch { res.writeHead(400); res.end(); return; }
  if (!route) { res.writeHead(404); res.end('Not found'); return; }
  try {
    const content = await readFile(fileURLToPath(new URL(route[0], import.meta.url)));
    res.writeHead(200, {'Content-Type':route[1], 'Cache-Control':'no-store', 'X-Robots-Tag':'noindex, nofollow', 'X-Content-Type-Options':'nosniff'});
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch { res.writeHead(404); res.end('Not found'); }
});
server.listen(port, '127.0.0.1', () => { console.log(`Design studies: http://127.0.0.1:${port}`); });

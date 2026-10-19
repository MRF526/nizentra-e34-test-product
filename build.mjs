import { mkdirSync, writeFileSync } from "node:fs";
const page = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>E34 test product</title>
<style>body{font-family:system-ui,sans-serif;max-width:40rem;margin:3rem auto;padding:0 1rem;color:#222}h1{color:#7a3e00}li{margin:.3rem 0}</style></head>
<body><h1>Hello from the E34 test product</h1>
<p>[SYNTHETIC] Corner Bakery: fresh bread every morning.</p>
<ul><li>Sourdough loaf</li><li>Rye bread</li><li>Cinnamon rolls (weekends)</li></ul>
<p>Open 7:00????????15:00, Monday to Saturday.</p></body></html>
`;
mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.html", page);

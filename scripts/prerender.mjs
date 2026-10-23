import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { createServer } from 'vite';

const server = await createServer({
  configFile: 'vite.config.ts',
  server: { middlewareMode: true },
  appType: 'custom',
});

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function updateMeta(html, attribute, key, content) {
  const selector = `<meta ${attribute}="${key}"`;
  const regex = new RegExp(`<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*\\/?\\s*>`);
  const tag = `${selector} content="${escapeHtml(content)}" />`;
  if (regex.test(html)) return html.replace(regex, tag);
  return html.replace('</head>', `    ${tag}\n  </head>`);
}

function makePage(template, markup, metadata, imageUrl, noindex = false) {
  let html = template.replace('<!--app-html-->', markup);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(metadata.title)}</title>`);
  html = updateMeta(html, 'name', 'description', metadata.description);
  html = updateMeta(html, 'property', 'og:title', metadata.title);
  html = updateMeta(html, 'property', 'og:description', metadata.description);
  html = updateMeta(html, 'property', 'og:image', imageUrl);
  html = updateMeta(html, 'name', 'twitter:title', metadata.title);
  html = updateMeta(html, 'name', 'twitter:description', metadata.description);
  html = updateMeta(html, 'name', 'twitter:image', imageUrl);
  if (noindex) html = updateMeta(html, 'name', 'robots', 'noindex,follow');
  else html = html.replace(/\s*<meta\s+name="robots"\s+content="[^"]*"\s*\/?\s*>/g, '');
  return html;
}

try {
  const { render } = await server.ssrLoadModule('/src/entry-server.tsx');
  const { siteRoutes, notFoundRoute } = await server.ssrLoadModule('/src/routes.ts');
  const { trust } = await server.ssrLoadModule('/src/content.ts');
  const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  const dist = new URL('../dist/', import.meta.url);
  const pages = [
    ...siteRoutes.map((route) => ({ path: route.href, metadata: route, noindex: false })),
    { path: '/404/', metadata: notFoundRoute, noindex: true },
  ];

  for (const page of pages) {
    const markup = render(page.path);
    const html = makePage(template, markup, page.metadata, trust.emblemPublicUrl, page.noindex);
    const routeDirectory = page.path === '/' ? '' : page.path.replace(/^\/+|\/+$/g, '');
    const outputPath = resolve(new URL(routeDirectory ? `${routeDirectory}/index.html` : 'index.html', dist).pathname);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, 'utf8');
    console.log(`Prerendered ${page.path} to ${join(routeDirectory || '.', 'index.html')}`);
  }
} finally {
  await server.close();
}

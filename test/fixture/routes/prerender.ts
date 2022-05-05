import { appendHeader } from 'h3'

export default defineEventHandler((event) => {
  const links = [
    'https://about.google/products/',
    '/api/hello',
    '/api/hello?bar=baz',
    '/prerender#foo',
    '../api/hey'
  ]

  appendHeader(event, 'X-Nitro-Prerender', '/api/param/prerender1, /api/param/prerender2')
  appendHeader(event, 'X-Nitro-Prerender', '/api/param/prerender3')

  return `
    <ul>
    ${links.map(link => `<li><a href="${link}">${link}</a></li>`).join('\n')}
  `
})

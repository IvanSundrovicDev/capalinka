import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve } from 'node:path'

const root = resolve(process.cwd(), '.output', 'public')
const port = Number(process.env.PORT || 3000)

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json',
}

async function resolveFile(pathname) {
  const safePath = normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, '')
  let filePath = resolve(root, `.${safePath}`)

  if (!filePath.startsWith(root)) return null

  try {
    const info = await stat(filePath)
    if (info.isDirectory()) {
      filePath = join(filePath, 'index.html')
      const indexInfo = await stat(filePath)
      if (!indexInfo.isFile()) return null
    } else if (!info.isFile()) {
      return null
    }
    return filePath
  } catch {
    return null
  }
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`)
  let pathname = decodeURIComponent(url.pathname)
  if (pathname === '/') pathname = '/index.html'

  let filePath = await resolveFile(pathname)
  let statusCode = 200

  if (!filePath) {
    filePath = await resolveFile('/404.html')
    statusCode = 404
  }

  if (!filePath) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Not found. Run npm run generate first.')
    return
  }

  const extension = extname(filePath).toLowerCase()
  const immutable = filePath.includes(`${join('_nuxt')}`) || filePath.includes(`${join('images')}`)
  response.writeHead(statusCode, {
    'Content-Type': mimeTypes[extension] || 'application/octet-stream',
    'Cache-Control': immutable
      ? 'public, max-age=31536000, immutable'
      : 'public, max-age=0, must-revalidate',
  })

  if (request.method === 'HEAD') {
    response.end()
    return
  }

  createReadStream(filePath).pipe(response)
})

server.listen(port, () => {
  console.log(`Previewing static build at http://localhost:${port}`)
})

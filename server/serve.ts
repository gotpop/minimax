import { log } from "./logging"
import { router } from "./router"

const PORT = 9000

try {
  Bun.serve({
    hostname: "::",
    port: process.env.PORT ?? PORT,
    async fetch(request) {
      const url = new URL(request.url)

      if (url.pathname.startsWith("/assets")) {
        const pathRenamedToPublic = `./public${url.pathname}`
        const file = await Bun.file(pathRenamedToPublic)

        if (file) {
          return new Response(file, {
            headers: {
              "Cache-Control": "max-age=31536000",
            },
          })
        } else {
          return new Response("Not Found", { status: 404 })
        }
      }

      const route = router.match(request)

      if (!route) {
        return new Response("Not Found", { status: 404 })
      }

      const module = await import(route.filePath)
      const response = await module.default()

      return new Response(response, {
        headers: { "Content-Type": "text/html" },
      })
    },
  })

  log.listening("Listening on port:", `${PORT}`)
} catch (error) {
  log.error("Failed to start server:", error)
}

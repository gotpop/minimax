export function handleGetAssets(url: URL) {
  const pathRenamedToPublic = `./public${url.pathname}`
  const file = Bun.file(pathRenamedToPublic)

  const headers = {
    "Cache-Control": "max-age=31536000",
  }

  return new Response(file ?? "Not Found", {
    status: file ? 200 : 404,
    headers: headers ?? {},
  })
}

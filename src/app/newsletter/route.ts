import { newsletterSchema } from "~/utils/schemas"

import { type NextRequest } from "next/server"

export const POST = async (request: NextRequest) => {
  const data = await request.json()

  newsletterSchema.parse(data)

  // eslint-disable-next-line no-console
  console.log("POST /api/newsletter", data)
  return new Response("POST /api/newsletter")
}

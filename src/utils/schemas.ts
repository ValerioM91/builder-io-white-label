import { z } from "zod"

export const newsletterSchema = z.object({
  email: z.string().email(),
})
type newsletterSchema = z.infer<typeof newsletterSchema>

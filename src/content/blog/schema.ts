import { z } from "astro:content"

export const blogSchema = {
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        content: z.string()
    }),
}

import { z } from "astro:content"


export const landingPageSchema = {
    schema: z.object({
        title: z.string(),
    }),
}

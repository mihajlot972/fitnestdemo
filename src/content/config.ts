// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

import { landingPageSchema } from './landingPage/schema';
import { blogSchema } from './blog/schema';

// 2. Define your collection(s)
const landingCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: landingPageSchema
});

const blogCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: blogSchema
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'landing': landingCollection,
    'blogcollection': blogCollection
};
import { MdInfo } from 'react-icons/md';

export default {
    name: 'seoInformation',
    title: 'SEO Information',
    type: 'object',
    icon: MdInfo,
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            description: 'SEO-optimized page title.',
            type: 'string',
        },
        {
            title: 'SLUG',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'seoInformation.title',
                maxLength: 200,
                slugify: (input: string) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200),
                isUnique: () => true,
            },
            description: 'URL-friendly version of the page title for better SEO.',
        },
        {
            name: 'metaDescription',
            title: 'Meta Description',
            description: 'Short description that appears in search engine results. Aim for 150-160 characters.',
            type: 'text',
        },
        {
            name: 'metaImage',
            title: 'Meta Image',
            description: 'Image displayed in search engine results and social media shares.',
            type: 'image',
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'slug.current',
        },
    },
};

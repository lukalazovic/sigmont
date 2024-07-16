import { MdInfo } from 'react-icons/md';

export default {
    name: 'seoInformation',
    title: 'SEO info',
    type: 'object',
    icon: MdInfo,
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            description: 'SEO optimized page title',
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
                    .slice(0, 200)
            }
        },
        {
            name: 'metaDescription',
            title: 'Meta description',
            description: 'Short description that is displayed in search engine results',
            type: 'text',
        },
        {
            name: 'metaImage',
            title: 'Meta image',
            description: 'Image that is displayed in search engine results and social media posts.',
            type: 'image',
        }
    ],
    preview: {
        input: {
            title: 'slug',
        }
    }
};
export default {
    name: 'seoSettings',
    title: 'SEO Settings',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Site name title',
            type: 'string',
            description: 'Place here Your Site name title.',
        },
        {
            name: 'description',
            title: 'Meta Description',
            type: 'text',
            description: 'A brief description of the site for search engines and social media.',
        },
        {
            name: 'keywords',
            title: 'Meta Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Comma-separated list of keywords relevant to the site.',
        },
        {
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            description: 'A small icon that represents the site, usually displayed in the browser tab.',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'ogImage',
            title: 'Open Graph Image',
            type: 'image',
            description: 'Image used when the site is shared on social media platforms.',
            options: {
                hotspot: true,
            },
        },
    ]
}
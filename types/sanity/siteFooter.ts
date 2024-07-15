export default {
    name: 'siteFooter',
    title: 'Site footer',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Text',
            description: 'Text box for more info that will be placed in footer',
            type: 'text',
        },
        {
            name: 'showSocial',
            title: 'Show Social Icons',
            type: 'boolean',
            default: true,
        },
        {
            name: 'mainNavigation',
            title: 'Links Collection',
            type: 'reference',
            to: { type: 'navigation' },
        },
        {
            name: 'subFooter',
            title: 'Sub footer',
            type: 'string',
        }
    ]
}
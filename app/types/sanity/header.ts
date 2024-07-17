export default {
    name: 'siteHeader',
    title: 'Site header',
    type: 'object',
    fields: [
        {
            name: 'mainNavigation',
            title: 'Main Menu',
            type: 'reference',
            to: { type: 'navigation' },
        }
    ]
}
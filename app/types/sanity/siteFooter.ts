export default {
    name: 'siteFooter',
    title: 'Site Footer',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: "Optional footer heading. Leave blank if not needed.",
        },
        {
            name: 'showFooterLogo',
            title: 'Display Logo',
            type: 'boolean',
            description: "Toggle to display the logo below the heading.",
            initialValue: true,
        },
        {
            name: 'text',
            title: 'Description',
            description: 'A brief description about the business.',
            type: 'text',
        },
        {
            name: 'showSocial',
            title: 'Display Social Icons',
            type: 'boolean',
            description: 'Toggle to display social media icons below the description.',
            initialValue: true,
        },
        {
            name: 'mainNavigation',
            title: 'Navigation Links',
            type: 'reference',
            description: 'Reference to a collection of quick navigation links.',
            to: { type: 'navigation' },
        },
        {
            name: 'subFooter',
            title: 'Sub-Footer',
            type: 'string',
            description: 'Text for the sub-footer section at the bottom of the block.',
        }
    ]
}

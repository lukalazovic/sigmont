export default {
    name: 'siteFooter',
    title: 'Site Footer',
    type: 'object',
    fieldsets: [
        {
            name: 'footerNavigation',
            title: 'Footer Navigation',
            options: { collapsible: true, collapsed: true }
        }
    ],
    fields: [
        {
            name: 'showNewsletter',
            title: 'Display Newsletter Block',
            type: 'boolean',
            description: 'Toggle to display the newsletter block at the top of the footer section.',
            initialValue: false,
        },
        {
            name: 'showLogo',
            title: 'Display Logo',
            type: 'boolean',
            description: 'Toggle to display the logo in the footer section below the heading.',
            initialValue: true,
        },
        {
            name: 'showAddress',
            title: 'Display Address',
            type: 'boolean',
            description: 'Toggle to display the main address in the footer.',
            initialValue: false,
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'text',
            description: 'A brief description about the business. This will be displayed in the footer to provide a quick overview to the visitors.',
        },
        {
            name: 'showSocial',
            title: 'Display Social Icons',
            type: 'boolean',
            description: 'Toggle to display social media icons below the description for easy access to your social profiles.',
            initialValue: true,
        },
        {
            name: 'navHeading',
            title: 'Navigation Heading',
            type: 'string',
            description: 'Heading for the navigation links section in the footer.',
            fieldset: 'footerNavigation'
        },
        {
            name: 'mainNavigation',
            title: 'Navigation Links',
            type: 'reference',
            description: 'Reference to a collection of quick navigation links to be displayed in the footer for easy access to important pages. Note: Sub-links cannot be added to these links, only first-level links are allowed.',
            to: { type: 'footerNavigation' },
            fieldset: 'footerNavigation'
        },
        {
            name: 'subFooter',
            title: 'Sub-Footer',
            type: 'string',
            description: 'Text for the sub-footer section at the bottom of the footer block, typically used for legal information or additional links.',
        }
    ]
};

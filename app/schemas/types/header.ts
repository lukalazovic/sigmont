export default {
    name: 'siteHeader',
    title: 'Site Header',
    type: 'object',
    fieldsets: [
        {
            name: 'headerTopBar',
            title: 'Header TopBar Settings',
            options: { collapsible: true, collapsed: true }
        },
        {
            name: 'headerMobile',
            title: 'Header Mobile Settings',
            options: { collapsible: true, collapsed: true }
        },
    ],
    fields: [
        {
            name: 'mainNavigation',
            title: 'Main Menu',
            type: 'array',
            of: [{ type: 'navigationItem'}],
            description: 'This defines the primary menu items displayed on the site.'
        },
        {
            name: 'showPhone',
            title: 'Show Phone Number',
            type: 'boolean',
            description: 'Enable to display the phone number at the top of the header navigation.',
            fieldset: 'headerTopBar'
        },
        {
            name: 'ctaLink',
            type: 'callToAction',
            title: 'CTA Link',
            description: 'Add a link for quick navigation to a page.',
            fieldset: 'headerTopBar'
        },
        {
            name: 'menuSlideDirection',
            title: 'Menu Slide Direction',
            type: 'string',
            options: {
                list: [
                    { title: 'Slide in from Left', value: 'left' },
                    { title: 'Slide in from Right', value: 'right' }
                ],
                layout: 'dropdown',
            },
            description: 'Choose the direction from which the mobile menu will slide in. This affects the animation and positioning of the menu.',
            fieldset: 'headerMobile'
        },
        {
            name: 'mobileHeaderPosition',
            title: 'Mobile Header Position',
            type: 'string',
            options: {
                list: [
                    { title: 'Top', value: 'top' },
                    { title: 'Bottom', value: 'bottom' }
                ],
                layout: 'dropdown',
                default: 'top'
            },
            description: 'Choose the position of the mobile header bar. Default is top.',
            fieldset: 'headerMobile'
        }
    ]
};
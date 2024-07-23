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
    ],
    fields: [
        {
            name: 'mainNavigation',
            title: 'Main Menu',
            type: 'reference',
            to: { type: 'navigation' },
            description: 'Select the main navigation menu to be used in the header. This defines the primary menu items displayed on the site.'
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
            description: 'Choose the direction from which the mobile menu will slide in. This affects the animation and positioning of the menu.'
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
        },
        {
            name: 'showPhone',
            title: 'Show Phone Number',
            type: 'boolean',
            description: 'Enable to display the phone number at the top of the header navigation.',
            fieldset: 'headerTopBar'
        },
        {
            name: 'ctaType',
            title: 'CTA Type',
            type: 'string',
            options: {
                list: [
                    { title: 'CTA Button', value: 'button' },
                    { title: 'CTA Link', value: 'link' }
                ],
                layout: 'dropdown'
            },
            description: 'Choose whether to use a CTA button or a CTA link.',
            fieldset: 'headerTopBar'
        },
        {
            name: 'ctaButtonLabel',
            title: 'CTA Button Label',
            type: 'string',
            description: 'Customize the label for the call to action button. This will be displayed on the button at the top of the header.',
            hidden: ({ parent }: { parent: {ctaType: string} }) => parent?.ctaType !== 'button',
            fieldset: 'headerTopBar'
        },
        {
            name: 'ctaLink',
            type: 'callToAction',
            title: 'CTA Link',
            description: 'Add a link for quick navigation to a page if you prefer not to use the CTA button for opening a modal.',
            hidden: ({ parent }: { parent: {ctaType: string} }) => parent?.ctaType !== 'link',
            fieldset: 'headerTopBar'
        },
    ]
};
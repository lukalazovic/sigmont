export default {
    name: 'siteHeader',
    title: 'Site Header',
    type: 'object',
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
        }
    ]
}

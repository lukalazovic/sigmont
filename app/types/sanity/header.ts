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
      },
      {
        name: 'showPhone',
        title: 'Show Phone Number',
        type: 'boolean',
        description: 'Enable to display the phone number at the top of the header navigation.'
      },
      {
        name: 'showCTAButton',
        title: 'Show Call to Action Button',
        type: 'boolean',
        description: 'Enable to add a call to action button for quickly opening the "Get in Touch" form modal at the top of the header.'
      },
      {
        name: 'ctaButtonLabel',
        title: 'CTA Button Label',
        type: 'string',
        description: 'Customize the label for the call to action button. This will be displayed on the button at the top of the header.',
        hidden: ({ parent }: { parent: { showCTAButton: boolean } }) => !parent?.showCTAButton
      }
    ]
  }
  
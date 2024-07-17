export default {
    name: 'globalSettings',
    title: 'Global Settings',
    type: 'object',
    description: 'Configure global settings for your application, including logos, contact information, and social networks.',
    fieldsets: [
        {
            name: 'logos',
            title: 'Logos Settings',
            options: { collapsible: true, collapsed: true }
        },
        {
            name: 'contactInformation',
            title: 'Main Contact Information Settings',
            options: { collapsible: true, collapsed: true }
        },
        {
            name: 'socialNetworks',
            title: 'Social Networks Settings',
            options: { collapsible: true, collapsed: true }
        }
    ],
    fields: [
        {
            name: 'logo',
            title: 'Desktop Logo',
            type: 'image',
            description: 'Logo displayed throughout your application.',
            options: {
                hotspot: true,
            },
            fieldset: 'logos'
        },
        {
            name: 'mobileLogo',
            title: 'Mobile Logo',
            type: 'image',
            description: 'Optional logo specifically for mobile view.',
            options: {
                hotspot: true,
            },
            // validation: Rule => Rule.optional(),
            fieldset: 'logos'
        },
        {
            name: 'contactInfo',
            title: 'Main Contact Information',
            type: 'contactInfo',
            description: 'Primary contact information for your main office or headquarters.',
            fieldset: 'contactInformation'
        },
        {
            name: 'socialNetworks',
            title: 'Social Networks',
            type: 'socialNetworks',
            description: 'Links to your social media profiles.',
            fieldset: 'socialNetworks'
        }
    ]
}

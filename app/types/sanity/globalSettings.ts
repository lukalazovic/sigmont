export default {
    name: 'globalSettings',
    title: 'Global Settings',
    type: 'object',
    description: 'Configure global settings for your application, including logos, contact information, and social networks.',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: 'Logo displayed throughout your application.',
            options: {
                hotspot: true,
            },
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
        },
        {
            name: 'contactInfo',
            title: 'Main Contact Information',
            type: 'contactInfo',
            description: 'Primary contact information for your main office or headquarters.',
        },
        {
            name: 'socialNetworks',
            title: 'Social Networks',
            type: 'socialNetworks',
            description: 'Links to your social media profiles.',
        }
    ]
}

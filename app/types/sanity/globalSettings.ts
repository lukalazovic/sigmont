export default {
    name: 'globalSettings',
    title: 'Global settings',
    type: 'object',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'mobileLogo',
            title: 'Mobile Logo',
            type: 'image',
            description: 'Optional logo for mobile view.',
            options: {
                hotspot: true,
            },
            // validation: Rule => Rule.optional(),
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
            description: 'Your address.',
        },
        {
            name: 'phone',
            title: 'Phones',
            type: 'array',
            description: 'Your phone number or multiple if You have it.',
            of: [
                {
                    type: 'string'
                }
            ],
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            description: 'Your main email address.',
        },
        {
            name: 'socialNetworks',
            title: 'Social networks',
            type: 'socialNetworks',
        }
    ]
}
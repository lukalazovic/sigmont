export default {
    name: 'globalSettings',
    title: 'Global settings',
    type: 'object',
    fields: [
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phones',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
        },
        {
            name: 'emailSubject',
            title: 'Contact email subject',
            type: 'string',
        },
        {
            name: 'socialNetworks',
            title: 'Social networks',
            type: 'socialNetworks',
        }
    ]
}
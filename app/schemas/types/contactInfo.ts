export default {
    name: 'contactInfo',
    title: 'Contact Information',
    type: 'object',
    description: 'Enter your contact information here, including office details such as the office name, address, phone numbers, and email address.',
    fields: [
        {
            name: 'title',
            title: 'Office Name',
            type: 'string',
            description: 'Name or title of your office or location.',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
            description: 'Physical street address of the office location.',
        },
        {
            name: 'phone',
            title: 'Phones',
            type: 'array',
            description: 'Contact phone number(s) for the office.',
            of: [
                {
                    type: 'string'
                }
            ],
        },
        {
            name: 'email',
            title: 'Email',
            type: 'email',
            description: 'Primary email address for contacting the office.',
        },
    ]
}

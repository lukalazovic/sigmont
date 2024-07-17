export default {
    name: 'contactPageSettings',
    title: 'Contact Page Settings',
    type: 'object',
    description: 'Configure settings for your contact page, including heading, main introduction, and contact information.',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Heading displayed at the top of the contact page.',
        },
        {
            name: 'mainIntro',
            title: 'Main Intro',
            type: 'text',
            description: 'Main introduction text or paragraph displayed on the contact page.',
        },
        {
            name: 'contacts',
            title: 'All Offices or Locations',
            type: 'array',
            description: 'List of offices or locations for your business, including address, phone numbers, and email addresses.',
            of: [
                {
                    type: 'contactInfo'
                }
            ],
        },
    ]
}

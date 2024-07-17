export default {
    name: 'accordionBlock',
    title: 'Accordion block',
    type: 'object',
    groups: [
        { name: 'content', title: 'Content', default: true},
    ],
    fields: [
        {
            name: 'title',
            title: 'Descriptive title',
            description: 'Heading of accordion block',
            type: 'string',
            group: 'content',
        },
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'accordion'
                }
            ],
            group: 'content',
        }
    ]

}
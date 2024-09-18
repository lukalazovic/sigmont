// eslint-disable-next-line import/no-anonymous-default-export
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
            title: 'Heading',
            description: 'Heading of accordion block',
            type: 'string',
            group: 'content',
        },
        {
            name: 'mainIntro',
            title: 'Main Intro',
            description: 'Main intro of accordion block',
            type: 'text',
            group: 'content',
        },
        {
            name: 'items',
            title: 'Accordions',
            type: 'array',
            of: [{ type: 'accordion' }],
            group: 'content',
        }
    ]

}
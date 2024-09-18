export default {
    name: 'accordion',
    title: 'Accordion',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the accordion item.',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
            description: 'Content displayed when the accordion item is expanded.',
        },
    ],
};

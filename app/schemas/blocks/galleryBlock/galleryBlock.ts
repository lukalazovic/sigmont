export default {
    title: 'Gallery block',
    name: 'galleryBlock',
    type: 'object',
    groups: [
        { name: 'content', title: 'Content', default: true },
    ],
    fields: [
        {
            name: 'title',
            title: 'Descriptive title',
            description: 'Enter gallery block descriptive title',
            type: 'string',
            group: 'content',
        },
        {
            name: 'text',
            title: 'Descriptive text',
            description: 'Enter gallery block descriptive text',
            type: 'text',
            group: 'content',
        },
        {
            name: 'items',
            title: 'Gallery images',
            description: 'You can add images',
            type: 'array',
            of: [
                {
                    type: 'imageType',
                },
            ],
            group: 'content',
        }
    ]
};

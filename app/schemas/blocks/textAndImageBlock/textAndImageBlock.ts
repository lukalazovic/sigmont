// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Text and image block',
    name: 'textAndImageBlock',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Descriptive title',
            description: 'Block title',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Text',
            description: 'Enter gallery block descriptive text',
            type: 'text',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            description: 'slika.',
        },
        {
            name: 'imagePosition',
            title: 'image Position',
            type: 'string',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' }
                ],
                layout: 'dropdown',
                default: 'Left'
            },
            description: 'Choose the position of the image. Default is left.',
        }
    ]
};

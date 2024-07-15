export default {
    name: 'imageType',
    title: 'Image',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'image',
            type: 'image',
        },
        {
            name: 'url',
            type: 'reference',
            to: [
                { type: 'landing', title: 'Landing page'}
            ]
        }
    ]
}
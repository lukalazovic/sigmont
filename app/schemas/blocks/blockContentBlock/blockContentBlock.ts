export default {
    name: 'blockContentBlock',
    title: 'Content block',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'blockContent',
        }
    ]
}
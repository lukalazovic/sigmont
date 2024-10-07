// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'blockContentBlock',
    title: 'Običan blok',
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
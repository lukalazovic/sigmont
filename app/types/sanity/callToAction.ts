export default {
    name: 'callToAction',
    title: 'Link',
    type: 'object',
    fields: [
        {
            title: 'Text',
            name: 'text',
            type: 'string',
        },
        {
            name: 'isLinkExternal',
            title: 'Content is from external source',
            type: 'boolean',
        },
        {
            name: 'internalLink',
            title: 'Internal link',
            description: 'Select referenced page',
            type: 'reference',
            to: [
                { type: 'landing', title: 'Landing page' },
            ]
        },
        {
            name: 'externalLink',
            title: 'External link',
            type: 'url',
        }
    ]
}
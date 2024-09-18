export default {
    name: 'callToAction',
    title: 'Call to Action',
    type: 'object',
    fields: [
        {
            title: 'Label',
            name: 'label',
            type: 'string',
            description: 'Text displayed for the call to action.',
        },
        {
            name: 'internalLink',
            title: 'Internal Link',
            type: 'reference',
            description: 'Select the internal page or document to link to.',
            to: [
                { type: 'landing', title: 'Landing Page' },
                { type: 'service', title: 'Service Page' },
            ],
        },
        {
            name: 'externalLink',
            title: 'External Link',
            type: 'url',
            description: 'Enter the URL for the external link.',
        }
    ]
};

export default {
    name: 'ctaConfiguration',
    title: 'CTA Configuration',
    type: 'object',
    group: 'content',
    fields: [
        {
            name: 'ctaLabel',
            title: 'CTA Label',
            type: 'string',
            description: 'Text displayed on the call-to-action button.',
        },
        {
            name: 'ctaLinkUrl',
            title: 'CTA Link',
            type: 'reference',
            to: [
                { type: 'landing', title: 'Landing Page' },
            ],
            description: 'Page or document to link to when the button is clicked.',
        },
    ],
};

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
            description: 'The label text for the CTA button',
        },
        {
            name: 'ctaLinkUrl',
            title: 'CTA Link',
            type: 'reference',
            to: [
                { type: 'landing', title: 'Landing page' },
            ],
            description: 'The link or URL for the CTA button',
        },
    ],
}
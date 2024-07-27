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
            description: 'The text that will appear on the Call-to-Action (CTA) button. Ensure it is concise and compelling to encourage user interaction.',
        },
        {
            name: 'ctaLinkUrl',
            title: 'CTA Link',
            type: 'reference',
            to: [
                { type: 'landing', title: 'Landing Page' },
                { type: 'article', title: 'Article Page' },
            ],
            description: 'Select the target page or document that the CTA button will direct users to. This could be a specific landing page or an article page within the site.',
        },
    ],
};

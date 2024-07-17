export default {
    name: 'heroImage',
    title: 'Hero Image',
    type: 'object',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            description: 'Upload or select the hero image.',
            options: {
                hotspot: true, // Enable hotspot for image cropping
            },
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alt Text',
            description: 'Alternative text for the image (for accessibility).',
        },
        {
            name: 'ctaConfiguration',
            type: 'ctaConfiguration',
            title: 'Call to Action Configuration',
            description: 'Optional: Configure the call to action button for the hero image.',
        }
    ],
};

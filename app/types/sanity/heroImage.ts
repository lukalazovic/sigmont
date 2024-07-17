export default {
    name: 'heroImage',
    title: 'Hero Image',
    type: 'object',
    fields: [
        {
            name: 'Image',
            type: 'image',
            title: 'Image',
            description: 'Add image',
            fields: [ 
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                    description: 'Alternative text for the image (for accessibility)',
                },
                {
                    name: 'ctaConfiguration',
                    type: 'ctaConfiguration',
                }
            ],
        }
    ]
}
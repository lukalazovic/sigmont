export default {
    name: 'heroImage',
    title: 'Hero Image',
    type: 'object',
    fields: [
        {
            name: 'Image',
            title: 'Image',
            description: 'Add image',
            type: 'image',
            fields: [ 
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
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
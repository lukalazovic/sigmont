export default {
    name: 'heroImage',
    title: 'Hero Image',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'The main heading that will be displayed over the hero image. Ensure it is attention-grabbing and relevant to the content.',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            description: 'Upload or select the hero image. This image serves as the prominent visual element of the hero section.',
            options: {
                hotspot: true, // Enable hotspot for image cropping
            },
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alt Text',
            description: 'Provide alternative text for the image to enhance accessibility and improve SEO. This text will be read by screen readers for visually impaired users.',
        },
        {
            name: 'ctaConfiguration',
            type: 'ctaConfiguration',
            title: 'Call to Action Configuration',
            description: 'Optional: Configure the call-to-action button settings that will be associated with the hero image. This includes the button text and the target link.',
        },
        {
            name: 'isFullHeight',
            type: 'boolean',
            title: 'Full Height Display',
            description: 'Toggle this option to display the hero image at full height for a more immersive look, or keep it at the regular height of 600px for a more standard appearance.',
        }
    ],
};

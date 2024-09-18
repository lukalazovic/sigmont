export default {
    name: 'heroImage',
    title: 'Hero Image',
    type: 'object',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading',
            description: 'The main heading that will be displayed over the hero image. Ensure it is attention-grabbing and relevant to the content.',
        },{
            name: 'subHeading',
            type: 'string',
            title: 'Sub Heading',
            description: 'The sub heading.',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            description: 'Upload or select the hero image. This image serves as the prominent visual element of the hero section.',
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alt Text',
            description: 'Provide alternative text for the image to enhance accessibility and improve SEO. This text will be read by screen readers for visually impaired users.',
        },
    ],
};

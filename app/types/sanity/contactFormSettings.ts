export default {
    name: 'contactFormSettings',
    title: 'Contact Form Settings',
    type: 'object',
    description: 'Configure the settings for your contact page form. These settings control the heading, informational text, and the label of the submit button displayed on the form.',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'The main heading of the contact form. This text will be prominently displayed at the top of the form to guide users.'
        },
        {
            name: 'formInfo',
            title: 'Form Info',
            type: 'text',
            description: 'Additional information or instructions for the contact form. This text appears below the heading and provides context or guidance for users filling out the form.'
        },
        {
            name: 'submitButtonLabel',
            title: 'Submit Button Label',
            type: 'string',
            description: 'The label for the submit button. This text will appear on the button users click to submit the form.'
        },
    ]
}

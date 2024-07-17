export default {
    name: 'emailSettings',
    title: 'Email Settings',
    type: 'object',
    fields: [
        {
            name: 'serviceId',
            title: 'Service ID',
            type: 'string',
            description: 'The Service ID from your EmailJS account. Create an account at https://www.emailjs.com/ and retrieve this value from your dashboard.',
        },
        {
            name: 'userId',
            title: 'User ID',
            type: 'string',
            description: 'The User ID from your EmailJS account. This can be found in your EmailJS account dashboard after creating an account at https://www.emailjs.com/.',
        },
        {
            name: 'newsletterTemplateId',
            title: 'Newsletter Template ID',
            type: 'string',
            description: 'The Template ID for your newsletter emails. Set up your template in EmailJS and provide the ID here.',
        },
        {
            name: 'contactFormTemplateId',
            title: 'Contact Form Template ID',
            type: 'string',
            description: 'The Template ID for your contact form emails. Create and configure your template in EmailJS and provide the ID here.',
        },
    ]
}

export const siteSettingsPageQuery = () => /* groq */ 
    `*[_type == 'siteSettings'][0]{
        contactPageSettings{
            heading,
            mainIntro,
            displayContactForm,
            contacts,
            contactFormSettings,
        },
        siteEmailSettings{
            serviceId,
            userId,
            contactFormTemplateId,
            newsletterTemplateId
        },
        globalSettings{
            socialNetworks
        }
    }`
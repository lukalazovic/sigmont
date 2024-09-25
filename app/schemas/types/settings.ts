import { MdSettings } from 'react-icons/md';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'siteSettings',
    title: 'Settings',
    type: 'document',
    icon: MdSettings,
    groups: [
        { name: 'globalSettings', title: 'Glavna podešavanja', default: true },
        { name: 'seoSettings', title: 'SEO podešavanja' },
        { name: 'siteHeader', title: 'Header podešavanja' },
        { name: 'siteFooter', title: 'Footer podešavanja' },
        // { name: 'contactPage', title: 'Contact Page settings' },
    ],
    fields: [
        {
            name: 'globalSettings',
            title: 'Glavna podešavanja',
            type: 'globalSettings',
            group: 'globalSettings',
        },
        {
            name: 'seoSettings',
            title: 'SEO podešavanja',
            type: 'seoSettings',
            group: 'seoSettings',
        },
        {
            name: 'siteHeaderSettings',
            title: 'Header podešavanja',
            type: 'siteHeader',
            group: 'siteHeader',
        },
        {
            name: 'siteFooterSettings',
            title: 'Footer podešavanja',
            type: 'siteFooter',
            group: 'siteFooter',
        },
        // {
        //     name: 'contactPageSettings',
        //     title: 'Contact Page settings',
        //     type: 'contactPageSettings',
        //     group: 'contactPage',
        // }
    ]
}
import { MdSettings } from 'react-icons/md';

export default {
    name: 'siteSettings',
    title: 'Settings',
    type: 'document',
    icon: MdSettings,
    groups: [
        { name: 'globalSettings', title: 'Global settings', default: true },
        { name: 'seoSettings', title: 'SEO Settings' },
        { name: 'siteHeader', title: 'Header settings' },
        { name: 'siteFooter', title: 'Footer settings' },
        { name: 'contactPage', title: 'Contact Page settings' },
    ],
    fields: [
        {
            name: 'globalSettings',
            title: 'Global settings',
            type: 'globalSettings',
            group: 'globalSettings',
        },
        {
            name: 'seoSettings',
            title: 'SEO Settings',
            type: 'seoSettings',
            group: 'seoSettings',
        },
        {
            name: 'siteHeaderSettings',
            title: 'Header settings',
            type: 'siteHeader',
            group: 'siteHeader',
        },
        {
            name: 'siteFooterSettings',
            title: 'Footer settings',
            type: 'siteFooter',
            group: 'siteFooter',
        },
        {
            name: 'contactPageSettings',
            title: 'Contact Page settings',
            type: 'contactPageSettings',
            group: 'contactPage',
        }
    ]
}
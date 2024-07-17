import { MdSettings } from 'react-icons/md';

export default {
    name: 'siteSettings',
    title: 'Settings',
    type: 'document',
    icon: MdSettings,
    groups: [
        { name: 'globalSettings', title: 'Global settings', default: true },
        { name: 'cookieSettings', title: 'Cookie settings' },
        { name: 'seoSettings', title: 'SEO Settings' },
        { name: 'siteHeader', title: 'Site header settings' },
        { name: 'siteFooter', title: 'Site footer settings' },
        { name: 'siteEmail', title: 'Site email settings' },
    ],
    fields: [
        {
            name: 'cookieSettings',
            title: 'Cookie consent settings',
            type: 'cookieSettings',
            group: 'cookieSettings',
        },
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
            title: 'Site header settings',
            type: 'siteHeader',
            group: 'siteHeader',
        },
        {
            name: 'siteFooterSettings',
            title: 'Site footer settings',
            type: 'siteFooter',
            group: 'siteFooter',
        },
        {
            name: 'siteEmailSettings',
            title: 'Site email settings',
            type: 'emailSettings',
            group: 'siteEmail',
        }
    ]
}
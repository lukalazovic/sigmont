export default {
    name: 'siteFooter',
    title: 'Footer',
    type: 'object',
    fieldsets: [
        {
            name: 'footerNavigation',
            title: 'Footer Navigacija',
            options: { collapsible: true, collapsed: true }
        }
    ],
    fields: [
        {
            name: 'showLogo',
            title: 'Prikaži logo',
            type: 'boolean',
            description: 'Uključite/Isključite prikaz logotipa u sekciji footer ispod naslova.',
            initialValue: true,
        },
        {
            name: 'showAddress',
            title: 'Prikaži adresu',
            type: 'boolean',
            description: 'Uključite/Isključite prikaz glavne adresa u footer-u.',
            initialValue: false,
        },
        {
            name: 'desc',
            title: 'Kratak opis',
            type: 'text',
            description: 'Kratak opis o poslovanju. Ovo će biti prikazano u footer-u kao brzi pregled za posetioce.',
        },
        {
            name: 'showSocial',
            title: 'Prikaži ikone društvenih mreža',
            type: 'boolean',
            description: 'Uključite/Isključite prikaz ikona društvenih mreža ispod opisa za lak pristup vašim profilima na društvenim mrežama.',
            initialValue: true,
        },
        {
            name: 'navHeading',
            title: 'Naslov navigacije',
            type: 'string',
            description: 'Naslov za sekciju sa navigacionim linkovima u footer-u.',
            fieldset: 'footerNavigation'
        },
        {
            name: 'mainNavigation',
            title: 'Navigacioni linkovi',
            type: 'array',
            description: 'Reference na kolekciju brzih navigacionih linkova koji će biti prikazani u footer-u za lak pristup važnim stranicama.',
            of: [{ type: 'internalLink'}],
            fieldset: 'footerNavigation'
        },
        {
            name: 'subFooter',
            title: 'Sub-Footer',
            type: 'string',
            description: 'Tekst za sekciju sub-footer na dnu footer-a, obično se koristi za pravne informacije.',
        }
    ]
};

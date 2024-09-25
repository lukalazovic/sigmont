// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'siteHeader',
    title: ' ',
    type: 'object',
    fieldsets: [
        {
            name: 'headerTopBar',
            title: 'Podešavanje dela iznad header-a',
            options: { collapsible: true, collapsed: true }
        },
        {
            name: 'headerMobile',
            title: 'Podešavanje mobilnog header-a',
            options: { collapsible: true, collapsed: true }
        },
    ],
    fields: [
        {
            name: 'mainNavigation',
            title: 'Glavni Meni',
            type: 'array',
            of: [{ type: 'navigationItem'}],
            description: 'Definišite meni prikazanog na vrhu sajta. Ovi linkovi će se nalaziti u sredini glavnog menija'
        },
        {
            name: 'showPhone',
            title: 'Prikaz telefonskog broja',
            type: 'boolean',
            description: 'Omogućite prikaz telefonskog broja na vrhu navigacije.',
            fieldset: 'headerTopBar'
        },
        {
            name: 'ctaLink',
            type: 'callToAction',
            title: 'CTA Link',
            description: 'Dodajte link za brzu navigaciju na stranicu.',
            fieldset: 'headerTopBar'
        },
        {
            name: 'menuSlideDirection',
            title: 'Smer ulaska menija',
            type: 'string',
            options: {
                list: [
                    { title: 'Ulaz s leve strane', value: 'left' },
                    { title: 'Ulaz s desne strane', value: 'right' }
                ],
                layout: 'dropdown',
            },
            description: 'Izaberite smer sa kojeg će mobilni meni da ulazi u vidno polje. Ovo utiče na animaciju i poziciju menija.',
            fieldset: 'headerMobile'
        },
        {
            name: 'mobileHeaderPosition',
            title: 'Pozicija mobilnog menija',
            type: 'string',
            options: {
                list: [
                    { title: 'Vrh', value: 'top' },
                    { title: 'Dno', value: 'bottom' }
                ],
                layout: 'dropdown',
                default: 'top'
            },
            description: 'Izaberite poziciju mobilnog menija. Po sistemskim podešavanjima je na vrhu.',
            fieldset: 'headerMobile'
        }
    ]
};
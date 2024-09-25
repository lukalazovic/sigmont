// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'globalSettings',
    title: 'Glavna podešavanja',
    type: 'object',
    description: 'Konfigurišite glavna podešavanja za vašu aplikaciju, uključujući logotipe, kontakt informacije i društvene mreže.',
    fieldsets: [
        {
            name: 'logos',
            title: 'Podešavanja logotipa',
            options: { collapsible: true, collapsed: true }
        },
        {
            name: 'contactInformation',
            title: 'Podešavanja glavnih kontakt informacija',
            options: { collapsible: true, collapsed: true }
        },
        {
            name: 'socialNetworks',
            title: 'Podešavanja društvenih mreža',
            options: { collapsible: true, collapsed: true }
        }
    ],
    fields: [
        {
            name: 'logo',
            title: 'Desktop logotip',
            type: 'image',
            description: 'Logotip prikazan u vašoj aplikaciji na desktop uređajima.',
            options: {
                hotspot: true,
            },
            fieldset: 'logos'
        },
        {
            name: 'mobileLogo',
            title: 'Mobilni logotip',
            type: 'image',
            description: 'Opcioni logotip specifičan za prikaz na mobilnim uređajima.',
            options: {
                hotspot: true,
            },
            fieldset: 'logos'
        },
        {
            name: 'contactInfo',
            title: 'Glavne kontakt informacije',
            type: 'contactInfo',
            description: 'Primarne kontakt informacije za vašu glavnu kancelariju ili sedište.',
            fieldset: 'contactInformation'
        },
        {
            name: 'socialNetworks',
            title: 'Društvene mreže',
            type: 'socialNetworks',
            description: 'Linkovi ka vašim profilima na društvenim mrežama.',
            fieldset: 'socialNetworks'
        }
    ]
}

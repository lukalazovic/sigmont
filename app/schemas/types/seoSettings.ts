export default {
    name: 'seoSettings',
    title: 'SEO Podešavanja',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Naziv sajta',
            type: 'string',
            description: 'Unesite naziv vašeg sajta.',
        },
        {
            name: 'description',
            title: 'Meta opis',
            type: 'text',
            description: 'Kratak opis sajta za pretraživače i društvene mreže.',
        },
        {
            name: 'keywords',
            title: 'Meta ključne reči',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Lista ključnih reči relevantnih za sajt, odvojenih zarezima.',
        },
        {
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            description: 'Mala ikona koja predstavlja sajt, obično prikazana u kartici (tab-u) pretraživača.',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'ogImage',
            title: 'Open Graph slika',
            type: 'image',
            description: 'Slika koja se koristi kada se sajt deli na društvenim mrežama.',
            options: {
                hotspot: true,
            },
        },
    ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'accordionBlock',
    title: 'Blok sa pitanjima',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Naslov',
            description: 'Glavni naslov bloka koji će biti prikazan korisnicima na vrhu, često se koristi za opisivanje teme ili sekcije pitanja.',
            type: 'string',
        },
        {
            name: 'mainIntro',
            title: 'Glavni uvod',
            description: 'Uvodni tekst koji daje kratko objašnjenje ili pregled sadržaja u ovom bloku pitanja. Ovo može biti koristan kontekst za korisnike pre nego što otvore pitanja.',
            type: 'text',
        },
        {
            name: 'items',
            title: 'Pitanja i odgovori',
            type: 'array',
            of: [{ type: 'accordion' }],
        }
    ]

}
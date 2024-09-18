// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Tekst i Slika',
    name: 'textAndImageBlock',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Naslov',
            description: 'Unesite kratak i informativan naslov za ovaj blok sadržaja.',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Tekst',
            description: 'Unesite opisni tekst za blok sa slikom i tekstom.',
            type: 'text',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Slika',
            description: 'Odaberite sliku za prikaz u ovom bloku.',
        },
        {
            name: 'imagePosition',
            title: 'Pozicija Slike',
            type: 'string',
            options: {
                list: [
                    { title: 'Levo', value: 'left' },
                    { title: 'Desno', value: 'right' }
                ],
                layout: 'dropdown',
                default: 'Left'
            },
            description: 'Odaberite poziciju slike unutar bloka. Ako ne izaberete pozicija je slike će biti levo.',
        }
    ]
};

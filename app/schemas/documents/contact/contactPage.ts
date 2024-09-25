import * as blocks from '../../blocks/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'contact',
    title: ' ',
    type: 'document',
    fields: [
        {
            name: 'heroImage',
            title: 'Glavna slika',
            type: 'heroImage',
            description: 'Slika prikazana na vrhu stranice kao glavni vizuelni element.'
        },
        {
            name: 'content',
            title: 'Sadržaj stranice',
            type: 'array',
            of: [
                ...Object.values(blocks),
            ],
            description: 'Ovde dodajte predefinsane blokove kako bi kreirali sadržaj za stranicu.',
        },
    ],
    preview: {prepare() {return {title: 'Kontakt'}}},
};

import * as blocks from '../../blocks/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'home',
    title: ' ',
    type: 'document',
    fields: [
        {
            name: 'heroImage',
            type: 'heroImage',
            title: 'Početni slajder slika',
            description: 'Slajder sa slikama prikazan na vrhu stranice kao glavni vizuelni element.'
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
    preview: {prepare() {return {title: 'Početna'}}},
};

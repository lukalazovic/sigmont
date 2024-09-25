export default {
    name: 'callToAction',
    title: 'Call to Action - Poziv na Akciju',
    type: 'object',
    fields: [
        {
            title: 'Text',
            name: 'label',
            type: 'string',
            description: 'Tekst koji se prikazuje za poziv na akciju.',
        },
        {
            name: 'internalLink',
            title: 'Interni link',
            type: 'reference',
            description: 'Izaberite internu stranicu za povezivanje.',
            to: [
                { type: 'landing', title: 'Obična stranica' },
                { type: 'service', title: 'Stranica usluga' },
            ],
        },
        {
            name: 'externalLink',
            title: 'Eksterni link',
            type: 'url',
            description: 'Unesite URL za eksterni link.',
        }
    ]
};

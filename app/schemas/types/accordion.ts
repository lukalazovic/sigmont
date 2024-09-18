export default {
    name: 'accordion',
    title: 'Pitanje i odgovor',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Pitanje',
            type: 'string',
            description: 'Tekst pitanja koje korisnik može da otvori klikom. Ovo je pitanje koje pruža dodatne informacije nakon otvaranja.',
        },
        {
            name: 'content',
            title: 'Odgovor',
            type: 'text',
            description: 'Tekstualni odgovor koji se prikazuje kada korisnik otvori pitanje. Ovde možete pružiti detaljnije informacije ili objašnjenja.',
        },
    ],
};

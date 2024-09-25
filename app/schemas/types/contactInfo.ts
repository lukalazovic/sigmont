// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'contactInfo',
    title: 'Kontakt Informacije',
    type: 'object',
    description: 'Unesite kontakt informacije, uključujući podatke kao što su naziv kompanije, adresa, telefonski brojevi i email adresa.',
    fields: [
        {
            name: 'title',
            title: 'Naziv kompanije',
            type: 'string',
            description: 'Naziv Vaše kkompanije ili kancelarije.',
        },
        {
            name: 'address',
            title: 'Adresa',
            type: 'string',
            description: 'Fizička adresa kompanije.',
        },
        {
            name: 'phone',
            title: 'Telefoni',
            type: 'array',
            description: 'Kontakt telefonski broj(evi).',
            of: [
                {
                    type: 'string'
                }
            ],
        },
        {
            name: 'email',
            title: 'Email',
            type: 'email',
            description: 'Primarna email adresa.',
        },
    ]
}

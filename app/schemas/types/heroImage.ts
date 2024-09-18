// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'heroImage',
    type: 'object',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Naslov',
            description: 'Primarni naslov prikazan preko hero slike. Treba da privuče pažnju posetilaca i prenese glavnu poruku ili temu stranice.',
        },{
            name: 'subHeading',
            type: 'string',
            title: 'Podnaslov',
            description: 'Sekundarni naslov prikazan ispod glavnog naslova. Može pružiti dodatni kontekst ili podržavajuću poruku.',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Slika',
            description: 'Hero slika koja služi kao pozadina ili istaknuti vizuelni element hero sekcije. Izaberite sliku koja efektivno predstavlja sadržaj stranice. Vodite računa da slika bude visokog kvaliteta i odgovarajuće veličine za različite ekrane.',
        },
        {
            name: 'fullHeight',
            title: 'Hero Slika - Pun Ekran',
            type: 'boolean',
            description: 'Dugme za prilagođavanje hero slike tako da zauzme celu visinu ekrana ili ne.',
            default: true,
        }
    ],
};

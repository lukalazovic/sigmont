import { MdInfo } from 'react-icons/md';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'seoInformation',
    title: 'SEO Informacije',
    type: 'object',
    icon: MdInfo,
    fields: [
        {
            name: 'title',
            title: 'Naslov stranice',
            description: 'SEO optimizovani naslov stranice.',
            type: 'string',
        },
        {
            title: 'SLUG',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'seoInformation.title',
                maxLength: 200,
                slugify: (input: string) =>
                    input
                        .toLowerCase()
                        .replace(/[čćšđž]/g, (match) => {
                            switch (match) {
                                case 'č': return 'c';
                                case 'ć': return 'c';
                                case 'š': return 's';
                                case 'đ': return 'd';
                                case 'ž': return 'z';
                                default: return match;
                            }
                        })
                        .replace(/[^a-z0-9\s-]/g, '-') // Replace all other non-letter and non-digit characters with dashes
                        .trim()
                        .replace(/\s+/g, '-') // Replace spaces with dashes
                        .slice(0, 200), // Ensure the length is within the maximum limit
                isUnique: () => true,
            },
            description: 'URL verzija naslova stranice za bolju SEO optimizaciju.',
        },
        {
            name: 'metaDescription',
            title: 'Meta Opis',
            description: 'Kratak opis koji se pojavljuje u rezultatima pretrage. Ciljajte na 150-160 karaktera.',
            type: 'text',
        },
        {
            name: 'metaImage',
            title: 'Meta Slika',
            description: 'Slika koja se prikazuje u rezultatima pretrage i prilikom deljenja na društvenim mrežama.',
            type: 'image',
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'slug.current',
        },
    },
};

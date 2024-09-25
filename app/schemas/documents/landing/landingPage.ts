import { MdPages } from 'react-icons/md';
import * as blocks from '../../blocks/index';
import { validateSeoInfo } from '@/app/shared/utils/validation';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'landing',
    title: ' ',
    type: 'document',
    icon: MdPages,
    groups: [
        { name: 'content', title: 'Sadržaj', default: true },
        { name: 'seo', title: 'SEO Optimizacija' }
    ],
    fieldsets: [
        {
            name: 'heroImageSettings',
            title: 'Glavna sekcija',
            options: { collapsible: true, collapsed: true }
        }
    ],
    fields: [
        {
            name: 'name',
            title: 'Naziv',
            type: 'string',
            description: 'Opcionalno: Unesite naziv za internu referencu.',
            group: 'content',
        },
        {
            name: 'heroImage',
            title: 'Glavna slika',
            type: 'heroImage',
            group: 'content',
            fieldset: 'heroImageSettings',
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
            group: 'content',
        },
        {
            name: 'seoInformation',
            title: 'SEO Informacije',
            type: 'seoInformation',
            description: 'SEO postavke za poboljšanje vidljivosti na pretraživačima.',
            validation: (Rule: any) => Rule.custom((seoInformation: any, context: any) => validateSeoInfo(seoInformation, context)),
            group: 'seo',
        },
    ],
};

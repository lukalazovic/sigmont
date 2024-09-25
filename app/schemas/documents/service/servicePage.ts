import { MdConstruction } from 'react-icons/md'
import * as blocks from '../../blocks/index';
import { validateSeoInfo } from '@/app/shared/utils/validation';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'service',
    title: ' ',
    type: 'document',
    icon: MdConstruction,
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'settings', title: 'Settings '},
        { name: 'seo', title: 'SEO'}
    ],
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            group: 'content',
        },
        {
            name: 'mainBody',
            title: 'Main body',
            type: 'blockContent',
            group: 'content',
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'heroImage',
            group: 'content',
        },
        {
            name: 'content',
            title: 'Content area',
            type: 'array',
            of: [
                ...Object.values(blocks),
            ],
            group: 'content',
        },
        {
            name: 'seoInformation',
            title: 'SEO info',
            type: 'seoInformation',
            validation: (Rule: any) =>
                Rule.custom((seoInformation: any, context: any) => validateSeoInfo(seoInformation, context)),
            group: 'seo',
        },
        {
            name: 'fullHeight',
            title: 'Hero Image Full Height',
            type: 'boolean',
            default: true,
            group: 'settings',
        }
    ],
}
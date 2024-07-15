import { MdPages } from 'react-icons/md';
import * as blocks from '../../blocks/index';
import { validateSeoInfo } from '@/utils/validation';

export default {
    name: 'landing',
    title: 'Landing page',
    type: 'document',
    icon: MdPages,
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'settings', title: 'Settings '},
        { name: 'seo', title: 'SEO'}
    ],
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            group: 'content',
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            group: 'content',
        },
        {
            name: 'subHeading',
            title: 'Sub Heading',
            type: 'string',
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
        },
    ]
}
import { MdPages } from 'react-icons/md';
import * as blocks from '../../blocks/index';
import { validateSeoInfo } from '@/app/utils/validation';

export default {
    name: 'landing',
    title: 'Landing Page',
    type: 'document',
    icon: MdPages,
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'settings', title: 'Settings' },
        { name: 'seo', title: 'SEO' }
    ],
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Optional: Provide a name for internal reference.',
            group: 'content',
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Main title or heading for the landing page.',
            group: 'content',
        },
        {
            name: 'subHeading',
            title: 'Sub Heading',
            type: 'string',
            description: 'Optional: Subtitle or secondary heading.',
            group: 'content',
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'heroImage',
            description: 'Image displayed prominently at the top of the page.',
            group: 'content',
        },
        {
            name: 'content',
            title: 'Content Area',
            type: 'array',
            of: [
                ...Object.values(blocks),
            ],
            description: 'Main content blocks for the landing page.',
            group: 'content',
        },
        {
            name: 'seoInformation',
            title: 'SEO Information',
            type: 'seoInformation',
            description: 'SEO settings for improving search engine visibility.',
            validation: (Rule: any) => Rule.custom((seoInformation: any, context: any) => validateSeoInfo(seoInformation, context)),
            group: 'seo',
        },
        {
            name: 'fullHeight',
            title: 'Hero Image Full Height',
            type: 'boolean',
            description: 'Toggle to adjust hero image to full height of the viewport.',
            default: true,
            group: 'settings',
        },
    ],
};

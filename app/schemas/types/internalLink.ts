import { MdAddLink } from "react-icons/md";

export default {
    name: 'internalLink',
    title: 'Internal Link',
    type: 'object',
    fields: [
        {
            name: 'reference',
            title: 'Reference',
            type: 'reference',
            description: 'Select the internal page to link to.',
            to: [
                { type: 'landing', title: 'Landing Page' },
                { type: 'service', title: 'Service Page' },
            ]
        }
    ],
    preview: {
        select: {
            title: 'reference.title',
            name: 'reference.name',
        },
        prepare({ title, name }) {
            return {
                title: title || name || 'No Title',
                media: MdAddLink
            };
        }
    }
};

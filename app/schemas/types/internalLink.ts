import { MdAddLink } from "react-icons/md";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'internalLink',
    title: 'Interni link',
    type: 'object',
    fields: [
        {
            name: 'reference',
            title: 'Referenca',
            type: 'reference',
            description: 'Izaberite internu stranicu za povezivanje.',
            to: [
                { type: 'landing', title: 'Obična stranica' },
                { type: 'service', title: 'Stranica usluga' },
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

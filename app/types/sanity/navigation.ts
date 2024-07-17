import { MdAddBox, MdAddLink } from "react-icons/md";

export default {
    name: 'navigationItem',
    type: 'object',
    title: 'Menu sub-categories',
    icon: MdAddBox,
    fields:[
        {
            name: 'itemLink',
            type: 'callToAction',
            title: 'Menu link',
            description: 'Add information for menu link',
        },
        {
            name: 'linkCollections',
            title: 'Sub links',
            description: 'List of links inside collection',
            type: 'array',
            of: [{ type: 'navigationItem' }],
        }
    ],
    preview: {
        select: {
            title: `itemLink.text`,
        },
        prepare: ({ title }: any) => ({
            title,
            media: MdAddLink
        }),
    }
}
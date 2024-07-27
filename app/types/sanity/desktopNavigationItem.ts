import { MdAddBox, MdAddLink } from "react-icons/md";

export default {
    name: 'desktopNavigationItem',
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
            of: [{ type: 'desktopNavigationItem' }],
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
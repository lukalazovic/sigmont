import { MdAddBox, MdAddLink } from "react-icons/md";

export default {
    name: 'footerNavigationItem',
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
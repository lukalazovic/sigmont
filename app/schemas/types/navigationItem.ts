import { MdAddBox, MdAddLink } from "react-icons/md";

export default {
    name: 'navigationItem',
    type: 'object',
    title: 'Menu sub-categories',
    icon: MdAddBox,
    fields:[
        {
            name: 'itemLink',
            type: 'internalLink',
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
        title: 'itemLink.reference.title',
        name: 'itemLink.reference.name',
      },
      prepare({ title, name }) {
        return {
          title: title || name || 'No Title',
          media: MdAddLink
        };
      }
    }
}
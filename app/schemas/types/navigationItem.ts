import { MdAddBox, MdAddLink } from "react-icons/md";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'navigationItem',
    type: 'object',
    title: 'Meni linkovi',
    icon: MdAddBox,
    fields:[
        {
            name: 'itemLink',
            type: 'internalLink',
            title: 'Link',
            description: 'Dodajte informacije za link.',
        },
        {
            name: 'linkCollections',
            title: 'Podlinkovi',
            description: 'Lista podlinkova unutar glavnog linka',
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
          title: title || name || 'Bez naslova',
          media: MdAddLink
        };
      }
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'galleryBlock',
  title: 'Galerija',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Naslov',
      description: 'Unesite kratak i informativan naslov za ovaj blok sadržaja.',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Tekst',
      description: 'Unesite kratki opisni tekst.',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Sadržaji',
      description: 'Dodajte slike ili videozapise za prikaz u ovom bloku.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'mediaType',
              type: 'string',
              title: 'Tip medija',
              options: {
                list: [
                  { title: 'Slika', value: 'image' },
                  { title: 'Video', value: 'video' },
                ],
              },
              validation: (Rule) => Rule.required().error('Morate odabrati tip medija.'),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Slika',
              description: 'Odaberite sliku.',
              hidden: ({ parent }) => parent?.mediaType !== 'image',
            },
            {
              name: 'videoFile',
              type: 'file',
              title: 'Video datoteka',
              description: 'Uploadujte video datoteku.',
              hidden: ({ parent }) => parent?.mediaType !== 'video',
            },
            {
              name: 'altText',
              type: 'string',
              title: 'Alt tekst',
              description: 'Unesite alternativni tekst za sliku.',
              hidden: ({ parent }) => parent?.mediaType !== 'image',
            },
            {
              name: 'category',
              type: 'string',
              title: 'Kategorija',
              description: 'Odaberite kategoriju kojoj stavka pripada.',
              options: {
                list: [
                  { title: 'Kategorija 1', value: 'category1' },
                  { title: 'Kategorija 2', value: 'category2' },
                  { title: 'Kategorija 3', value: 'category3' },
                ],
              },
              validation: (Rule) => Rule.required().error('Morate odabrati kategoriju.'),
            },
          ],
          preview: {
            select: {
              mediaType: 'mediaType',
              image: 'image',
            },
            prepare({ mediaType, image }) {
              if (mediaType === 'image') {
                return {
                  title: 'Slika',
                  media: image,
                };
              } else if (mediaType === 'video') {
                return {
                  title: 'Video',
                  media: null,
                };
              }
              return {
                title: '',
                media: null,
              };
            },
          },
        },
      ],
    },
  ],
};

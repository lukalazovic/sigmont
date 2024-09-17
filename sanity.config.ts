import {defineConfig} from 'sanity';
import {visionTool} from '@sanity/vision';
import { schemaTypes } from './app/schemas';
import {structureTool} from 'sanity/structure';
import { MdDescription } from 'react-icons/md';


export default defineConfig({
  name: 'default',
  title: 'Studio',

  projectId: 'cb6i28mk',
  dataset: 'production',
  
  basePath: '/studio',

  plugins: [structureTool({
      structure: (S) =>
      S.list()
        .title('Content')
        .items([
          S.listItem()
            .title('Settings')
            .icon(MdDescription)
            .child(
              S.editor().title('Settings').schemaType('siteSettings').documentId('siteSettings')
            ),
            S.listItem()
            .title('Pages')
            .icon(MdDescription)
            .child(
                S.list()
                    .title('Pages')
                    .items([
                        S.documentTypeListItem('landing').title('Landing Page'),
                        S.documentTypeListItem('article').title('Article Page'),
                    ])
            )
        ]),
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

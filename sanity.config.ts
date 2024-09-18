import {defineConfig} from 'sanity';
import {visionTool} from '@sanity/vision';
import { schemaTypes } from './app/schemas';
import {structureTool} from 'sanity/structure';
import { MdConstruction, MdDescription, MdPages, MdSettings } from 'react-icons/md';


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
            .icon(MdSettings)
            .child(
              S.editor().title('Settings').schemaType('siteSettings').documentId('siteSettings')
            ),
            S.listItem()
            .title('Pages')
            .icon(MdPages)
            .child(
                S.list()
                    .title('Pages')
                    .items([
                        S.documentTypeListItem('landing').title('Landing Page').icon(MdDescription),
                        S.documentTypeListItem('service').title('Service Page').icon(MdConstruction),
                    ])
            )
        ]),
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

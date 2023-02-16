import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema'

const defineConfig = (config) => {
  return config;
};

export default defineConfig({
  name: 'default',
  title: 'peter_portfolio1',

  projectId: '8o09hjpk',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

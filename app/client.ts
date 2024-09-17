import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'cb6i28mk',
  dataset: 'production',
  // apiVersion: '2024-09-17',
  useCdn: true
});

export default client;
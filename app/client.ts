import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'l5pfekwx',
  dataset: 'production',
  apiVersion: '2024-01-14',
  useCdn: true
});

export default client;
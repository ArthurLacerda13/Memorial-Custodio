import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'pxgziev0', // Vamos pegar isso já já
  dataset: 'production',
  useCdn: true, // Deixa o site rápido (cache)
  apiVersion: '2023-05-03',
});

// Essa função mágica ajuda a pegar os links das imagens
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
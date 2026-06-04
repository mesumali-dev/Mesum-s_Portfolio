import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Syed Mesum Ali Shah | Full Stack & AI Developer',
    short_name: 'Mesum Ali Portfolio',
    description: 'Software Engineering Student and AI Developer specializing in autonomous agents and production-ready full-stack applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#F5D76E',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

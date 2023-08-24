import { MetadataRoute } from 'next';
import { METADATA_SAVES } from './layout';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UTKCC | 토론토 대학교 한국 경영 동아리',
    short_name: METADATA_SAVES.siteName,
    description: METADATA_SAVES.siteDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: METADATA_SAVES.colorHexCode,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

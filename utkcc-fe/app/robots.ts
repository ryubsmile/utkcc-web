import { MetadataRoute } from 'next';
import { METADATA_SAVES } from './layout';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${METADATA_SAVES.locationOrigin}/sitemap.xml`,
  };
}

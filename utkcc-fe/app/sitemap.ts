import { MetadataRoute } from 'next';
import { METADATA_SAVES } from './layout';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: METADATA_SAVES.locationOrigin,
      lastModified: new Date(),
    },
    {
      url: `${METADATA_SAVES.locationOrigin}/about`,
      lastModified: new Date(),
    },
    {
      url: `${METADATA_SAVES.locationOrigin}/events`,
      lastModified: new Date(),
    },
    {
      url: `${METADATA_SAVES.locationOrigin}/executives`,
      lastModified: new Date(),
    },
    {
      url: `${METADATA_SAVES.locationOrigin}/sponsors`,
      lastModified: new Date(),
    },
    {
      url: `${METADATA_SAVES.locationOrigin}/resources`,
      lastModified: new Date(),
    },
    {
      url: `${METADATA_SAVES.locationOrigin}/newsletter`,
      lastModified: new Date(),
    },
  ];
}

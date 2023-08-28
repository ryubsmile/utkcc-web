// @ts-check
// import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

// export default withPlaiceholder(nextConfig);
module.exports = nextConfig;

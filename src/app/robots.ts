import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: '/',
      disallow: '/api',
      userAgent: '*',
    },
    sitemap: 'https://calvo-jp.vercel.app/sitemap.xml',
  };
}

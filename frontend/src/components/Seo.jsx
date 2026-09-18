import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE = 'Tober Law';
const BASE_URL = 'https://tober-law.com';

// Reusable SEO head. Pass title, description, path (canonical), image, type, and optional jsonLd (object or array).
const Seo = ({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  keywords,
  jsonLd,
}) => {
  const fullTitle = title ? `${title}` : `${SITE} \u2014 Illinois & Missouri Personal Injury & Civil Rights Attorney`;
  const url = `${BASE_URL}${path}`;
  const ld = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
};

export const BASE = BASE_URL;
export default Seo;

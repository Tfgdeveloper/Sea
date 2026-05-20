// src/components/SimpleSEO.js
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keyword,
  link,
  children,
}) => (
  <Helmet>
    <title>{title}</title>

    <meta name="description" content={description} />

    {keyword && <meta name="keywords" content={keyword} />}

    {/* Canonical URL */}
    {link && <link rel="canonical" href={link} />}

    {/* Optional Open Graph URL */}
    {link && <meta property="og:url" content={link} />}

    {/* This allows custom scripts/meta to be injected */}
    {children}
  </Helmet>
);

export default SEO;
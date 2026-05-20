import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";

const routes = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/publishing-and-distribution",
  "/ghostwriting-&-manuscript",
  "/editing-&-proofreading",
  "/coverdesign-&-Illustrations",
  "/marketing-&-campaigns",
  "/audiobook",
  "/time-square-event",
  "/privacy",
  "/terms",
  "/return",
  "/thank-you"
];

async function generateSitemap() {
  const sitemapPath = path.resolve("./public/sitemap.xml");
  const writeStream = createWriteStream(sitemapPath);

  const sitemapStream = new SitemapStream({ hostname: "https://seawingspublications.com/" });

  // Pipe sitemap stream to file write stream
  sitemapStream.pipe(writeStream);

  // Write URLs to sitemap stream
  routes.forEach((url) => {
    sitemapStream.write({ url, changefreq: "monthly", priority: 0.8 });
  });

  // Signal that no more URLs will be written
  sitemapStream.end();

  // Await the sitemap stream to finish and get XML buffer (optional)
  await streamToPromise(sitemapStream);

  console.log("Sitemap generated successfully at:", sitemapPath);
}

generateSitemap().catch(console.error);

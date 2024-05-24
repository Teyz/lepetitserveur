/* eslint-disable @typescript-eslint/no-unused-vars */
const site = 'https://www.lepetitserveur.fr/'; // change this to reflect your domain
const pages: string[] = []; // populate this with all the slugs you wish to include

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const body = sitemap(pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://lepetitserveur.fr/</loc>
  <lastmod>2024-05-24T12:22:33+00:00</lastmod>
</url>


</urlset>`;
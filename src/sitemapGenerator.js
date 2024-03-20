export function generateSitemap(articles) {
  const baseUrl = "https://matteoraggiblog.com"; // URL di base del tuo sito

  const currentDate = new Date().toISOString();

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Aggiungi URL per la homepage
  sitemap += `<url><loc>${baseUrl}</loc><lastmod>${currentDate}</lastmod><priority>1.0</priority></url>\n`;

  // Aggiungi URL per gli articoli del blog
  articles.forEach((slug) => {
    const articleUrl = `${baseUrl}/blog/${slug}`; // Costruisci l'URL dell'articolo
    sitemap += `<url><loc>${articleUrl}</loc><lastmod>${currentDate}</lastmod><priority>0.8</priority></url>\n`;
  });

  sitemap += "</urlset>";

  return sitemap;
}

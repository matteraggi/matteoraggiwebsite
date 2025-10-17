const fs = require("fs");
const path = require("path");
const { generateSitemap } = require("./src/sitemapGenerator.js");

// Percorso assoluto del file JSON
const filePath = path.join(__dirname, "src", "articles.json");
const slugArray = [];

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Errore durante la lettura del file JSON:", err);
    return;
  }

  try {
    const parsedData = JSON.parse(data);

    if (parsedData.articles && Array.isArray(parsedData.articles)) {
      for (const article of parsedData.articles) {
        slugArray.push(article.slug);
      }

      const sitemapXml = generateSitemap(slugArray);
      const distDir = path.join(__dirname, "dist");
      const sitemapFilePath = path.join(distDir, "sitemap.xml");

      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }

      fs.promises
        .writeFile(sitemapFilePath, sitemapXml, "utf-8")
        .then(() => console.log("✅ Sitemap generata con successo!"))
        .catch((error) =>
          console.error("Errore durante la scrittura del file sitemap.xml:", error)
        );
    } else {
      console.error("L'oggetto JSON non contiene una chiave 'articles' o non è un array.");
    }
  } catch (err) {
    console.error("Errore durante il parsing del file JSON:", err);
  }
});

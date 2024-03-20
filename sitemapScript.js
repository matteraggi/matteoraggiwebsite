import fs from "fs";
import { generateSitemap } from "./src/sitemapGenerator.js";

// Percorso del file JSON
const filePath = new URL(
  "file:///Users/matteoraggi/Developer/matteoraggiwebsite/src/articles.json"
);
const slugArray = [];

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Errore durante la lettura del file JSON:", err);
    return;
  }

  try {
    // Analizza il contenuto del file JSON in un oggetto JavaScript
    const parsedData = JSON.parse(data);

    // Verifica se 'articles' è presente nell'oggetto 'parsedData' e se è un array
    if (parsedData.articles && Array.isArray(parsedData.articles)) {
      const articles = parsedData.articles;

      // Itera sugli articoli e aggiungi gli slug all'array 'slugArray'
      for (const article of articles) {
        slugArray.push(article.slug);
      }

      // Genera la sitemap utilizzando gli slug degli articoli
      const sitemapXml = generateSitemap(slugArray);

      // Percorso del file sitemap.xml
      const sitemapFilePath =
        "/Users/matteoraggi/Developer/matteoraggiwebsite/dist/sitemap.xml";

      // Crea la directory di destinazione se non esiste
      const directory = "/Users/matteoraggi/Developer/matteoraggiwebsite/dist";
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }

      // Scrivi il contenuto della sitemap nel file sitemap.xml
      fs.promises
        .writeFile(sitemapFilePath, sitemapXml, "utf-8")
        .then(() => console.log("Sitemap generata con successo!"))
        .catch((error) =>
          console.error(
            "Errore durante la scrittura del file sitemap.xml:",
            error
          )
        );
    } else {
      console.error(
        "L'oggetto JSON non contiene una chiave 'articles' o non è un array."
      );
    }
  } catch (err) {
    console.error("Errore durante il parsing del file JSON:", err);
  }
});

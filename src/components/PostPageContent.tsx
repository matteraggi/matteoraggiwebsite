import CommentsSection from "./CommentsSection";

const PostPageContent = ({ post }: { post: any }) => {
  function fixImageSrc(content: any) {
    // Crea un elemento temporaneo per analizzare il contenuto HTML
    const tempElement = document.createElement("div");
    tempElement.innerHTML = content;

    // Seleziona tutte le immagini all'interno del contenuto
    const images = tempElement.querySelectorAll("img");

    // Modifica l'attributo src di tutte le immagini con l'attributo data-src
    images.forEach((img) => {
      const dataSrc = img.getAttribute("data-src");
      if (dataSrc) {
        img.setAttribute("src", dataSrc);
      }
    });

    // Restituisci il contenuto con gli attributi delle immagini corretti
    return tempElement.innerHTML;
  }

  // Utilizzo della funzione per correggere gli attributi delle immagini nel contenuto
  const fixedContent = fixImageSrc(post.content);
  return (
    <section className="blog-box">
      <div className="container-article">
        <div className="post-header-section">
          <div className="post-title">
            <h1 className="post-header">{post.title}</h1>
            <img
              src={post.featuredImage.node.sourceUrl}
              style={{
                width: "70%",
                height: "auto",
                marginBottom: "2rem",
              }}
              alt={post.title}
            />
            <p style={{ fontStyle: "italic" }}>
              {post.author.node.name} - {post.date.slice(0, 10)}
            </p>
          </div>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: fixedContent }}
        ></div>
        <div className="post-comments-box">
          <CommentsSection postDbId={post.databaseId} />
        </div>
      </div>
    </section>
  );
};

export default PostPageContent;

//aggiungere: categoria, immagini funzionanti, tag, lettura commenti, creazione commenti
//altri todo: spostare iubenda, bunny.net (forse non necessario)

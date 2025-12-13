import { Link, useNavigate, useParams } from "react-router-dom";
import articlesData from "./../../articles.json"; // Il JSON leggero
import SEO from "./SEO";
import ReactMarkdown from "react-markdown";
import { useMemo, useState, useEffect } from "react";

const ArticleBlock = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [lang, setLang] = useState('it');

  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(true);

  const currentPostInfo = articlesData.articles.find((post) => post.slug === slug);

  useEffect(() => {
    if (!currentPostInfo) return;

    setLoading(true);
    const fileName = `/posts/${lang}/${slug}.md`;

    fetch(fileName)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then((text) => {
        setMarkdownContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setMarkdownContent("Error loading post content / Errore caricamento articolo");
        setLoading(false);
      });
  }, [slug, lang, currentPostInfo]);

  const sortedArticles = useMemo(() => {
    return [...articlesData.articles].sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split("-").map(Number);
      const [dayB, monthB, yearB] = b.date.split("-").map(Number);
      return new Date(yearA, monthA - 1, dayA).getTime() - new Date(yearB, monthB - 1, dayB).getTime();
    });
  }, []);

  const currentIndex = sortedArticles.findIndex((art) => art.slug === slug);
  const nextArticle = currentIndex >= 0 && currentIndex < sortedArticles.length - 1 ? sortedArticles[currentIndex + 1] : null;

  if (!currentPostInfo) return <p>Post not found</p>;

  const title = typeof currentPostInfo.title === 'object' ? currentPostInfo.title.it : currentPostInfo.title;

  return (
    <>
      <div className="padding-top-" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src="/arrow.svg" className="back-arrow" onClick={() => navigate(-1)} alt="back" />

        <button onClick={() => setLang(lang === 'it' ? 'en' : 'it')} className="lang-btn">
          {lang === 'it' ? <span>&#x1f1ec;&#x1f1e7;</span> : <span>&#x1f1ee;&#x1f1f9;</span>}
        </button>
      </div>

      <SEO
        title={title}
        description={currentPostInfo.description || ''}
        name="Matteo Raggi Blog"
        type="article"
        slug={"blog/" + slug}
      />

      <div className="blog-box">
        <div className="container-article">
          <div className="post-header-section">
            <h1 className="post-header">{title}</h1>
            <img
              src={currentPostInfo.image}
              style={{ width: "90%", margin: "0 auto 2rem", display: "block" }}
              loading="lazy"
              alt="cover"
            />
            <p style={{ fontStyle: "italic" }}>{currentPostInfo.date} - Matteo Raggi</p>
          </div>

          <div className="post-content">
            {loading ? (
              <p>Caricamento articolo... / Loading article...</p>
            ) : (
              <ReactMarkdown
                components={{
                  img: ({ node, ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt="blog-img" />
                }}
              >
                {markdownContent}
              </ReactMarkdown>
            )}
          </div>

          {nextArticle && (
            <div style={{ textAlign: 'right', marginTop: '2rem' }}>
              <Link to={`/blog/${nextArticle.slug}`}>
                Avanti →
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ArticleBlock;
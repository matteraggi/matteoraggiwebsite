import { Link, useParams } from "react-router-dom";
import postsData from "./../../posts.json";
import articlesData from "./../../articles.json";
import SEO from "./SEO";
import ReactMarkdown from "react-markdown";
import React, { useMemo } from "react";

const ArticleBlock = () => {
  const { slug } = useParams();

  const post = postsData.posts.find((post) => post.slug === slug);
  const postInfo = articlesData.articles.find((post) => post.slug === slug);

  const sortedArticles = useMemo(() => {
    return [...articlesData.articles].sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split("-").map(Number);
      const [dayB, monthB, yearB] = b.date.split("-").map(Number);
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);
      return dateA.getTime() - dateB.getTime();
    });
  }, []);

  const currentIndex = sortedArticles.findIndex((art) => art.slug === slug);
  const nextArticle =
    currentIndex >= 0 && currentIndex < sortedArticles.length - 1
      ? sortedArticles[currentIndex + 1]
      : null;

  if (!post || !postInfo) {
    return (
      <>
        <div className="padding-top-">
          <Link to="/blog">
            <img
              alt="arrow-back"
              src="/arrow.svg"
              style={{ width: "50px", height: "auto", marginLeft: "35px" }}
              loading="lazy"
            />
          </Link>
        </div>
        <p>Questo post non esiste!</p>
      </>
    );
  }

  return (
    <>
      <div className="padding-top-">
        <Link to="/blog">
          <img
            alt="arrow-back"
            src="/arrow.svg"
            style={{ width: "50px", height: "auto", marginLeft: "35px" }}
            loading="lazy"
          />
        </Link>
      </div>
      <SEO
        title={postInfo.title}
        description={post.description}
        name="Matteo Raggi Blog"
        type="article"
        slug={"blog/" + post.slug}
      />
      <div className="blog-box">
        <div className="container-article">
          <div className="post-header-section">
            <div className="post-title">
              <h1 className="post-header">{postInfo.title}</h1>
              <img
                src={postInfo.image ?? "/public/fav-image.png"}
                alt={postInfo.imageAlt ?? "image"}
                style={{
                  width: "70%",
                  height: "auto",
                  margin: "0 auto 2rem",
                  display: "block",
                }}
                loading="lazy"
              />
              <p style={{ fontStyle: "italic" }}>
                {postInfo.date} - {post.author}
              </p>
            </div>
          </div>

          <div className="post-content">
            {post.isMarkdown ? (
              <ReactMarkdown>{post.content}</ReactMarkdown>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            )}
          </div>

          {nextArticle && (
            <div
              style={{
                width: "100%",
                textAlign: "right",
                marginTop: "2rem",
                marginBottom: "3rem",
                paddingRight: "1rem", // se vuoi un po' di distacco dal bordo destro
              }}
            >
              <Link
                to={`/blog/${nextArticle.slug}`}
                style={{
                  textDecoration: "none",
                  color: "#0070f3",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                Vai al prossimo articolo →
              </Link>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default ArticleBlock;

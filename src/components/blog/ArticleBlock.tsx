import { Link, useParams } from "react-router-dom";
import postsData from "./../../posts.json";
import articlesData from "./../../articles.json";
import SEO from "./SEO";
import ReactMarkdown from "react-markdown";

const ArticleBlock = () => {
  const { slug } = useParams();

  const post = postsData.posts.find((post) => post.slug === slug);
  const postInfo = articlesData.articles.find((post) => post.slug === slug);

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
                  width: "100%",
                  height: "auto",
                  marginBottom: "2rem",
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
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleBlock;

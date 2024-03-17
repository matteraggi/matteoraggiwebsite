import { Link, useParams } from "react-router-dom";
import postsData from "./../../posts.json";
import articlesData from "./../../articles.json";

const ArticleBlock = () => {
  const { slug } = useParams();

  // Trova il post corrispondente allo slug
  const post = postsData.posts.find((post) => post.slug === slug);
  const postInfo = articlesData.articles.find((post) => post.slug === slug);

  if (!post || !postInfo) {
    return (
      <>
        <div className="padding-top-">
          <Link to="/blog">
            <img
              src="/arrow.svg"
              style={{ width: "50px", height: "auto", marginLeft: "35px" }}
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
            src="/arrow.svg"
            style={{ width: "50px", height: "auto", marginLeft: "35px" }}
          />
        </Link>
      </div>
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
                  marginBottom: "2rem",
                }}
              />
              <p style={{ fontStyle: "italic" }}>
                {postInfo.date} - {post.author}
              </p>
            </div>
          </div>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ArticleBlock;

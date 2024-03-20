import { Link } from "react-router-dom";

export const PostBlock = ({ post }: { post: any }) => {
  return (
    <div className="article-box">
      <Link to={`/blog/${post.slug}`}>
        <div>
          <img
            src={post.image ?? "/public/fav-image.png"}
            alt={post.imageAlt ?? "image"}
            className="article-image"
            loading="lazy"
          />
        </div>
      </Link>
      <Link to={`/blog/${post.slug}`} className="article-content">
        <h3 className="article-header">{post.title}</h3>
        <p className="article-date">{post.date.slice(0, 10)}</p>
      </Link>
    </div>
  );
};

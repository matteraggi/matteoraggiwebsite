import { Link } from "react-router-dom";

export const PostBlock = ({ post, lang = 'it' }: { post: any, lang?: string }) => {

  const title = typeof post.title === 'object'
    ? (post.title[lang] || post.title['it'])
    : post.title;

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

        <h3 className="article-header">{title}</h3>

        <p className="article-date">{post.date.slice(0, 10)}</p>
      </Link>
    </div>
  );
};
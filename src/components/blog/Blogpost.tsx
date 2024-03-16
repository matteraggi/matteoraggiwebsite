import { PostBlock } from "./PostBlock";
import articlesData from "./../../articles.json";

interface Article {
  title: string;
  date: string;
  slug: string;
  image: string;
  imageAlt: string;
  category: string | null;
}

interface ArticlesData {
  articles: Article[];
}

const Blogpost = () => {
  const articles: Article[] = (articlesData as ArticlesData).articles;

  return (
    <div className="blog-box">
      <div className="container-blog">
        <h3 className="text-xl">Tutti i miei articoli: </h3>
        <div className="post-grid">
          {articles.map((article: Article, index: number) => (
            <PostBlock key={index} post={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogpost;

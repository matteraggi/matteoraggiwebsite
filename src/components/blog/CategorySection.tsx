import { Link, useParams } from "react-router-dom";
import articlesData from "./../../articles.json";
import { PostBlock } from "./PostBlock";
import SEO from "./SEO";

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

const CategorySection = () => {
  const { slug } = useParams();

  const post = articlesData.articles.find((post) => post.category === slug);
  const articles: Article[] = (articlesData as ArticlesData).articles;
  const articlesArray: Article[] = [];

  for (let i = 0; i < articles.length; i++) {
    if (articles[i].category === slug) {
      articlesArray.push(articles[i]);
    }
  }

  if (!post) {
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
        <p>Questa categoria non esiste!</p>
      </>
    );
  }

  return (
    <>
      <SEO
        title={"Matte.dev - " + slug}
        description={"Articoli della categoria " + slug}
        name="Matteo Raggi Blog"
        type="page"
        slug={"category/" + slug}
      />
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
      <div className="blog-box">
        <div className="container-blog">
          <div className="post-grid">
            {articlesArray.map((post: any, index: number) => (
              <PostBlock key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySection;

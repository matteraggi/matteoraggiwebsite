import { Link } from "react-router-dom";

const CategoryBlock = ({
  category,
  slug,
}: {
  category: string;
  slug: string;
}) => {
  return (
    <Link to={`/category/${slug}`} className="article-content">
      <div className={`category-box ${slug}`}>
        <h3 className="category-header">{category}</h3>
      </div>
    </Link>
  );
};

export default CategoryBlock;

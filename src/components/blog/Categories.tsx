import CategoryBlock from "./CategoryBlock";

const Categories = () => {
  return (
    <div className="blog-box">
      <div className="container-category">
        <div className="category-grid">
          <CategoryBlock category="Coding" slug="coding" />
          <CategoryBlock category="Blockchain" slug="blockchain"/>
          <CategoryBlock category="Finanza Personale" slug="finanza-personale"/>
        </div>
      </div>
    </div>
  );
};

export default Categories;

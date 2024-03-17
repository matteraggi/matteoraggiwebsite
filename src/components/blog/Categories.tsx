import CategoryBlock from "./CategoryBlock";

const Categories = () => {
  return (
    <div className="blog-box">
      <div className="container-category">
        <div className="category-grid">
          <CategoryBlock category="Coding" slug="coding" />
          <CategoryBlock category="Web3" slug="web3"/>
          <CategoryBlock category="Blockchain" slug="blockchain"/>
          <CategoryBlock category="Criptovalute" slug="criptovalute"/>
          <CategoryBlock category="NFT e Metaverso" slug="nft-metaverso"/>
          <CategoryBlock category="Finanza Personale" slug="finanza-personale"/>
        </div>
      </div>
    </div>
  );
};

export default Categories;

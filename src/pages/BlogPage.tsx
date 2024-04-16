import Blogpost from "../components/blog/Blogpost";
import Categories from "../components/blog/Categories";
import SEO from "../components/blog/SEO";

const BlogPage = () => {
  return (
    <>
      <SEO
        title="Matte.dev - Blog"
        description="Tutti i post del Blog del mio sito."
        name="Matteo Raggi Blog"
        type="page"
        slug="/blog"
      />
      <Categories />
      <Blogpost />
    </>
  );
};

export default BlogPage;

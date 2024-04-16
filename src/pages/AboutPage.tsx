//import Aboutpagebody from "../components/Aboutpagebody";
import Abovethefoldabout from "../components/Abovethefoldabout";
import SEO from "../components/blog/SEO";

const AboutPage = () => {
  return (
    <>
        <SEO
        title="Matte.dev - Chi sono"
        description="Ciao, sono Matteo Raggi. Creo Applicazioni Web e mi diverto.
        Based in Bologna, Italia📍"
        name="Matteo Raggi Blog"
        type="page"
        slug="/about"
      />
      <Abovethefoldabout />
      {/*<Aboutpagebody />*/}
    </>
  );
};

export default AboutPage;

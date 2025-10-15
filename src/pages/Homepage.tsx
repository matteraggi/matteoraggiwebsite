import Abovethefold from "../components/Abovethefold";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import SEO from "../components/blog/SEO";
import WorkingExperience from "../components/WorkingExperience";

const Homepage = () => {
  return (
    <>
      <SEO
        title="Matte.dev - Full Stack Developer"
        description="Ciao, sono Matteo Raggi. Creo Applicazioni Web e mi diverto.
        Based in Bologna, Italia📍"
        name="Matteo Raggi Blog"
        type="page"
        slug=""
      />
      <Abovethefold />
      <About />
      <Portfolio />
      <WorkingExperience />
      <Contact />
    </>
  );
};

export default Homepage;

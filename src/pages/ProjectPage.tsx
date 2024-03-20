import AbovethefoldProject from "../components/AbovethefoldProject";
import ProjectSection from "../components/ProjectSection";
import SEO from "../components/blog/SEO";

const ProjectPage = () => {
  return (
    <>
      <SEO
        title="Matte.dev - I miei progetti"
        description="Ciao, sono Matteo Raggi. Qui puoi trovare tutti i miei migliori progetti."
        name="Matteo Raggi Blog"
        type="page"
      />
      <AbovethefoldProject />
      <ProjectSection />
    </>
  );
};

export default ProjectPage;

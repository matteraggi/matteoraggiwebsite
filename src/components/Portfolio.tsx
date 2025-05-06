import ProjectList from "./ProjectList";

const Portfolio = () => {
  return (
    <section className="grey2">
      <div className="max-w-[1085px] mx-auto py-[20px]">
        <div className="project-content">
          <h2 className="sezione">PORTFOLIO</h2>
          <h3 className="sub-headline mt-3 mb-3">
            Ogni progetto è artigianale, unico e costruito da zero 🛠️
          </h3>
          <ProjectList />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

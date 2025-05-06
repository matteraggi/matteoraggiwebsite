const About = () => {
  return (
    <section className="about">
      <div className="max-w-[1085px] mx-auto py-[20px]">
        <div className="about-content">
          <div className="image-side">
            <img
              src="../webdev.jpg"
              alt="stock image cs"
              width="450"
              height="300"
              className="rounded-photo"
              loading="lazy"
            ></img>
          </div>
          <div className="text-side">
            <h2 className="sezione">ABOUT ME</h2>
            <h3 className="sub-headline mt-3">
              Il mio percorso professionale 🎯
            </h3>
            <p className="mt-3">
              Mi sono laureato in informatica nel 2024.
              <br /> Per tutto il mio percorso universitario mi sono concentrato non solo sul passare gli esami, ma anche nel creare progetti personali che ritenevo interessanti.
              <br />
              Adesso sto proseguendo i miei studi con una laurea magistrale, e nel mentre continuo ad imparare sperimentando tecnologie che non conosco. <br /> Qui sotto puoi trovare i miei migliori progetti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

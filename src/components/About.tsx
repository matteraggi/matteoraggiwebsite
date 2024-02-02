const About = () => {
  return (
    <section className="about">
      <div className="contenitore">
        <div className="about-content">
          <div className="image-side">
            <img
              src="../webdev.jpg"
              alt="stock image cs"
              width="450"
              className="rounded-photo"
            ></img>
          </div>
          <div className="text-side">
            <h2 className="sezione">ABOUT ME</h2>
            <h3 className="sub-headline mt-3">
              La passione per lo sviluppo Web 🎯
            </h3>
            <p className="mt-3">
              Sono un laureando in Informatica e da sempre mi piace l'idea di
              creare qualcosa di mio.
              <br /> Essere un libero professionista mi permette di esprimere la
              mia creatività e di costruire qualcosa di unico.
              <br />
              Poter realizzare ciò che prima era solo nella mia testa, o nella
              testa di altre persone, è una sensazione unica. <br /> Da questo
              nasce la mia passione per lo Sviluppo Web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

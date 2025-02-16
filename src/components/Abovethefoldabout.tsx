const Abovethefoldabout = () => {
  return (
    <section className="abovethefoldabout">
      <div className="contenitoreaboutpage">
        <div className="heading-about">
          <h1 className="heading">Non sai chi sono?</h1>
          <div className="relative">
            <h2 className="heading-2 inline">Adesso mi presento! 🙋🏻‍♂️</h2>
          </div>
          <p className="body-contact">
            Mi chiamo Matteo Raggi. Da sempre sono appassionato di Informatica e
            attratto da lavori creativi. <br />
            Lavori che mi lasciassero la possibilità di creare qualcosa di
            nuovo. <br /> <br />
            Nel 2021 ho deciso di aprire il mio primo Blog. <br /> <br />
            Dopo 3 anni di studio, un laurea triennale, tanti progetti personali e non, ho
            deciso di iniziare la mia attività da libero professionista come
            Sviluppatore Web.
          </p>
        </div>
        <img src="../matteoraggiphoto1.png" className="chisono-photo" loading="lazy" alt="matteo raggi"/>
      </div>
    </section>
  );
};

export default Abovethefoldabout;

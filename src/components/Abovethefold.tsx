import Linkedin from "./Linkedin";
import Instagram from "./Instagram";
import Whatsapp from "./Github";
import React from "./React";
import Typescript from "./Typescript";
import Figma from "./Figma";
import Nextjs from "./Nextjs";
import MongoDB from "./MongoDB";
import Nodejs from "./Nodejs";

const Abovethefold = () => {
  return (
    <section className="grey1">
      <div className="contenitore">
        <div className="contenuto">
          <div className="main">
            <div className="main-text">
              <h1 className="heading">Sono un <br />Full-Stack Developer 🧑🏻‍💻</h1>
              <p className="mt-3">
                Ciao, sono Matteo Raggi. Creo Applicazioni Web e mi diverto. <br /> Based in Bologna, Italia📍
              </p>
              <span>
                <Linkedin width="35px" height="35px" />

                <Instagram width="35px" height="35px" />

                <Whatsapp />
              </span>
            </div>
            <div className="hero-img"></div>
          </div>
          <div className="skills">
            <p>Tech Stack</p>
            <ul>
              <li className="hover">
                <Typescript />
              </li>
              <li className="hover">
                <React />
              </li>
              <li className="hover">
                <Nextjs />
              </li>
              <li className="hover">
                <Figma />
              </li>
              <li className="hover">
                <MongoDB />
              </li>
              <li className="hover">
                <Nodejs />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abovethefold;

import Linkedin from "./Linkedin";
import Instagram from "./Instagram";
import Whatsapp from "./Github";
import React from "./React";
import Typescript from "./Typescript";
import Figma from "./Figma";
import Nextjs from "./Nextjs";
import MongoDB from "./MongoDB";
import Nodejs from "./Nodejs";
import AWS from "./AWS";
import Kotlin from "./Kotlin";
import Supabase from "./Supabase";
import Flutter from "./Flutter";

const Abovethefold = () => {
  return (
    <section className="grey1">
      <div className="contenitore">
        <div className="contenuto">
          <div className="main">
            <div className="main-text">
              <h1 className="heading">Full-Stack Developer 🧑🏻‍💻</h1>
              <p className="mt-3">
                Ciao, sono Matteo Raggi. Creo Applicazioni Web e mi diverto.{" "}
                <br /> Based in Bologna, Italia📍
              </p>
              <span>
                <Linkedin width="35px" height="35px" />

                <Instagram width="35px" height="35px" />

                <Whatsapp />
              </span>
            </div>
            <div rel="preload" className="hero-img"></div>
          </div>
          <div className="skills">
            <p>Tech Stack</p>
            <ul>
              <li className="hover">
                <React />
              </li>
              <li className="hover">
                <Nextjs />
              </li>
              <li className="hover">
                <Flutter />
              </li>
              <li className="hover">
                <Kotlin />
              </li>
              <li className="hover">
                <AWS />
              </li>
              <li className="hover">
                <Supabase />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abovethefold;

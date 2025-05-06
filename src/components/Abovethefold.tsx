import Linkedin from "./icons/Linkedin";
import Instagram from "./icons/Instagram";
import Whatsapp from "./icons/Github";
import React from "./icons/React";
import Nextjs from "./icons/Nextjs";
import AWS from "./icons/AWS";
import Kotlin from "./icons/Kotlin";
import Supabase from "./icons/Supabase";
import Flutter from "./icons/Flutter";

const Abovethefold = () => {
  return (
    <section className="grey1">
      <div className="max-w-[1085px] mx-auto py-[20px]">
        <div className="contenuto">
          <div className="main">
            <div className="main-text">
              <h1 className="heading">Full-Stack Developer 🧑🏻‍💻</h1>
              <p className="mt-3">
                Ciao, sono Matteo Raggi. Sono laureato in Informatica e {" "}
                <br />
                faccio cose con il computer.
                <br />
                Based in Bologna, Italia📍
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

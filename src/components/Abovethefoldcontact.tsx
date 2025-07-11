import { useState } from "react";
import Instagram from "./icons/Instagram";
import Linkedin from "./icons/Linkedin";
import Mail from "./icons/Mail";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";

const Abovethefoldcontact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const template = {
    form_name: name,
    form_lastname: lastName,
    form_email: email,
    form_text: text,
  };

  function contactme(event: any) {
    event.preventDefault();
    if (name === "" || lastName === "" || email === "" || text === "") {
      alert("Compila tutti i campi prima di inviare!");
      return;
    }

    emailjs.send(
      "service_rd3ok48",
      "template_5xg2wrn",
      template,
      "X8vOilcepKloZtdAE"
    );

    setName("");
    setLastName("");
    setEmail("");
    setText("");
  }

  return (
    <section className="abovethefoldcontact">
      <div className="container">
        <div className="contact-body">
          <div>
            <h1 className="heading">Vuoi lavorare con me? ✈️</h1>
            <p>Mandami un messaggio 📲.</p>
            <img
              src="../contact-photo.JPG"
              className="contact-photo"
              loading="lazy"
              alt="matteo raggi contattami"
            />
            <span className="social-icon">
              <Linkedin width="50px" height="50px" />
              <Instagram width="50px" height="50px" />
              <Mail />
            </span>
          </div>
          <div className="container-form">
            <form onSubmit={contactme}>
              <div className="box2 box2-1">
                <div className="label">
                  <div className="labelform space">
                    <TextField
                      fullWidth
                      id="standard-basic"
                      label="Nome"
                      variant="outlined"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                    <div className="x-margin"></div>
                    <TextField
                      fullWidth
                      id="standard-basic"
                      label="Cognome"
                      variant="outlined"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                    />
                  </div>
                  <div className="labelform">
                    <TextField
                      fullWidth
                      type="email"
                      id="standard-basic"
                      label="Email"
                      variant="outlined"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="labelform">
                    <TextField
                      fullWidth
                      id="standard-multiline-static"
                      label="Parlami del tuo progetto"
                      multiline
                      rows={6}
                      defaultValue=""
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                    />
                  </div>
                </div>
                <div>
                  <input type="submit" value="Invia" className="formbutton" />
                </div>
              </div>
            </form>
          </div>
          <span className="social-icon-mobile">
            <Linkedin width="50px" height="50px" />
            <Instagram width="50px" height="50px" />
            <Mail />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Abovethefoldcontact;

import { useState } from "react";
import Instagram from "./Instagram";
import Linkedin from "./Linkedin";
import Mail from "./Mail";
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
    console.log(name, lastName, email, email, text);

    emailjs
      .send(
        "service_rd3ok48",
        "template_5xg2wrn",
        template,
        "X8vOilcepKloZtdAE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
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
            <h1 className="heading">Vuoi contattarmi? ✈️</h1>
            <p>Parlami del tuo progetto. Ti aiuto a realizzarlo.</p>
            <img src="../contactphoto.jpg" className="contact-photo" />
            <span className="social-icon">
              <Instagram width="50px" height="50px" />
              <Linkedin width="50px" height="50px" />
              <Mail />
            </span>
          </div>
          <form onSubmit={contactme}>
            <div className="box2 box2-1">
              <div className="label">
                <h2 className="sub-headline labelform">
                  Mandami un messaggio 📲
                </h2>
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
      </div>
    </section>
  );
};

export default Abovethefoldcontact;

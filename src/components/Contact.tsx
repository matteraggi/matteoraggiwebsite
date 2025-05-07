import ContactItems from "./ContactItems";

const Contact = () => {
  return (
    <section className="contact">
      <div className="max-w-[1085px] mx-auto px-10">
        <h2 className="sezione">CONTACT</h2>
        <h3 className="sub-headline mt-3">Ti posso aiutare? Contattami! 📬</h3>
        <div className="contact-icons">
          <ContactItems
            heading="Location"
            text="Bologna, Italia"
            image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABTklEQVR4nN1VsUoDQRDdn1BsjV28WdKpoH6FVhb+i6ZSnLmzkcQPECyFFBY6cwk2Iuo/pFWM0UaEKHsxxtzmdDd3gvjgVXP33rwZ5k6pfw+9ezGtkauAcgMkz33ytUbZNrVc4hDKuibuapK38eQuIK9NLo7cyxb/IHLP2yQZy7edywgB+bESNafcDZCrtog8aOKaIZB0rDrJlrsBya0lvh/Pfo4PW6W0iVm8RwJ5SnV3YDdh0owu3NnAHgHXxqQ8TKf0SXCVfhmwVRrU56OzOWtEyJf5lkzS0Sh1w/xLDjlwugEa3kIlapaVD4D41MOg4SWepKDzBddLDkiWvA0SE5TjH6+Y5EhNivIOz2ji++zu5c48o/IAMN7MMggw3lBFQCM37NHwSSHiw5+OtL+Mpu319XQB7PGiJn4Bklcd8nKh4mpgQvEqoKz8ivifxTu7vtErgn3djgAAAABJRU5ErkJggg=="
          />
          <ContactItems
            heading="Email"
            text="raggimatteoo@gmail.com"
            image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVR4nO2SP0jDUBDG659FBTcHF8FVeqcoFDdBEBS6OoiLk6ujYwUXQXKXiEtXx64O6nSXikVoB3cXjbsguohK5FkTgmk0bQQdcvDB47133++9uysU8vg3UbR1CVhvkNXPJJJb4xUDIMthZnMOILob/0LF7wfSTSB5yPD6e+NR8P2+xFLNkTsOrEc9vLo249THEo2B9QRtKYcls6WcsifXSO5i2Ety15G12aEH7QQgPZ6yzyfM3rzVGAKWHWR5/moMrC9A4uD+2chH/oE7CaSnwXki4DP5CVi3V2u1gfaE1RFJGpFaX6AtRXO2UJFBIN1C0seox7eAiJpA7mw4BCxrRmZttqYtt4SsV51y0wJ8ZHlDlmrJuRwNB6HaGkaSPSB9TcrrAqAByAOWDSMkvfvpfg8A7Uo5wO++RCkah6klXgwArCu/AxEPLVmOAfL4s3gHYSTSU8Q1ALAAAAAASUVORK5CYII="
          />
          <ContactItems
            heading="Phone Number"
            text="+39 333 416 5631"
            image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABSklEQVR4nO2UMS8EURDHX+h1EskVCqo7M0ujoOQDKGjFR6Ci05OdsZ1OoiF3H8HezVDJFRoSiey1Ei1CwTl5t7uxcau49bbil2y1m/ntm3nzN+afYQCSZWTpIGsPWbpA0q4FzSnjCiSN4uJfD7CeOBMAy32O4MadgFS+C5Dl0aFADnME3bV6fdSNgGVjQEAaGlfMB5djwPKSEdxW92TCuARZG8mfR7PBxbhxjUetRST5sMP1/LBiygBITpMWNUoRzO03J4H1ub8HJFulSGZYVuwVTSJj9ccPd3sjhSVIshOfQt+BZTP7zl4AZD1L52U33sZK1ZfpoSTAuh2fJJ6JHbwtDqTXg0vZb2m7WLtIn9LoyAvFTHa9mSJ4flgB1uO4JfnF03aa31ALzheSZXzNlZBGxlWsIOs6kh4ByxWwPADJHRy0lpwIzJ/hE+wAHMjnsXCDAAAAAElFTkSuQmCC"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

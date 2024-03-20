import Abovethefoldcontact from "../components/Abovethefoldcontact";
import SEO from "../components/blog/SEO";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Matte.dev - Contattami"
        description="Ciao, sono Matteo Raggi. Qui puoi contattarmi per collaborazioni, progetti o info."
        name="Matteo Raggi Blog"
        type="page"
      />
      <Abovethefoldcontact />
    </>
  );
};

export default ContactPage;

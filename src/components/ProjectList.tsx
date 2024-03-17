import PortfolioCard from "./PortfolioCard";
import PortfolioCardReverse from "./PortfolioCardReverse";
 
const ProjectList = () => {
  return (
    <div className="projects-grid">
      <PortfolioCard
        heading="Squealer"
        text="Un social network innovativo. Un social network delle persone, che premia chi crea contenuto valido, non chi ha followers."
        sourceimage="../squealer.jpeg"
        linkwebsite=""
        linkcode="https://github.com/matteraggi/avvoltoio-smm"
        code={true}
        website={false}
      />
      <PortfolioCardReverse
        heading="Depliant Hotel CHC"
        text="Depliant di presentazione Hotel per un rinomato gruppo di Hotel CHC. Vengono mostrati tutti i dati degli hotel inseriti in backoffice."
        sourceimage="../chc-hotel.png"
        linkwebsite=""
        linkcode=""
        code={false}
        website={false}
      />
      <PortfolioCard
        heading="StudyFarm App"
        text="Applicazione Ibrida per la gestione delle ore di studio. Timer con ricompense monetarie spendibili nello Shop per incentivare lo studio attraverso la gamification."
        sourceimage="../studyfarm.jpg"
        linkwebsite=""
        linkcode="https://github.com/matteraggi/StudyApp-react-native"
        code={true}
        website={false}
      />
    </div>
  );
};

export default ProjectList;

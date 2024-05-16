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
        downloadfile=""
        fileName=""
        code={true}
        website={false}
        download={false}
      />
      <PortfolioCardReverse
        heading="Depliant Hotel CHC"
        text="Depliant di presentazione Hotel per il rinomato gruppo di Hotel CHC. Vengono mostrati tutti i dati degli hotel inseriti in backoffice."
        sourceimage="../chc-hotel.png"
        linkwebsite=""
        linkcode=""
        downloadfile=""
        fileName=""
        code={false}
        website={false}
        download={false}
      />
      <PortfolioCard
        heading="StudyFarm App"
        text="Applicazione Ibrida per la gestione delle ore di studio. Timer con ricompense monetarie spendibili nello Shop per incentivare lo studio attraverso la gamification."
        sourceimage="../studyfarm.jpg"
        linkwebsite=""
        linkcode="https://github.com/matteraggi/StudyApp-react-native"
        downloadfile="../studyapp.apk"
        fileName="StudyFarm App"
        code={true}
        website={false}
        download={true}
      />
      <PortfolioCardReverse
        heading="Kebabbo"
        text="Una piattaforma web per aiutare studenti universitari a trovare un pasto buono, veloce ed economico. Per il momento disponibile solo per la città di Bologna."
        sourceimage="../kebabbo.jpg"
        linkwebsite="https://kebabbo.vercel.app"
        linkcode="https://github.com/matteraggi/kebabbo"
        downloadfile=""
        fileName=""
        code={true}
        website={true}
        download={false}
      />
    </div>
  );
};

export default ProjectList;

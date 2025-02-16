import PortfolioCard from "./PortfolioCard";
import PortfolioCardReverse from "./PortfolioCardReverse";

const ProjectList = () => {
  return (
    <div className="projects-grid">
      <PortfolioCard
        heading="Squealer"
        text="Un social network innovativo. Un social network delle persone, che premia chi crea contenuto valido, non chi ha followers. Quella mostrata qui sotto è la piattaforma per Social Media Manager."
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
        text="Applicazione Android e iOS per la gestione delle ore di studio. Timer con ricompense monetarie spendibili nello Shop per incentivare lo studio attraverso la gamification."
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
        heading="KebabBo"
        text="Una piattaforma web per aiutare studenti universitari a trovare un pasto buono, veloce ed economico. Per il momento disponibile solo per la città di Bologna."
        sourceimage="../kebabbo.jpg"
        linkwebsite="https://kebabbo.top/"
        linkcode=""
        downloadfile=""
        fileName=""
        code={false}
        website={true}
        download={false}
      />
      <PortfolioCard
        heading="HomeGuard"
        text="Applicazione Android per il controllo della sicurezza domestica. Viene associata con dispositivi ESP32 (allarme, sensore per la porta, fotocamera, sensore NFC) i quali potranno essere controllati e monitorati da essa."
        sourceimage="../homeguard.jpg"
        linkwebsite=""
        linkcode=""
        downloadfile=""
        fileName=""
        code={false}
        website={false}
        download={false}
      />
            <PortfolioCard
        heading="MissionBee"
        text="Applicazione iOS in Swift sviluppata per partecipare alla Swift Student Challenge. È un gioco per bambini che insegna a rispettare l'ambiente e il ruolo delle api in esso."
        sourceimage="../missionbee.png"
        linkwebsite=""
        linkcode=""
        downloadfile=""
        fileName=""
        code={false}
        website={false}
        download={false}
      />
    </div>
  );
};

export default ProjectList;

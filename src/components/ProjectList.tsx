import PortfolioCard from "./PortfolioCard";
import PortfolioCardReverse from "./PortfolioCardReverse";

const ProjectList = () => {
  return (
    <div className="projects-grid">
      <PortfolioCard
        heading="HomeGuard"
        route="/homeguard"
        text="Applicazione Android per il controllo della sicurezza domestica. Viene associata con dispositivi ESP32 (allarme, sensore per la porta, fotocamera, sensore NFC) i quali potranno essere controllati e monitorati da essa."
        sourceimage="../homeguard/homeguard.jpg"
        linkwebsite=""
        linkcode=""
        downloadfile=""
        fileName=""
        code={false}
        website={false}
        download={false}
      />

      <PortfolioCardReverse
        heading="Kebabbo"
        route="/kebabbo"
        text="Una piattaforma web per aiutare studenti universitari a trovare un pasto buono, veloce ed economico. Per il momento disponibile solo per la città di Bologna."
        sourceimage="../kebabbo/kebabbo.jpg"
        linkwebsite="https://kebabbo.top/"
        linkcode=""
        downloadfile=""
        fileName=""
        code={false}
        website={true}
        download={false}
      />
      <PortfolioCard
        heading="MissionBee"
        route="/missionbee"
        text="Applicazione iOS in Swift sviluppata per partecipare alla Swift Student Challenge. È un gioco per bambini che insegna a rispettare l'ambiente e il ruolo delle api in esso."
        sourceimage="../missionbee/missionbee.png"
        linkwebsite=""
        linkcode=""
        downloadfile=""
        fileName=""
        code={false}
        website={false}
        download={false}
      />
      <PortfolioCardReverse
        heading="Depliant Hotel CHC"
        route="/depliant-hotel-chc"
        text="Depliant di presentazione Hotel per il rinomato gruppo di Hotel CHC. Vengono mostrati tutti i dati degli hotel inseriti in backoffice."
        sourceimage="../hotelchc/chc-hotel.png"
        linkwebsite=""
        linkcode=""
        downloadfile=""
        fileName=""
        code={false}
        website={false}
        download={false}
      />
      <PortfolioCard
        heading="Squealer"
        route="/squealer"
        text="Un social network innovativo. Un social network delle persone, che premia chi crea contenuto valido, non chi ha followers. Quella mostrata qui è la piattaforma per Social Media Manager."
        sourceimage="../squealer/squealer.jpeg"
        linkwebsite=""
        linkcode="https://github.com/matteraggi/avvoltoio-smm"
        downloadfile=""
        fileName=""
        code={true}
        website={false}
        download={false}
      />
    </div>
  );
};

export default ProjectList;

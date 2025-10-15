import AbovethefoldSingleProject from "../../components/AbovethefoldSingleProject";
import SEO from "../../components/blog/SEO";
import ImageCarousel from "../../components/ImageCarousel";
import TechStack from "../../components/TechStack";


const MissionbeePage = () => {
    const imageUrls = [
        '../missionbee/screen-missionbee-1.png',
        '../missionbee/screen-missionbee-2.png',
        '../missionbee/screen-missionbee-3.png',
        '../missionbee/screen-missionbee-4.png',
        '../missionbee/screen-missionbee-5.png',
    ];

    const tech = [
        "Swift"
    ]

    return (
        <>
            <SEO
                title="MissionBee"
                description="MissionBee è un gioco rivolto ai bambini che mira a sensibilizzare i più piccoli sul tema della sostenibilità ambientale. Scopri di più!"
                name="Matteo Raggi Blog"
                type="page"
                slug="missionbee"
            />
            <div className="max-w-[1085px] mx-auto px-10">
                <AbovethefoldSingleProject title="MissionBee" />
                <ImageCarousel images={imageUrls} mobile={true} />
                <div className="flex flex-col w-full mb-10">
                    <TechStack techstack={tech}
                        linkwebsite=""
                        linkcode=""
                        downloadfile=""
                        fileName=""
                        code={false}
                        website={false}
                        download={false}
                    />
                    <div className="w-full flex items-center justify-center rounded-lg project-text">
                        <p className="text-justify">
                            Applicazione iOS in Swift sviluppata per partecipare alla Swift Student Challenge. Il suo scopo è sensibilizzare i più piccoli sul tema della sostenibilità ambientale e il ruolo delle api in esso.
                            <br /><br />
                            Il gioco ha una componente sia educativa che ludica. Nella schermata principale si può:
                            <ul className="list-disc list-inside">
                                <li>Iniziare una nuova partita 🎮</li>
                                <li>Visualizzare le informazioni sulle api 🐝 e il loro ruolo nell'ecosistema 🌍</li>
                                <li>Accedere alla sezione shop 🛒 per acquistare nuove specie di api con i fiori impollinati</li>
                            </ul>
                            <br />
                            Lato gameplay è un classico gioco a scorrimento verticale in cui bisogna controllare l'ape orizzontalmente per schivare pesticidi e impollinare più fiori possibili.
                            <br /><br />
                            La parte grafica è la componente più importante dell'applicazione, in quanto è rivolta a un pubblico di bambini. Per questo motivo ho deciso di utilizzare uno stile grafico colorato e simpatico, con animazioni fluide e divertenti.
                            <br /><br />
                            L'intero gioco è disegnato a mano, ogni componente, utilizzato un iPad e "Apple Pencil".
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MissionbeePage;

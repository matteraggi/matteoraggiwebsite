import AbovethefoldSingleProject from "../components/AbovethefoldSingleProject";
import SEO from "../components/blog/SEO";
import ImageCarousel from "../components/ImageCarousel";
import TechStack from "../components/TechStack";

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
                <div className="flex flex-col sm:flex-row w-full mb-10 sm:gap-28">
                    <TechStack techstack={tech}
                        linkwebsite=""
                        linkcode=""
                        downloadfile=""
                        fileName=""
                        code={false}
                        website={false}
                        download={false}
                    />
                    <div className="w-full sm:w-3/4 flex items-center justify-center rounded-lg">
                        <p>Applicazione iOS in Swift sviluppata per partecipare alla Swift Student Challenge. È un gioco per bambini che insegna a rispettare l'ambiente e il ruolo delle api in esso.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MissionbeePage;

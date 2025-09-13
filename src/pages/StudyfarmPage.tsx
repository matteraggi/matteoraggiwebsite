import AbovethefoldSingleProject from "../components/AbovethefoldSingleProject";
import SEO from "../components/blog/SEO";
import ImageCarousel from "../components/ImageCarousel";
import TechStack from "../components/TechStack";

const StudyfarmPage = () => {
    const imageUrls = [
        '../studyfarm/screen-studyfarm-1.png',
        '../studyfarm/screen-studyfarm-2.png',
        '../studyfarm/screen-studyfarm-3.png',
    ]

    const tech = [
        "ReactNative"
    ]

    return (
        <>
            <SEO
                title="Studyfarm - Gamification per l'apprendimento"
                description="Studyfarm è un gioco di gamification per l'apprendimento. Scopri di più!"
                name="Matteo Raggi Blog"
                type="page"
                slug="studyfarm"
            />
            <div className="max-w-[1085px] mx-auto px-10">
                <AbovethefoldSingleProject title="Studyfarm" />
                <ImageCarousel images={imageUrls} mobile={true} />
                <div className="flex flex-col w-full mb-10">
                    <TechStack techstack={tech}
                        linkwebsite=""
                        linkcode="https://github.com/matteraggi/StudyApp-react-native"
                        downloadfile="../studyapp.apk"
                        fileName="StudyFarm App"
                        code={true}
                        website={false}
                        download={true}
                    />
                    <div className="w-full sm:w-3/4 flex items-center justify-center rounded-lg">
                        <p>Applicazione Android e iOS per la gestione delle ore di studio. Timer con ricompense monetarie spendibili nello Shop per incentivare lo studio attraverso la gamification.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudyfarmPage;

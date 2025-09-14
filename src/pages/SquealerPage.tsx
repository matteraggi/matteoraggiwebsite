import AbovethefoldSingleProject from "../components/AbovethefoldSingleProject";
import SEO from "../components/blog/SEO";
import ImageCarousel from "../components/ImageCarousel";
import TechStack from "../components/TechStack";

const SquealerPage = () => {
    const imageUrls = [
        '../squealer/screen-squealer-1.png',
        '../squealer/screen-squealer-2.png',
        '../squealer/screen-squealer-3.png',
    ];

    const tech = [
        "Nextjs",
        "Nodejs",
        "MongoDB"
    ]
    return (
        <>
            <SEO
                title="Squealer - Social Innovativo"
                description="Squealer è un social network innovativo che premia chi crea contenuto valido, non chi ha followers. Scopri di più!"
                name="Matteo Raggi Blog"
                type="page"
                slug="squealer"
            />
            <div className="max-w-[1085px] mx-auto px-10">
                <AbovethefoldSingleProject title="Squealer" />
                <ImageCarousel images={imageUrls} mobile={false} />
                <div className="flex flex-col w-full mb-10">
                    <TechStack techstack={tech}
                        linkwebsite=""
                        linkcode="https://github.com/matteraggi/avvoltoio-smm"
                        downloadfile=""
                        fileName=""
                        code={true}
                        website={false}
                        download={false} />
                    <div className="w-full flex items-center justify-center rounded-lg project-text">
                        <p className="text-justify">
                            Piattaforma sviluppata per un progetto universitario di un social network innovativo.
                            È un social network delle persone, che premia chi crea contenuto valido, non chi ha followers.
                            <br /><br />
                            La piattaforma è stata sviluppata con Nextjs per il front-end, Nodejs per il back-end e MongoDB come database.
                            <br /><br />
                            La parte più interessante del progetto è il sistema di votazione dei post, che permette di premiare i contenuti validi e di penalizzare quelli di bassa qualità.
                            <br /><br />
                            Gli utenti che ricevono molti downvote perdono gradualmente la possibilità di scrivere sulla piattaforma, ricevendo un decremento di caratteri. E viceversa.
                            <br /><br />
                            Il progetto ha portato lo sviluppo di 3 piattaforme:
                            <ul className="list-disc list-inside">
                                <li>La piattaforma principale per gli utenti</li>
                                <li>Una piattaforma per i moderatori, che permette di gestire i contenuti e gli utenti</li>
                                <li>Una piattaforma per Social Media Manager, che permette di gestire le campagne pubblicitarie e di monitorare le performance</li>
                            </ul>
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SquealerPage;
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
                <div className="flex flex-col sm:flex-row w-full mb-10 sm:gap-28">
                    <TechStack techstack={tech}
                        linkwebsite=""
                        linkcode="https://github.com/matteraggi/avvoltoio-smm"
                        downloadfile=""
                        fileName=""
                        code={true}
                        website={false}
                        download={false} />
                    <div className="w-full sm:w-3/4 flex items-center justify-center rounded-lg">
                        <p>Un social network innovativo. Un social network delle persone, che premia chi crea contenuto valido, non chi ha followers. Quella mostrata qui è la piattaforma per Social Media Manager.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SquealerPage;
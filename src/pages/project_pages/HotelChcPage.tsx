import AbovethefoldSingleProject from "../../components/AbovethefoldSingleProject";
import SEO from "../../components/blog/SEO";
import ImageCarousel from "../../components/ImageCarousel";
import TechStack from "../../components/TechStack";

const HotelChcPage = () => {
    const imageUrls = [
        '../hotelchc/screen-hotelchc-1.png',
        '../hotelchc/screen-hotelchc-2.png',
        '../hotelchc/screen-hotelchc-3.png',
        '../hotelchc/screen-hotelchc-4.png',
        '../hotelchc/screen-hotelchc-5.png',
        '../hotelchc/screen-hotelchc-6.png',
    ];

    const tech = [
        "Nextjs",
        "Tailwind CSS",
        "AWS",
        "GraphQL",
    ]
    return (
        <>
            <SEO
                title="Depliant Hotel CHC"
                description="Depliant Hotel CHC - Progetto di design e sviluppo web di un depliant per una catena di Hotel."
                name="Matteo Raggi Blog"
                type="page"
                slug="depliant-hotel-chc"
            />
            <div className="max-w-[1085px] mx-auto px-10">
                <AbovethefoldSingleProject title="Depliant Hotel CHC" />
                <ImageCarousel images={imageUrls} mobile={false} />
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
                            Questo progetto, per il quale ho sviluppato solo la parte front-end, è un depliant di presentazione Hotel creato per il gruppo Hotel CHC.
                            <br /><br />
                            La piattaforma ha lo scopo di mostrare a potenziali nuovi partner gli Hotel che fanno già parte del gruppo, le loro caratteristiche e i servizi offerti.
                            <br /><br />
                            Il front-end, costruito in react, si basa su una struttura backend interamente in cloud, su AWS, con GraphQL come linguaggio di comunicazione tra le due parti.
                            <br /><br />
                            La parte grafica è stata curata nei minimi dettagli, con particolare attenzione alla user experience e alla facilità di navigazione.
                            <br /><br />
                            Grazie allo sviluppo di un depliant web invece che di una semplice presentazione statica, è possibile aggiornare in qualsiasi momento i contenuti, aggiungere nuove funzionalità e monitorare le visite.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelChcPage;

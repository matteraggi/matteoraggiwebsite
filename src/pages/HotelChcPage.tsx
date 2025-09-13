import AbovethefoldSingleProject from "../components/AbovethefoldSingleProject";
import SEO from "../components/blog/SEO";
import ImageCarousel from "../components/ImageCarousel";
import TechStack from "../components/TechStack";

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
                    <div className="w-full sm:w-3/4 flex items-center justify-center rounded-lg">
                        <p>Depliant di presentazione Hotel per il rinomato gruppo di Hotel CHC. Vengono mostrati tutti i dati degli hotel inseriti in backoffice.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelChcPage;

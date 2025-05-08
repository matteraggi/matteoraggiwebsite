import AbovethefoldSingleProject from "../components/AbovethefoldSingleProject";
import SEO from "../components/blog/SEO";
import ImageCarousel from "../components/ImageCarousel";
import TechStack from "../components/TechStack";

const HotelChcPage = () => {
    const imageUrls = [
        'https://picsum.photos/id/1018/800/400',
        'https://picsum.photos/id/1023/800/400',
        'https://picsum.photos/id/1024/800/400',
        'https://picsum.photos/id/1025/800/400',
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
                <AbovethefoldSingleProject
                    title="Depliant Hotel CHC"
                    linkwebsite=""
                    linkcode="https://github.com/matteraggi/avvoltoio-smm"
                    downloadfile=""
                    fileName=""
                    code={true}
                    website={false}
                    download={false} />
                <ImageCarousel images={imageUrls} />
                <div className="flex flex-col sm:flex-row w-full mb-10 gap-28">
                    <TechStack techstack={tech}/>
                    <div className="w-full sm:w-3/4 flex items-center justify-center rounded-lg">
                        <p>Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento
                            Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento 2 Elemento
                            2 Elemento 2 Elemento 2 </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelChcPage;

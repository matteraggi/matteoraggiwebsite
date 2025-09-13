import AbovethefoldSingleProject from "../components/AbovethefoldSingleProject";
import SEO from "../components/blog/SEO";
import ImageCarousel from "../components/ImageCarousel";
import TechStack from "../components/TechStack";

const KebabboPage = () => {
    const imageUrls = [
        '../kebabbo/screen-kebabbo-1.jpg',
        '../kebabbo/screen-kebabbo-2.jpg',
        '../kebabbo/screen-kebabbo-3.jpg',
        '../kebabbo/screen-kebabbo-4.jpg',
    ];

    const tech = [
        "Flutter",
        "Supabase",
        "Figma"
    ]
    return (
        <>
            <SEO
                title="Kebabbo - Trova i migliori kebab di Bologna"
                description="Kebabbo è un'app che ti aiuta a trovare i migliori kebab di Bologna. Scopri di più!"
                name="Matteo Raggi Blog"
                type="page"
                slug="kebabbo"
            />
            <div className="max-w-[1085px] mx-auto px-10">
                <AbovethefoldSingleProject title="Kebabbo" />
                <ImageCarousel images={imageUrls} mobile={true} />
                <div className="flex flex-col w-full mb-10">
                    <TechStack techstack={tech}
                        linkwebsite="http://kebabbo.top"
                        linkcode=""
                        downloadfile=""
                        fileName=""
                        code={false}
                        website={true}
                        download={false}
                    />
                    <div className="w-full sm:w-3/4 flex items-center justify-center rounded-lg">
                        <p>Una piattaforma web per aiutare studenti universitari a trovare un pasto buono, veloce ed economico. Per il momento disponibile solo per la città di Bologna.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default KebabboPage;

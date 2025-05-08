import AbovethefoldSingleProject from "../components/AbovethefoldSingleProject";
import SEO from "../components/blog/SEO";
import ImageCarousel from "../components/ImageCarousel";
import TechStack from "../components/TechStack";

const HomeguardPage = () => {

    const imageUrls = [
        'https://picsum.photos/id/1018/800/400',
        'https://picsum.photos/id/1023/800/400',
        'https://picsum.photos/id/1024/800/400',
        'https://picsum.photos/id/1025/800/400',
    ];

    const tech = [
        "Kotlin",
        "C++",
        "AWS",
        "Figma"
    ]

    return (
        <>
            <SEO
                title="Homeguard - Home Security"
                description="Homeguard è un sistema di sicurezza domestica innovativo che ti permette di monitorare la tua casa in tempo reale. Scopri di più!"
                name="Matteo Raggi Blog"
                type="page"
                slug="homeguard"
            />
            <div className="max-w-[1085px] mx-auto px-10">
                <AbovethefoldSingleProject
                    title="Homeguard - Home Security"
                    linkwebsite=""
                    linkcode="https://github.com/matteraggi/avvoltoio-smm"
                    downloadfile=""
                    fileName=""
                    code={true}
                    website={false}
                    download={false} />
                <ImageCarousel images={imageUrls} />
                <div className="flex flex-col sm:flex-row w-full mb-10 gap-28">
                    <TechStack techstack={tech} />
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

export default HomeguardPage;

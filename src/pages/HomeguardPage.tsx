import AbovethefoldSingleProject from "../components/AbovethefoldSingleProject";
import SEO from "../components/blog/SEO";
import ImageCarousel from "../components/ImageCarousel";
import TechStack from "../components/TechStack";

const HomeguardPage = () => {

    const imageUrls = [
        '../homeguard/screen-homeguard-1.png',
        '../homeguard/screen-homeguard-2.png',
        '../homeguard/screen-homeguard-3.png',
        '../homeguard/screen-homeguard-4.png',
        '../homeguard/screen-homeguard-5.png',
        '../homeguard/screen-homeguard-6.png',
        '../homeguard/screen-homeguard-7.png',
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
                <AbovethefoldSingleProject title="Homeguard - Home Security" />
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
                    <div className="w-full sm:w-3/4 flex items-center justify-center rounded-lg">
                        <p>Applicazione Android per il controllo della sicurezza domestica. Viene associata con dispositivi ESP32 (allarme, sensore per la porta, fotocamera, sensore NFC) i quali potranno essere controllati e monitorati da essa. </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeguardPage;

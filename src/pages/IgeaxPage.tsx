import AbovethefoldSingleProject from "../components/AbovethefoldSingleProject";
import SEO from "../components/blog/SEO";
import ImageCarousel from "../components/ImageCarousel";
import TechStack from "../components/TechStack";

const HomeguardPage = () => {

    const imageUrls = [
        '../igeax/screen-igeax-1.png',
        '../igeax/screen-igeax-2.png',
        '../igeax/screen-igeax-3.png',
        '../igeax/screen-igeax-4.png',
    ];

    const tech = [
        "React",
        "Solidity",
    ]

    return (
        <>
            <SEO
                title="Igeax - Hospital Sanification"
                description="Igeax è un sistema innovativo per la sanificazione degli ospedali, basato su Blockchain. Scopri di più!"
                name="Matteo Raggi Blog"
                type="page"
                slug="igeax"
            />
            <div className="max-w-[1085px] mx-auto px-10">
                <AbovethefoldSingleProject title="Igeax - Hospital Sanification" />
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
                        <p>Applicazione Web per la sanificazione di ospedali. Costruita con React e contratti su Ethereum scritti in Solidity. Permette di tracciare ogni operazione di sanificazione e di verificarne l'effettiva esecuzione.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeguardPage;

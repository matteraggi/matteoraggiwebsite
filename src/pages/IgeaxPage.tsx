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
                    <div className="w-full flex items-center justify-center rounded-lg project-text">
                        <p className="text-justify">
                            IgeaX è una applicazione web per la sanificazione di ospedali, Invece di basarsi su registri cartacei o digitali centralizzati, IgeaX utilizza la tecnologia blockchain per garantire che ogni operazione di sanificazione sia tracciabile, immutabile e verificabile.
                            <br /><br />
                            L'applicazione è costruita con React per il front-end e utilizza Smart Contract su Ethereum scritti in Solidity per gestire le operazioni di sanificazione.
                            <br /><br />
                            La piattaforma ha una struttura molto semplice. Gli operatori autorizzati possono registrare una nuova sanificazione sia scannerizzando il qr code della stanza (un numero intero), sia inserendolo manualmente.
                            <br /><br />
                            La sanificazione della specifica stanza viene scritta sullo smart contract. Sarà quindi possibile verificare in qualsiasi momento quando è stata effettuata l'ultima sanificazione di una specifica stanza, e da chi.
                            <br /><br />
                            Nella homepage invece si possono visualizzare velocemente la lista delle stanze presenti, evidenziate con colore rosso se sono da sanificare (nessuna sanificazione nella giornata odierna) e con colore verde se già sanificate. Viene anche mostrato l'orario preciso di ultima sanificazione.
                            <br /><br />
                            Cliccando sulla pagina di una specifica stanza si possono vedere tutte le sanificazioni effettuate, con data, orario e operatore che l'ha effettuata.
                            <br /><br />
                            Chiaramente l'applicazione è una beta, ed essendo tale non è stata testata in ambiente reale ed è stata costruita in modo da funzionare completamente senza piattaforma di backoffice. Tuttavia il progetto potrebbe ricevere ulteriori sviluppi in futuro.

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeguardPage;

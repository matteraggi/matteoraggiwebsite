import AbovethefoldSingleProject from "../../components/AbovethefoldSingleProject";
import SEO from "../../components/blog/SEO";
import ImageCarousel from "../../components/ImageCarousel";
import TechStack from "../../components/TechStack";

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
                    <div className="w-full flex items-center justify-center rounded-lg project-text">
                        <p className="text-justify">
                            Homeguard è un progetto di un sistema di sicurezza domestica innovativo basato su una applicazione Android sviluppata in Kotlin, dispositivi IoT basati su ESP32 programmati in C++ e un backend su AWS per la gestione della comunicazione tra le due parti, database e altro.
                            Questo progetto è stato la mia tesi di laurea triennale in Informatica all'Università di Bologna.
                            <br /><br />
                            L'applicazione Android permette di controllare a 360 gradi lo stato di sicurezza della propria abitazione.
                            Questo comprende: la visualizzazione e modifica dello stato dell'allarme, la visualizzazione dei record di allarmi scattati e foto in allegato, la gestione e visualizzazione (in casa o fuori) di ogni membro della casa, la recezione di notifiche push, la gestione del pin dell'allarme fisico e tanto altro.
                            Ma la funzione più innovativa è la gestione automatica dell'allarme.
                            <br /><br />
                            Attraverso l'utilizzo di geofencing e accesso della posizione in tempo reale, l'applicazione è in grado di capire se ogni utente della casa è all'interno o fuori e di conseguenza attivare o disattivare l'allarme in modo automatico.
                            Questo permette una gestione della sicurezza domestica estremamente comoda e senza pensieri.
                            <br /><br />
                            Ma non mi voglio dilungare eccessivamente su questo progetto in quanto, per i più interessati, è disponibile la documentazione della mia tesi di laurea sulla <a href="https://amslaurea.unibo.it/id/eprint/33412/" target="_blank" rel="noopener noreferrer">pagina dedicata dell'UniBo</a>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeguardPage;

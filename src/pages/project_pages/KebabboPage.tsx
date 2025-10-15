import AbovethefoldSingleProject from "../../components/AbovethefoldSingleProject";
import SEO from "../../components/blog/SEO";
import ImageCarousel from "../../components/ImageCarousel";
import TechStack from "../../components/TechStack";


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
                    <div className="w-full flex items-center justify-center rounded-lg project-text">
                        <p className="text-justify">
                            Questa piattaforma nasce con un obiettivo semplice: aiutarti a scoprire, recensire e celebrare i kebab (e non solo!) più buoni di Bologna. Dimentica le ricerche infinite e le passeggiate a vuoto: abbiamo provato e valutato decine di locali per offrirti una classifica definitiva. Preparati a un viaggio pieno di gusto!
                            <br /><br />
                            Kebabbo è un progetto nato dalla passione, a metà tra un social network e un blog culinario. Dietro ci siamo noi, un gruppo di “esperti di kebab” bolognesi che hanno deciso di trasformare le loro scorribande gastronomiche in un’esperienza condivisa.
                            La missione? Aiutarti a trovare il kebab perfetto, raccontando tutto: dal pane croccante al taglio della carne, fino alle battute (a volte memorabili) del kebabbaro dietro al bancone.
                            <br /><br />
                            Abbiamo pensato a tante funzionalità per rendere la tua esperienza ancora più completa:
                            <br /><br />

                            <b>📊 Recensioni e classifiche</b>
                            <br /><br />
                            <ul className="list-disc pl-6">
                                <li>Recensioni dettagliate: ogni locale viene analizzato con cura e posizionato in una classifica aggiornata.
                                </li>
                                <li>Metriche di valutazione: ingredienti e sapori (🥇 qualità), porzioni (📏 quantità), prezzo (💰), varietà del menù (📜) e, perché no, la simpatia del kebabbaro.
                                </li>
                                <li>Filtri e ricerche: trova facilmente ciò che cerchi grazie a una lista chiara, filtri personalizzati e ricerca intelligente.
                                </li>
                                <li>Analisi degli ingredienti: pane, carne, salse... scopri cosa rende unico ogni kebab. 🧪
                                </li>
                            </ul>
                            <br /><br />

                            <b>🌍 Oltre al kebab</b>
                            <br /><br />
                            Il nostro viaggio non si ferma al döner:
                            <ul className="list-disc pl-6">
                                <li>Panini di Bologna: esploriamo il mondo dei sandwich cittadini. 🥖
                                </li>
                                <li>Kebab nel mondo: raccontiamo le nostre esperienze culinarie anche all’estero. ✈️🌍
                                </li>
                            </ul>
                            <br /><br />

                            <b>🤝 Funzioni social e community</b>
                            <br /><br />
                            KEBABBO non è solo una raccolta di recensioni, ma una vera community per chi ama il buon cibo:
                            <ul className="list-disc pl-6">
                                <li>Registrazione semplice (email, Google o social).</li>
                                <li>Profili personalizzati con foto e kebab preferiti.</li>
                                <li>Post, tag, like e commenti per condividere esperienze e scoprire tendenze.</li>
                                <li>Mappe interattive con pin generici e pin kebab dedicati.</li>
                                <li>Recensioni degli utenti accanto a quelle degli esperti.</li>
                                <li>Achievement e badge per premiare chi contribuisce di più.</li>
                                <li>Giochi e interazioni: dal “Build Your Kebab” 🎮 alle card digitali a tempo 🃏.</li>
                            </ul>
                            <br /><br />
                            <b>🗺️ Strumenti utili</b>
                            <br /><br />
                            <ul className="list-disc pl-6">
                                <li>Mappa interattiva: visualizza subito dove si trovano i locali recensiti.</li>
                                <li>Lista salvati: tieni da parte i tuoi kebab preferiti o quelli che vuoi provare.</li>
                            </ul>
                            <br /><br />
                            <b>⚠️ Stato del progetto</b>
                            KEBABBO è in continua evoluzione ed è già online all’indirizzo <a href="https://kebabbo.top" target="_blank" rel="noopener noreferrer">kebabbo.top</a>. 🚧
                            Nuove funzioni e aggiornamenti arriveranno presto: il nostro viaggio verso il kebab perfetto è appena iniziato!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default KebabboPage;

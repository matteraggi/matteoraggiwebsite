Ho rimandato fino ad oggi ma è purtroppo arrivato il momento.
Il momento di provare a fare una Tilemap.

Ho rimandato perché i miei dubbi sono sempre stati tanti, e lo sono ancora ora:

- Tilemap o disegno libero?
- Tilemap come?
- Quanti strati di Tilemap? E quali cose in quali strati?

In questo Devlog provo a risolvere alcuni di questi problemi.

Per il momento ho deciso di usare una tilemap, sicuramente più semplice da fare bene rispetto al disegno libero, non essendo un artista. Inoltre non voglio complicarmi troppo la vita. Ho già standard alti per quanto riguarda le altre aree di questo gioco.

Ho iniziato quindi a realizzare una possibile Tilemap. Quello che volevo ottenere era soprattutto uno schema che non trasmettesse della regolarità. Il gioco deve sembrare naturale, anche se creato usando la ripetizione di blocchi.

Il primo tentativo però non è stato di successo. Non sapevo cosa stavo facendo.
Ho creato dei blocchi anche esteticamente belli, ma troppo dettagliati, il che era un problema per due motivi:

- sono i dettagli che mostrano quanto una tilemap è ripetitiva
- una tilemap di "sfondo" non può essere dettagliata

![tentativo 1](/foto_giocoinsetti/devlog8-tentativo1.png)

Poi ho guardato qualche esempio dal quale prendere ispirazione. E mi sono reso conto che il layer di base, quindi o terra o erba solitamente, nella maggior parte dei casi è molto semplice. Anche solo un colore. Poi la mappa di gioco viene dettagliata attraverso elementi successivi che siano i sentieri, le abitazioni oppure elementi decorativi.

![esempio 1](/foto_giocoinsetti/example1.jpg)

![esempio 2](/foto_giocoinsetti/example2.webp)

![esempio 3](/foto_giocoinsetti/example3.png)

Ho deciso quindi di organizzare i layer di elementi in questo modo:

- tilemap di base (terra, erba, ecc..)
- tilemap alternative a quelle base (macro patch, crepe, macchie)
- tilemap decorazioni (erbacce, rocce, radici)
- tilemap sentieri, strade
- tilemap muri, bordi, limitazioni mappa
- layer per elementi di dimensione maggiore (case, alberi, strutture)
- layer ombre

Ho creato quindi un nuovo layer di base, che è venuto così:

![tentativo finale](/foto_giocoinsetti/devlog8-tilemapfinale.png)

Ho pensato di poterlo fare anche di un solo colore, quindi proprio senza dettagli, ma per il momento lascerò questa versione.

Dopodiché ho creato dei dettagli, disegnandoli a mano libera su un file di prova e spostandoli successivamente in un tile 16x16 di una tilemap di decorazioni.
Crearli prima a mano in un file dove ho importato tutti gli asset usati nel gioco mi è molto utile per capire come sarebbe il risultato finale.
Ho messo lo sfondo con la tilemap di base, gli asset dei personaggi, e poi ho disegnato le decorazioni sopra.

Questo passaggio è stato necessario perché mi ha mostrato che la tilemap di base non era terribile, ma era normale che risultasse brutta senza alcun dettaglio aggiuntivo.

Le decorazioni che ho creato sono piante e pietre.

![decorazioni](/foto_giocoinsetti/devlog8-decorazioni.png)

Prima di farti vedere il risultato finale voglio parlare di un ragionamento che ho fatto poco dopo la creazione della Tilemap, riguardo lo stile del gioco.
In molti casi si possono aggirare le limitazioni tecniche nella creazione della pixel art, usando uno stile semplice ma particolare. E in linea con lo stile del gioco.

Io, non avendo mai fatto pixel art, dovrei adottare una soluzione simile, invece di creare semplicemente degli asset che non potranno essere allo stesso livello di altri giochi presenti sul mercato.

Per il momento il gioco non ha delle caratteristiche di stile particolare, oltre ad essere di risoluzione abbastanza bassa, e di conseguenza con pixel grandi e punto di vista dell'utente abbastanza vicino al personaggio.

Ma l'identità che si deve raggiungere se si utilizza uno stile molto semplice è come quella di Undertale. Si capisce subito se uno screenshot appartiene a quel gioco. Il design è particolare e unico.

Detto questo, per ora non ho idee precise di come potrei fare a raggiungere questo obiettivo, e il risultato attuale è il seguente:

![risultato finale](/foto_giocoinsetti/devlog8-risultatofinale.png)
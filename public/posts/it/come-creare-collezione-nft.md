Creare una collezione da **10000 NFT** è il metodo più **veloce** per entrare in questo mercato, è molto **divertente** e **semplice** da fare, basta seguire alcuni semplici passi.

Gran parte del processo verrà fatto in **automatico** e in men che non si dica avrai la tua **collezione** pronta ad essere caricata su [**Opensea**](https://www.matteoraggiblog.com/opensea-come-funziona/).

Per farlo dovrai usare però degli strumenti particolari che potresti non conoscere.

## Cosa sono gli NFT

Gli **NFT** sono dei **Non Fungible Token**, cioè dei **Token non scambiabili**.

Vengono chiamati Token perché sono degli elementi della **Blockchain**.
Possono essere qualsiasi cosa, perché la **tecnologia NFT** può essere applicata praticamente ovunque.

Nel nostro caso saranno delle immagini.

Delle normalissime immagini jpg o png per esempio, che però una volta caricate sulla **Blockchain** prendono un'**identità digitale** diventando **Token unici e tracciati**.

## Procedimento in breve

1. Scegliere il soggetto
2. Disegnare soggetto e accessori
3. Scaricare HashLips e Node.js
4. Scaricare Visual Studio Code
5. Modificare il codice HashLips attraverso Visual Studio Code
6. Mettere i disegni nella cartella del codice
7. Generare gli NFT
8. Extra: creare un sito web
9. Extra: creare pagine social
10. Extra: creare una community

## Scegliere il soggetto della tua collezione NFT

La scelta del **soggetto** è fondamentale nella costruzione della tua **collezione**: esso deve essere semplice e d'impatto.

Prima di pensare a come creare la **collezione da 1000 NFT** è fondamentale avere una buona idea su come deve essere graficamente il risultato che vorrai ottenere.

Ovviamente è la cosa più importante, essendo **arte digitale**.

Il **mercato** non deve essere già saturo, come per esempio con le scimmie.

Deve essere ancora poco sfruttato ma comunque **attraente:** è più facile con soggetti che sono stati "**memati**" più volte, come i cani: [**Doge**](https://dogecoin.com) e **Shiba Inu**. Allo stesso tempo è molto improbabile in questi casi essere tra i primi.

Deve essere molto semplice da **rappresentare** e da capire per chi lo vede la prima volta.

Esempio: collezione [Cryptopunks.](https://opensea.io/collection/cryptopunks)

Oltre ad essere un soggetto molto semplice e di impatto deve anche avere uno **stile** molto facile da riconoscere.

La collezione **Cryptopunks** si riconosce subito: pixel e volti rettangolari in primo piano.

## Crea gli accessori per la tua collezione NFT

Se vuoi creare una collezione da **10000 NFT** o anche più, avrai bisogno di tanti soggetti principali ma anche di tanti accessori per essi.

Se stai per esempio rappresentando una rana, avrai bisogno di una serie di cappelli da mettergli, di vari tipi di scarpe, di qualcosa che terrà in mano e tanto altro.

Ogni accessorio deve essere **unico**, perché grazie ad una combinazione di essi creeremo tanti **NFT** **diversi** uno dall'altro.

Più accessori creerai e più **soggetti** unici avrai per la tua **collezione**.

Dovranno essercene alcuni più particolari e **rari** di altri, che quindi potranno essere più attraenti e **costosi**.

Queste produzioni potrai farle di diversi tipi: **disegnate**, a **pixel** o creazioni con **photoshop**.

Ti servirà un **programma** specifico per realizzarle. In base a che tecnica utilizzerai ti serviranno diversi programmi come:

* [**Adobe Sketch**](https://www.adobe.com/products/sketch.html) per il disegno a mano libera digitale (su Tablet)
* Qualsiasi **pixel editor** tipo [**Lospec**](https://lospec.com/pixel-editor/) per uno stile tipo **Cryptopunks**
* [**Canva**](https://www.canva.com) o [**Photoshop**](https://www.adobe.com/it/products/photoshop.html) se vuoi usare l'ultima tecnica.

## Come creare una collezione di 10000 NFT

Una volta che avrai creato: una base per i tuoi **NFT** (quindi il soggetto spoglio) e una serie di altri **accessori**, potrai procedere all'unione.

Ricordati che la **grandezza** delle **immagini** deve essere sempre uguale ed è molto importante la posizione del disegno rispetto alla grandezza totale dell'immagine.

In pratica le due immagini (di stessa grandezza) devono essere **sovrapponibili**.

Se crei un cappellino deve essere nella giusta posizione, in modo tale che quando **combinerai** le immagini esso si troverà sulla testa del personaggio.

E tutto il resto dell'**immagine** deve essere vuoto (non bianco).

Questo perché il **codice** semplicemente crea **combinazioni di immagini**, sovrapponendole tra di loro.

Non è ovviamente in grado di capire che quello che hai disegnato è un cappello.

Per **unire** i diversi soggetti creati con tutti gli elementi è necessario utilizzare un **codice** **randomico** che inserendo le tue produzioni genererà dei prodotti completi in modo totalmente automatico.

Il codice lo trovate [**qui**](https://github.com/HashLips/hashlips_art_engine), si chiama **HashLips**.

Esso può essere **modificato** con passare il tempo, in caso non me ne accorga puoi contattarmi che provvedo ad **aggiornare** l'articolo.

Per riuscire ad agire sul codice dovrai installare sul tuo computer **Node.js**, che puoi scaricare a [questo link](https://nodejs.org/it/download/).

Per installare **Node.js** avvia "Node.js command prompt" e incolla sulla **linea di comando** cd + il percorso contenente Index.js.

Il percorso lo trovi in altro su **esplora file** quando sei dentro la cartella in questione.

Premi invio e poi digita `npm install`.

Invece per aprire il **codice** e poterlo modificare devi scaricare un **programma**, io ti consiglio [**Visual Studio Code.**](https://code.visualstudio.com/download)

Adesso passo per passo ti spiego cosa devi **modificare** del codice per utilizzarlo con le tue creazioni.

Come prima cosa, apri su **Visual Studio Code** la cartella scaricata, cliccando "apri cartella".

### Foto su Layers

Per mettere le foto delle tue **creazioni** sul programma devi accedere alla cartella che hai scaricato.

Ogni sezione dentro la cartella layers rappresenta un tipo di **accessorio** o **particolarità** che hai deciso di mettere.

Per caricare le tue produzioni non devi accedere attraverso il programma ma **esternamente**, nella cartella "layers".

Per ogni sezione, carica tutte le foto di quel tipo, **rinominandole** scrivendo alla fine del nome: **#n**

Dove n è un numero da 0 a 100 che indica la **rarità** dell'accessorio. Più il numero è alto più sarà comune.

### Address + nome e descrizione del progetto NFT

Come prima cosa devi aprire il file chiamato "**config.js**". Nelle parti evidenziate in blu devi aggiungere in ordine: il nome del tuo progetto, la descrizione del tuo progetto e l'indirizzo del tuo profilo su [Opensea](https://www.matteoraggiblog.com/opensea-come-funziona/).

Le parti evidenziate in blu sono:

* `const namePrefix` per il nome
* `const description` per la descrizione
* `address` per l'indirizzo

### Quantità di NFT e nomi layers

Sempre nel file "config.js", scorrendo in basso, troverai la schermata rappresentata in foto. Nella prima parte evidenziata in blu dovrai inserire la **quantità di combinazioni**, quindi di NFT unici, che vuoi creare. Se ne vuoi creare **10000**, scrivi 10000.

Sotto invece ci sono gli slot che corrispondono ai **singoli componenti** della tua collezione, che verranno poi **combinati**. Potrai aggiungerne alcuni o toglierne altri, ma soprattutto dovrai rinominare quelli che utilizzerai, con lo stesso nome delle sezioni layers.

Le parti evidenziate sono:

* `growEditionSizeTo` per la quantità di NFT che vuoi creare
* `name` per ogni layer

### NFT finiti

Dopo tutte queste modifiche puoi **eseguire** il programma (esegui>avvia debug).

Una volta che il **programma** avrà terminato la sua esecuzione (che richiederà un po' di tempo a causa di tutte le combinazioni di immagini che creerà) potrai trovare tutti i **10000** **NFT** nella cartella, esterna a Visual Studio Code, del codice che hai scaricato prima (sottocartella **build**).

## Collezione NFT creata! E adesso?

Una volta che la collezione è stata **creata**, avrai tutti i tuoi NFT, ma per venderli serve ben altro che caricarli su Opensea e aspettare.

Di cosa hai bisogno per far **conoscere** la tua **collezione di 10000 NFT?**

### Crea un sito Web

Se la tua intenzione è quella di creare un **progetto** **serio** con sostanziali possibilità di guadagno, allora dovrai creare anche un **sito Web** per renderlo maggiormente affidabile agli occhi delle altre persone.

Serve soprattutto a far capire la **serietà** del progetto.

Se non sai creare un sito Web e non sai lavorare con **WordPress** puoi anche contattare qualcuno che lo faccia per te su [**Fiverr**](https://it.fiverr.com/) o simili.

Basta aprire **Opensea** e guardare i progetti più venduti per capire che hanno tutti un sito dedicato.

Una volta creato il sito, potrai considerarti già **migliore** della maggior parte dei competitor.

Se vuoi provarlo a costruire da solo ti consiglio di visitare il canale YouTube "[**Assistenza WP**](https://www.youtube.com/channel/UC4NOK20gwA_CyywTn-wHUJg)"

Altrimenti puoi cercare qualche corso poco costoso su [**Udemy**](https://www.udemy.com/).

Ricordati che sono comunque **skill** utili anche oltre questo progetto, che potranno rivelarsi utili in futuro (web design, programmazione web, utilizzo WordPress,...)

### Crea la pagina instagram e il profilo Twitter

Non mi dilungo particolarmente su questo punto, ma sappi che un profilo su queste piattaforme è obbligatorio.

**Instagram** ti può portare visite gratuite al vostro sito e al vostro progetto.

Mentre **Twitter** ti aiuterà sicuramente nella costruzione della tua community, infatti è molto utlizzato per collezioni NFT.

### Crea una community

La creazione di una **community** nel lungo periodo è la cosa più utile tra tutte ed è quella che porterà il tuo progetto a **fama** e **pubblicità** gratuita.

Le piattaforme che ti aiutano maggiormente a crearla sono **Twitter, Telegram e Discord**.

Ti sarà utile studiare qualche operazione di **marketing** per cercare di far conoscere il progetto e anche di connetterti maggiormente alle persone.

Se vuoi sapere come NFT e Metaverso sono collegati, visita il mio articolo a [questo link](https://www.matteoraggiblog.com/nft-metaverso/).

## Conclusione

Su **Opensea** ci sono migliaia di collezioni fatte come la tua, attraverso le combinazioni di più elementi, quindi sarà difficile spiccare tra tutti.

Proprio per questo bisogna far attenzione ai dettagli e concentrarsi anche nel farsi conoscere prima al di fuori dalla **piattaforma**, è l'unico modo per vendere.

Non sperare di vendere **10000** **NFT** solamente perché vengono visti sulla piattaforma, serve ben altro.

Un ottimo modo per farsi pubblicità è attraverso dei **giveaway** o regalandone alcuni ad **influencer** in cambio di una storia.

Ricordati di caricare i tuoi **NFT** sulla piattaforma con molta attenzione, usando anche gli aggettivi in modo da avere una classificazione per ognuno di essi e quindi anche una **rarità** differente per ogni esemplare.

Anche il **sito web** riveste un ruolo **importante**, quindi se non riesci a farlo al meglio da solo, l'opzione giusta potrebbe essere contattare un **esperto**.

Non hai capito qualche termine crypto che ho usato in questo articolo? Leggi il mio articolo: [Terminologia Crypto](https://www.matteoraggiblog.com/terminologia-crypto/)

Se invece vuoi ottenere [NFT gratis](https://www.matteoraggiblog.com/nft-gratis/), leggi il mio articolo a riguardo.
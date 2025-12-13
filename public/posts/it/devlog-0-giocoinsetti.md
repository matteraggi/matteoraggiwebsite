Questo è il primo Devlog della realizzazione del mio nuovo progetto: un gioco pixel-art top-down ambientato in un mondo fantasy popolato da insetti.

Per prima cosa ho dovuto sviluppare un'idea di base di come potrebbe essere il gioco, più che altro per identificare le tecnologie da usare e da dove partire.

Dopo alcuni giorni sono arrivato alla conclusione. Dal punto di vista grafico le varie opzioni erano le seguenti:

- Grafica 3d
- 2d disegnato (stile Hollow Knight)
- 2d pixel art top-down (stile Undertale o Pokemon prima gen)

La scelta per ovvi motivi di competenze grafiche è ricaduta sull'ultima opzione. Anche per quanto riguarda le pixel art non ho alcuna esperienza, ma credo che la curva di apprendimento sia più adeguata.

La scelta di una struttura top-down invece che un classico platformer a scorrimento orizzontale è dovuta a ciò che voglio ottenere per quanto riguarda la storia e l'immersione del giocatore nel mondo.

Il gioco non sarà a livelli e non sarà neanche un rogue-like, volevo creare un GDR (Gioco di Ruolo) con una storia ben curata e la possibilità di compiere determinate scelte. Quindi si, tipo Undertale.

Il tech stack che ho deciso di utilizzare è:

- Engine: Godot (molto utilizzato soprattutto per giochi 2d)
- Pixel art editor: Aseprite
- Tilemap: Tiled (forse)

Poi mi sono fatto generare delle immagini da ChatGpt per capire come potrebbe venire un gioco di questo tipo. Ha generato delle foto con un effetto granulare probabilmente non voluto e un pò strano, ma sono molto belle, anche se quasi impossibili da replicare con pixel art.

Sono venute anche troppo bene, perché sicuramente anche se provassi a replicare un ambiente di quel tipo non ci riuscirei. Ma ci proverò.

Ecco alcune delle foto che ha generato:

![foto 1](/foto_giocoinsetti/image5.png)

![foto 2](/foto_giocoinsetti/image6.png)

![foto 3](/foto_giocoinsetti/image7.png)

Come puoi notare, alcuni dettagli importanti, come la stradina, non sono realizzabili in pixel. Se li realizzassi allo stesso modo ma con pixel art, si vedrebbe molto di più lo stacco dei pixel.

Ma il problema maggiore è un altro. Se scelgo di realizzare il sistema di pixel art del background nel modo tradizionale, con tilemap, allora sarà impossibile generare ambienti con così tanta casualità e naturalezza come quelli mostrati sopra.

**Come funziona la tilemap**

Di solito una mappa pixel art, soprattutto se abbastanza estesa, non viene realizzata tutta a mano libera, ma vengono creati dei piccoli componenti. Prima si deve scegliere la grandezza in pixel di un singolo componente, solitamente tra 16x16 oppure 32x32, poi si può passare alla realizzazione di ognuno di essi. Devono ovviamente essere dei componenti che si attaccano tra di loro e che insieme possono formare tutte le strutture dello sfondo di gioco.

I componenti insieme possono essere utilizzati per creare infinite Tilemap.

Pro di questa soluzione:

- moooolto meno dispendiosa di creare tutto a mano libera
- più semplice modificare la mappa
- più semplice gestire le collisioni
- non si deve decidere a priori la grandezza totale della mappa

Contro di questa soluzione:

- ambientazione più semplice e meno immersiva
- ripetizione evidente di elementi
- simmetrie nella mappa, che la rende meno realistica
- difficoltà di creare un design che non sia squadrato

Oltre a questo devo anche capire come decidere cosa sta nello sfondo e cosa no. Di solito si utilizza un sistema a layer, con sfondo - elementi decorativi - npc...

Al prossimo Devlog :)
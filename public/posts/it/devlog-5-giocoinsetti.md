Nella puntata di oggi ci sono stati importanti cambiamenti per quanto riguarda il dialogo con gli NPC. Infatti, nella puntata 3, avevo implementato un prompt di talk per gli NPC. In pratica un box che compare quando si è vicini ad un NPC e si può interagire.

Questa parte è rimasta. Poi avevo implementato le linee di dialogo con l'NPC, mostrate dopo aver cliccato invio in una posizione ravvicinata con l'NPC. Questa parte ho deciso di rifarla, lasciando solamente il design del box, che è comunque provvisorio.

La decisione di rifare questa parte è stata presa perché ho scoperto che esistevano dei plugin che mi potevano semplificare di molto la vita. La funzione di dialogo che avevo implementato era ancora molto acerba. Mancavano per esempio le seguenti funzioni:

- Nome del personaggio parlante
- Scorrimento del testo graduale
- Possibilità di prendere delle scelte
- Capacità di riflettere quelle scelte nel gameplay (quindi salvare i dati in locale)
- e tante altre minori...

**Dialogue Manager**

Sono venuto a conoscenza di questo plugin, perfetto per le mie esigenze. Un plugin molto libero, molto customizzabile. Ho deciso quindi di usarlo per la gestione del dialogo.

Ho scaricato il plugin, preso il dialog di prova, e poi l'ho modificato piano piano a mio piacimento. Erano già presenti molte feature come per esempio la possibilità di far fare delle scelte al giocatore. Ecco cosa ho fatto per adattare il plugin al mio progetto:

1. Ho modificato la texture del box preimpostato e ho messo lo stesso che usavo in precedenza
2. Ho spostato la sezione riguardante alle risposte degli utenti sotto il box di testo e l'ho modificata
3. Ho usato la funzione di editing dei dialoghi per creare le prime frasi di un mio NPC

Non ho dovuto cambiare il codice associato al balloon di dialogo di esempio, ma solamente degli elementi della scena e impostazioni di inspector.

**Modifica 1**

Sostituendo il nodo standard con il ninepatchrect che avevo creato, ho applicato la texture che già avevo settato in precedenza, con le funzionalità del dialogue manager.
Poi mi è bastato aggiustare tutte le dimensioni quali: font del testo, margini del testo, altezza del box, larghezza del box.

**Modifica 2**

All'inizio le risposte venivano mostrare nella parte in alto a destra del box di dialogo, in piccolo. Questa opzione non mi piaceva perché nel mio gioco le risposte hanno un ruolo fondamentale e mi sembrava più intuitivo mostrarle al di sotto della domanda, quindi in fondo allo schermo.

Con questo metodo ovviamente, non sovrapponendo nulla e mostrandole anche con dimensione maggiore, si occupa gran parte dello schermo, ma per ora è un difetto che ho deciso di accettare. In futuro potrei pensare a migliorare questa soluzione.

Per spostarlo in basso ho aggiunto un VBoxContainer, che ordina gli elementi in verticale e ho impostato del margine tra i due elementi presenti all'interno: box dialogo e box delle domande.

Ho dovuto fare altre due modifiche.

La prima è di design: ho creato un design che fosse in armonia con tutti gli elementi già presenti. Praticamente uguale al box di dialogo ma più piccolo e con la versione per l'elemento non selezionato. Così che si potesse capire meglio il box selezionato e quelli non.

![box scelte utente](/foto_giocoinsetti/devlog5-foto1.png)

L'ultima modifica è stata necessaria in quanto nel mio gioco ci potranno essere scelte doppie e quadruple. Ho impostato i box con un ordinamento 2x2, quindi con 2 righe e due colonne, in modo da mostrare le opzioni come vengono mostrate solitamente se al di fuori del box di dialogo.

Intendo così:

![layout giusto](/foto_giocoinsetti/devlog5-foto4.png)

E non così:

![layout sbagliato](/foto_giocoinsetti/devlog5-foto3.png)

E poi ho impostato l'espansione delle righe verso il basso. Mi spiego meglio. Quando hai un box dinamico di questo tipo, imposti una posizione. Questa è la posizione della prima riga.

Poi le righe seguenti possono essere messe in alto o in basso. Nel mio caso ovviamente doveva espandersi in basso.

Ecco il risultato finale:

![dialogo e scelte utente](/foto_giocoinsetti/devlog5-foto2.png)

**Modifica 3**

Ho scritto delle linee di dialogo di prova per testare la sintassi del plugin e mi sono trovato molto bene. In modo molto semplice possono essere create delle scelte per il giocatore. Nei prossimi giorni proverò ad integrare i salvataggi in locale in modo da testare le scelte del giocatore anche in più salvataggi.

Al prossimo devlog :)
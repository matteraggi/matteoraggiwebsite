Puntata 3 dei Devlog.

Dopo aver creato gli NPC mi è venuta voglia di implementare i dialoghi con essi, anche se probabilmente c'erano feature più importanti da implementare prima. Ho deciso quindi di creare questa struttura in due parti:

- un prompt di dialogo con scritto “talk” che compare quando ti avvicini ad un NPC per indicare che puoi interagire con esso
- dei box di dialogo con le frasi del NPC

Prima di vedere nel dettaglio queste fasi, ti mostro una modifica che ho fatto alle impostazioni del progetto.
Sono andato in **Project Settings -> General -> Display -> Window -> Stretch -> Mode** e ho modificato il valore da `disabled` a `canvas_item` che a quanto pare è lo standard per la pixel art 2d.

**Cosa cambia?**

La modalità `disabled` non cambia la tua scena.
La finestra/lo schermo mostra la scena 1:1 ai pixel fisici. Quindi se entri in full-screen la tua scena viene “appiccicata” nell’angolo in alto-sinistra; il resto resta nero (o viene stretchato dal driver della GPU con blur).

Mentre con `canvas_item` tutti i nodi 2d come Tilemap e Sprite vengono prima disegnati alla risoluzione logica (scelta sempre nei setting del progetto) e poi l'intero viene scalato per riempire la finestra seguendo la regola di Aspect decisa (nel mio caso keep, quindi mantenendo il rapporto).

**Prompt di dialogo**

![prompt di dialogo](/foto_giocoinsetti/talk-box-v1.png)

Questa parte è stata creata semplicemente con un CanvasLayer e una TextureRect. Dopo ho aggiunto il png del prompt con su scritto direttamente in pixel art (tanto non deve cambiare) "talk" e il simbolo del tasto invio.
Da subito si è mostrata correttamente, con la giusta densità di pixel.

Poi ho settato la visibilità standard a False e l'ho gestita con il codice. Quando il player entra nella zona del NPC si setta a True e quindi è visibile, quando esce torna False.

**Box di dialogo**

![box di dialogo](/foto_giocoinsetti/dialog-box-screen.png)

Dopo aver cliccato enter inizia l'interazione con l'NPC. Noi iniziamo a visualizzare le sue linee di testo e ovviamente non possiamo muoverci in quel momento. Possiamo solo scorrere nel testo.

In questo caso la grafica è stata fatta in modo diverso. Se prima andava bene mostrare il testo "talk" in modo statico con la pixel art, ora no. Perché ogni NPC ha linee di dialogo diverse, e non si possono disegnare tutte.

Quindi ho creato un box esteticamente uguale a quello precedente ma vuoto all'interno. Poi l'ho inserito in un nodo **NinePatchRect**.

Questo nodo serve ad allargare il box quanto serve (in base alla lunghezza delle stringhe di testo che vogliamo mostrare) senza stretchare i bordi.

Vanno quindi impostati i margini dei bordi, chiamati patch margin, in modo tale che essi rimangano ai lati senza cambiamenti di dimensioni. Viene solo allargato il centro che quindi deve essere uniforme.

All'interno di questo box è stato poi messo un box di testo (**RichTextLabel**) che scrive le linee degli NPC dentro il nodo NinePatchRect.

**Aggiornamenti futuri**

In fasi di sviluppo più avanzate si potrebbe creare in pixel art un font personalizzato, con stile uguale a quello usato per disegnare "talk" nel prompt, in modo da avere continuità tra esso e le linee di dialogo con gli NPC.

Al prossimo devlog :)
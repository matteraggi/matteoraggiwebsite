Dopo una lunga pausa estiva, eccomi tornato al lavoro sul progetto.

Anche se non avevo fatto una puntata del vlog a riguardo, avevo realizzato un primo prototipo di casa per il mondo delle formiche, il primo, quello che stiamo realizzando.

Non mi convince ancora molto ma per il momento rimarrà così. Ecco il risultato:

![casa senza luce](/foto_giocoinsetti/devlog9_foto1.png)

Dopo aver fatto ciò la lista di cose possibili da fare è molto lunga. Per esempio posso realizzare tante altre case, oppure fare gli interni della prima.

Invece ho deciso di sperimentare con le luci, prima di proseguire con altri assets. E devo dire che mi sono divertito molto, il risultato è meglio di quello che potevo immaginare.

Ho usato un builtin di Godot che si chiama PointLight2D, che poi va configurato correttamente, adesso ti spiego passo passo come ho fatto.

**Configurazione PointLight2D**

Per prima cosa va scelta la **texture**.
Essa può sia essere importata da un immagine, che configurata con quelle già presenti su Godot. Io mi sono trovato meglio con questa seconda opzione.

All'inizio non riuscivo a ottenere il risultato sperato perché ci sono molti parametri di configurazione, però una volta capito come funzionano è abbastanza modellabile. Il fatto che non hai bisogno di importare altre immagini se vuoi cambiare leggermente la texture, è comodo. Quindi vi consiglio di fare così.

Ecco i parametri per la texture se si vuole raggiungere una luce classica circolare, che si dissolve gradualmente.

1) Scegliere la texture builtin "GradientTexture2D"
2) Creare un nuovo gradient
3) Invertire luce e buio, quindi bianco e nero
Trascinate il selettore del bianco verso quello del nero e viceversa. Vi troverete in questo modo con il punto più luminoso al centro, dove ci sarà effettivamente la fonte di luce.
4) Spostate il selettore che adesso sarà sul nero un pò più verso al centro. Questo serve a far si che la luce non venga tagliata ai bordi, formando un rettangolo luminoso nella scena.
5) Ora avrete già ottenuto una buona luce, non vi resta che cambiare parametri secondari come: il colore della luce (io l'ho fatta più tendente al giallo perché volevo una luce calda) e la grandezza della texture

Ecco, avete configurato correttamente una fonte di luce in godot senza utilizzare asset esterni, e con la possibilità di modificarla facilmente in futuro.

Come ultima cosa, per rendere la luce più utile e migliorare l'atmosfera di gioco, ho ridotto la luminosità complessiva della scena.

Nella scena del mondo1 ho aggiunto un layer, chiamato CanvasModulate. Esso, se impostato con un gradiente di nero/grigio scuro, va a diminuire la luminosità della scena, applicando un layer sopra tutta la schermata di gioco.

Il risultato finale è il seguente:

![casa con luce](/foto_giocoinsetti/devlog9_foto2.png)

Il risultato mi è piaciuto molto, e quindi ho creato dei lampioni per poi applicare la luce anche su di essi.

Asset lampioni:

![lampioni senza luce](/foto_giocoinsetti/devlog9_foto3.png)

Lampioni con luce:

![lampioni con luce](/foto_giocoinsetti/devlog9_foto4.png)

L'atmosfera di gioco direi che è cambiata drasticamente, adesso è molto più cupa e simile a ciò che volevo creare per questo primo mondo.
Per oggi è tutto :)
Dopo aver creato nelle puntate precedenti la possibilità di far prendere delle scelte al giocatore durante il dialogo con gli NPC, è arrivato il momento di testare seriamente questa funzionalità.

Cosa fare:

1. Pensare alla struttura che dovrà avere il file di salvataggio
2. Decidere le modalità e creare lo script per gestire il salvataggio
3. Salvare le scelte fatte durante il dialogo
4. Caricare il file di salvataggio ogni volta che si apre il gioco

**Fase 1: La struttura del file di salvataggio**

Il file di salvataggio sarà un json, formato universale e molto comodo da modificare e leggere.

I dati da salvare saranno molti, perché ogni scelta dell'utente peserà nel corso della storia, quindi la struttura per questo tipo di dati deve essere abbastanza dinamica, non posso creare a priori tutte le variabili che mi serviranno.

La struttura, per ora, è questa:

```json
{
    "meta": {
        "version": 1,
        "datetime": ""
    },

    "player": {
        "scene_path": "",
        "position": [0, 0]
    },

    "story": {
        "flags":   {},         # bool
        "numbers": {}          # int
    }

    #settings futuri per quando implementerò le impostazioni di gioco
}
```

Quindi i dati più frequenti non sono presenti a priori nella struttura del codice ma verranno creati dentro flags se booleani o dentro numbers se interi.

I valori booleani serviranno probabilmente a salvare scelte irreversibili e molto importanti e a segnare se sono state fatte delle parti importanti della storia.

I valori interi invece saranno modificati spesso, perché potrebbero contenere sia valori di reputazione molto variabili che il numero di volte con cui si è parlato con un NPC in modo da cambiare le linee di dialogo dinamicamente.

**Fase 2: Lo script di salvataggio**

Durante il gioco ho deciso di non implementare l'autosalvataggio, ma di fare delle postazioni fisse che una volta raggiunte ti permettono di salvare il gioco.

Non so ancora se questa scelta rimarrà tale, ma per ora ho preso questa decisione dato che mi sembrava potesse immergere di più il giocatore nella storia.

Quindi quando un giocatore prende determinate scelte, vengono cambiati i valori solo in real time, senza salvarli in locale. Dopo, quando un giocatore sceglie di salvare tutti i suoi progressi, viene presa la struttura json con i dati aggiornati, e viene salvata in locale.

```gdscript
func save_game(slot:int) -> void:
    var data := _pack()       # snapshot dei dati in quell'istante
    var path := "user://save_slot_%d.json" % slot
    var f := FileAccess.open(path, FileAccess.WRITE)
    f.store_string(JSON.stringify(data, "\t"))
    f.close()
```

**Fase 3: Salvataggio delle scelte durante il dialogo**

Questa fase è stata estremamente semplice grazie all'utilizzo della sintassi del plugin Dialogue Manager.

In precedenza avevo creato uno script chiamato GameVars dove salvare le variabili di gioco che vengono utilizzate durante il gameplay, quindi quelle relative al dialogo: flags e numbers.

Le altre servono solo a spawnare il personaggio nel punto corretto. Forse in futuro creerò un'altra sezione più ordinata relativa sempre a dati di gioco che servono durante il gameplay ma con un'importanza maggiore.

Utilizzo quindi GameVars e le funzioni associate per controllare il valore di questi parametri ed eventualmente modificarlo.

Ecco lo script di Dialogue Manager:

```text
~ start
match GameVars.numbers.get("spokenToLark", 0)
    when 0
        Lark: Ciao amico, un'altra giornata di merda…
        - Va sempre peggio
            Lark: Già… sembra che la linfa non basti mai.
        - Dove hai preso la sigaretta?
            Lark: Ultimamente si trovano ovunque.
        do GameVars.add_number("spokenToLark", 1)
    when > 0
        Lark: Sono stanco di tutto questo.
        do GameVars.add_number("spokenToLark", 1)
=> END
```

In questo caso il personaggio, se non ci hai mai parlato, ti da la possibilità do rispondere in due modi differenti, ricevendo due risposte differenti. Se ci hai già parlato risponde subito con solo una frase.

**Fase 4: Caricare i dati quando il gioco si apre**

Il caricamento viene fatto nel file Main del gioco, quello che viene chiamato per primo.

Questo perché il caricamento dei dati di gioco deve essere precedente al caricamento della scena e della posizione del personaggio, che viene fatta nel Main.

Quando verrà implementato un Menu iniziale le cose ovviamente cambieranno, e la maggior parte dei dati verranno caricati quando l'utente sceglierà il dato di salvataggio preferito tra i vari slot.

Per il momento la struttura però è questa:

1. La funzione ready del main chiama la funzione di load, che cerca un file di salvataggio e lo restituisce. Se restituisce effettivamente dei dati, il main chiama la funzione per applicare questi dati al gioco. Altrimenti carica il livello primo nella posizione di partenza.
2. L'applicazione dei dati consiste nel sovrascrivere la variabili Gamestate e far spawnare il giocatore nella posizione di salvataggio precisa, caricando la scena corretta

E.... Fine!

I dati vengono salvati correttamente. Ho testato il tutto con l'NPC della formica, soprannominato Lark.

Il numero di conversazioni avvenute tra l'utente e Lark viene ricordato anche nelle successive aperture, aggiornando il dato di volta in volta.

Al prossimo Devlog :)
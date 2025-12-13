Oggi ho fatto **refactoring**.

**Prima fase**

Come prima cosa ho migliorato la struttura del gioco implementando dei chiari stati, chiamati **EntityState**.
Grazie agli stati di gioco ho spostato tutta la logica che precedentemente era nei singoli NPC e nel player, nel file di gestione degli stati.

Al momento ho creato i seguenti stati: IDLE, WALK, TALK, FROZEN.

```gdscript
enum EntityState { IDLE, WALK, TALK, FROZEN }
```

IDLE viene usato quando il personaggio è fermo, WALK quando cammina.
TALK quando sta parlando con un personaggio, in quel caso l'animazione IDLE continua ad andare.
Mentre l'animazione FROZEN verrà probabilmente usata in futuro quando l'utente andrà nelle impostazioni di gioco.

Ci sono poi due funzioni che sono fondamentali nella gestione degli stati con questo metodo.
La prima è la funzione **_enter_state** che serve ad eseguire determinate azioni appena lo stato cambia. Viene eseguita quando si entra in un nuovo stato di gioco, e serve per esempio ad impostare la velocità del player a 0 quando è entrato in un dialogo con un NPC.

```gdscript
func _enter_state(s: EntityState) -> void:
    match s:
        EntityState.IDLE: _play_idle()
        EntityState.WALK: pass
        EntityState.TALK:
            velocity = Vector2.ZERO
            _play_idle()
        EntityState.FROZEN:
            velocity = Vector2.ZERO
```

Un'altra funzione fondamentale serve invece per gli stati che richiedono un aggiornamento costante, per esempio WALK. In questo caso si usa la funzione di Godot chiamata **_physics_process**.

```gdscript
func _physics_process(_d):
    match state:
        EntityState.IDLE: _state_idle()
        EntityState.WALK: _state_walk()
        EntityState.TALK, EntityState.FROZEN: pass
```

Poi ci sono 3 funzioni che non vengono scritte in EntityState ma solo sovrascritte. Queste sono:

```gdscript
func _state_idle()
func _state_walk()
func _play_idle()
```

**Seconda fase**

Un'altra parte di codice che aveva bisogno di refactoring era quella relativa agli NPC.
Infatti nonostante ci fossero solamente 2 NPC di prova creati, già si notava una grande ripetizione nel loro codice.

Sono riuscito quindi ad unificare tutto in una classe unica chiamata DialogueNPC. Per il momento, dato che gli NPC hanno solamente sprite e dialoghi differenti, ma nessun cambiamento logico, le classi Ant e Snail sono solo semplici estensioni di essa.

Per questa puntata è tutto. Al prossimo devlog :)
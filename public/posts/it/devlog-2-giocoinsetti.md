Nella puntata precedente mi sono informato su quale modalità usare per il background e sulla prospettiva. Alla fine ho deciso di utilizzare la Tilemap e una prospettiva circa a 3/4.

Oggi ho deciso di concentrarmi sulle animazioni del personaggio e nella creazione di sprite semplice per qualche NPC, dato che ho le idee più chiare a riguardo.
Più avanti mi concentrerò sulla creazione della mappa del gioco, dato che voglio realizzarla una volta sola, senza poi cambiarla drasticamente.

**Animazioni player**

Per iniziare a comprendere come funzionassero le animazioni in godot ho deciso di creare movimenti molto brevi e semplici per il mio personaggio.

![animazioni player](/foto_giocoinsetti/sprite-player-v1.png)

Animazioni idle e di movimento molto semplici per testare il funzionamento e per implementare delle funzioni beta prima di creare un design definitivo.

Ho importato il png dello Sprite Frame e utilizzato questo codice per gestire il loro funzionamento:

```gdscript
extends CharacterBody2D

const SPEED = 100
@onready var sprite : AnimatedSprite2D = $AnimatedSprite2D

var can_move : bool = true
var facing   : Vector2 = Vector2.DOWN


func _ready():
    sprite.animation = "idle"
    sprite.play()
    Dialog.dialogue_started.connect(_on_dialogue_started)
    Dialog.dialogue_finished.connect(_on_dialogue_finished)


func _on_dialogue_started():  can_move = false
func _on_dialogue_finished(): can_move = true


func _physics_process(_delta):
    if not can_move:
        velocity = Vector2.ZERO
        return
    
    var input_vector = Vector2(
        Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left"),
        Input.get_action_strength("ui_down") - Input.get_action_strength("ui_up")
    ).normalized()
    
    velocity = input_vector * SPEED
    move_and_slide()
    
    if input_vector != Vector2.ZERO:
        _play_walk_anim(input_vector)
        facing = input_vector
    else:
        _play_idle_anim()

func _play_walk_anim(dir: Vector2) -> void:
    if abs(dir.x) > abs(dir.y):
        sprite.animation = "walk_right" if dir.x > 0 else "walk_left"
    else:
        sprite.animation = "walk_down"  if dir.y > 0 else "walk_up"
    sprite.play()

func _play_idle_anim() -> void:
    if abs(facing.x) > abs(facing.y):
        sprite.animation = "idle_right" if facing.x > 0 else "idle_left"
    else:
        sprite.animation = "idle_down"  if facing.y > 0 else "idle_up"
    sprite.play()
```

**Sprite NPC**

Per quanto riguarda la creazione degli sprite degli NPC, per il momento, essendo sprite di prova, ho preso spunto dalle immagini che aveva generato Chatgpt precedentemente.
Il risultato è stato questo:

![NPC formica](/foto_giocoinsetti/sprite-ant-v1.png)
![NPC lumaca](/foto_giocoinsetti/sprite-snail-v1.png)

Una lumaca e una formica.

Al prossimo devlog :)
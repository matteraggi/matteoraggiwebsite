In the previous episode, I looked into which mode to use for the background and perspective. In the end, I decided to use Tilemaps and a roughly 3/4 perspective.

Today I decided to focus on character animations and creating simple sprites for some NPCs, since I have clearer ideas about that.
Later I will focus on creating the game map, since I want to make it once and for all, without changing it drastically later.

**Player Animations**

To start understanding how animations work in Godot, I decided to create very short and simple movements for my character.

![player animations](/foto_giocoinsetti/sprite-player-v1.png)

Very simple idle and movement animations to test functionality and implement beta functions before creating a final design.

I imported the Sprite Frame PNG and used this code to manage their behavior:

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

**NPC Sprites**

Regarding the creation of NPC sprites, for the moment, being test sprites, I took inspiration from the images ChatGPT generated previously.
The result was this:

![Ant NPC](/foto_giocoinsetti/sprite-ant-v1.png)
![Snail NPC](/foto_giocoinsetti/sprite-snail-v1.png)

A snail and an ant.

See you in the next devlog :)
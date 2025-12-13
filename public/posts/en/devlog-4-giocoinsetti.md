Today I did some **refactoring**.

**Phase One**

First of all, I improved the game structure by implementing clear states, called **EntityState**.
Thanks to game states, I moved all the logic that was previously in the individual NPCs and the player into the state management file.

At the moment, I have created the following states: IDLE, WALK, TALK, FROZEN.

```gdscript
enum EntityState { IDLE, WALK, TALK, FROZEN }
```

IDLE is used when the character is standing still, WALK when walking.
TALK is used when speaking with a character; in that case, the IDLE animation continues to play.
While the FROZEN animation will probably be used in the future when the user goes into the game settings.

There are two functions that are fundamental in managing states with this method.
The first is the **_enter_state** function, which serves to execute specific actions as soon as the state changes. It is executed when entering a new game state, and it serves, for example, to set the player's velocity to 0 when entering a dialogue with an NPC.

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

Another fundamental function is used for states that require constant updating, for example, WALK. In this case, the Godot function called **_physics_process** is used.

```gdscript
func _physics_process(_d):
    match state:
        EntityState.IDLE: _state_idle()
        EntityState.WALK: _state_walk()
        EntityState.TALK, EntityState.FROZEN: pass
```

Then there are 3 functions that are not written in EntityState but only overridden. These are:

```gdscript
func _state_idle()
func _state_walk()
func _play_idle()
```

**Phase Two**

Another part of the code that needed refactoring was the one related to NPCs.
In fact, even though there were only 2 test NPCs created, a lot of repetition was already noticeable in their code.

So I managed to unify everything into a single class called DialogueNPC. For the moment, since the NPCs only have different sprites and dialogues, but no logical changes, the Ant and Snail classes are just simple extensions of it.

That's all for this episode. See you in the next devlog :)
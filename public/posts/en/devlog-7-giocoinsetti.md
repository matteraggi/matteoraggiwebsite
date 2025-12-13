After creating the ability for the player to make choices during dialogue with NPCs in the previous episodes, it's time to seriously test this functionality.

What to do:

1. Think about the structure the save file should have
2. Decide on the methods and create the script to handle saving
3. Save the choices made during dialogue
4. Load the save file every time the game opens

**Phase 1: The Save File Structure**

The save file will be a JSON, a universal format that is very convenient to modify and read.

There will be a lot of data to save because every user choice will weigh on the course of the story, so the structure for this type of data needs to be quite dynamic; I can't create all the variables I'll need beforehand.

The structure, for now, is this:

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

    #future settings for when I implement game settings
}
```

So the most frequent data are not present a priori in the code structure but will be created inside `flags` if boolean or inside `numbers` if integers.

Boolean values will probably serve to save irreversible and very important choices and to mark if important parts of the story have been completed.

Integer values, on the other hand, will be modified often, because they could contain both highly variable reputation values and the number of times you have spoken to an NPC in order to change dialogue lines dynamically.

**Phase 2: The Save Script**

During the game, I decided not to implement autosaving, but to have fixed stations that allow you to save the game once reached.

I don't know yet if this choice will remain, but for now, I made this decision as it seemed like it could immerse the player more in the story.

So when a player makes certain choices, values are changed only in real-time, without saving them locally. Later, when a player chooses to save all their progress, the JSON structure with the updated data is taken and saved locally.

```gdscript
func save_game(slot:int) -> void:
    var data := _pack()       # snapshot of data at that instant
    var path := "user://save_slot_%d.json" % slot
    var f := FileAccess.open(path, FileAccess.WRITE)
    f.store_string(JSON.stringify(data, "\t"))
    f.close()
```

**Phase 3: Saving Choices During Dialogue**

This phase was extremely simple thanks to the syntax of the Dialogue Manager plugin.

Previously, I had created a script called `GameVars` to save game variables used during gameplay, specifically those related to dialogue: `flags` and `numbers`.

The others are only needed to spawn the character in the correct spot. Perhaps in the future, I will create another more organized section related to game data needed during gameplay but with greater importance.

I then use `GameVars` and its associated functions to check the value of these parameters and modify them if necessary.

Here is the Dialogue Manager script:

```text
~ start
match GameVars.numbers.get("spokenToLark", 0)
    when 0
        Lark: Hey friend, another shitty day...
        - It's always getting worse
            Lark: Yeah... seems like there's never enough sap.
        - Where did you get the cigarette?
            Lark: Lately they can be found everywhere.
        do GameVars.add_number("spokenToLark", 1)
    when > 0
        Lark: I'm tired of all this.
        do GameVars.add_number("spokenToLark", 1)
=> END
```

In this case, if you haven't spoken to the character before, he gives you the option to respond in two different ways, receiving two different answers. If you have already spoken to him, he responds immediately with just one sentence.

**Phase 4: Loading Data When the Game Opens**

Loading is done in the Main file of the game, the one that is called first.

This is because game data loading must happen before loading the scene and the character's position, which is done in Main.

When an initial Menu is implemented, things will obviously change, and most data will be loaded when the user chooses their preferred save data from the various slots.

For now, however, the structure is this:

1. The `ready` function of the main calls the `load` function, which looks for a save file and returns it. If it actually returns data, the main calls the function to apply this data to the game. Otherwise, it loads the first level at the starting position.
2. Applying the data consists of overwriting the Gamestate variables and spawning the player at the precise save position, loading the correct scene.

And.... Done!

The data is saved correctly. I tested everything with the ant NPC, nicknamed Lark.

The number of conversations between the user and Lark is remembered even in subsequent openings, updating the data each time.

See you in the next Devlog :)
Short episode today. A lot of work because I'm not yet skilled at making animations, but little to tell.

I took the very simple ant design I created earlier and added an animation.
The ant now smokes a cigarette.

The animation is composed of 4 tags, meaning 4 different micro-animations:

- idle_bottom
- smoke_up
- idle_top
- smoke_down

This separation serves to vary the duration of the animation steps.
In fact, I was able to decide and adjust the duration of each phase directly in Godot. And if I wanted, I could also execute a single part of the animation at specific moments.

An example of use would be moving the cigarette from bottom to top in the middle of a dialogue with the NPC.

And here is the final result:

![ant animation gif](/foto_giocoinsetti/devlog6-gif.gif)

See you in the next devlog :)
Devlog Episode 3.

After creating the NPCs, I felt like implementing dialogues with them, even though there were probably more important features to implement first. So I decided to create this structure in two parts:

- a dialogue prompt reading "talk" that appears when you get close to an NPC to indicate that you can interact with them
- dialogue boxes with the NPC's sentences

Before looking at these phases in detail, I'll show you a change I made to the project settings.
I went to **Project Settings -> General -> Display -> Window -> Stretch -> Mode** and changed the value from `disabled` to `canvas_item`, which apparently is the standard for 2D pixel art.

**What changes?**

The `disabled` mode doesn't change your scene.
The window/screen shows the scene 1:1 to physical pixels. So if you go full-screen, your scene gets "stuck" in the top-left corner; the rest remains black (or gets stretched by the GPU driver with blur).

With `canvas_item`, on the other hand, all 2D nodes like Tilemap and Sprite are first drawn at the logical resolution (chosen in the project settings), and then the whole thing is scaled to fill the window following the decided Aspect rule (in my case 'keep', so maintaining the ratio).

**Dialogue Prompt**

![dialogue prompt](/foto_giocoinsetti/talk-box-v1.png)

This part was created simply with a CanvasLayer and a TextureRect. Then I added the PNG of the prompt with "talk" and the enter key symbol written directly in pixel art (since it doesn't need to change).
It showed up correctly right away, with the right pixel density.

Then I set the standard visibility to False and handled it with code. When the player enters the NPC zone, it sets to True and becomes visible; when they leave, it turns False.

**Dialogue Box**

![dialogue box](/foto_giocoinsetti/dialog-box-screen.png)

After clicking enter, interaction with the NPC begins. We start visualizing their lines of text, and obviously, we cannot move at that moment. We can only scroll through the text.

In this case, the graphics were done differently. While it was fine to show the "talk" text statically with pixel art before, now it's not. Because every NPC has different dialogue lines, and they can't all be drawn manually.

So I created a box aesthetically identical to the previous one but empty inside. Then I inserted it into a **NinePatchRect** node.

This node serves to widen the box as much as needed (based on the length of the text strings we want to show) without stretching the borders.

So the border margins, called patch margins, must be set so that they remain at the sides without changing dimensions. Only the center is widened, which therefore must be uniform.

Inside this box, a text box (**RichTextLabel**) was placed to write the NPC lines inside the NinePatchRect node.

**Future Updates**

In more advanced development stages, I could create a custom pixel art font, with a style identical to the one used to draw "talk" in the prompt, to have continuity between it and the NPC dialogue lines.

See you in the next devlog :)
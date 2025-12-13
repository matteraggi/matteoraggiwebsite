In today's episode, there have been important changes regarding NPC dialogue. In episode 3, I had implemented a talk prompt for NPCs—basically a box that appears when you are close to an NPC and can interact.

This part remained. Then, I had implemented the dialogue lines with the NPC, shown after clicking enter while close to the NPC. I decided to redo this part, keeping only the box design, which is still provisional.

The decision to redo this part was made because I discovered plugins that could simplify my life a lot. The dialogue function I had implemented was still very rudimentary. For example, the following functions were missing:

- Name of the speaking character
- Gradual text scrolling
- Ability to make choices
- Ability to reflect those choices in gameplay (saving data locally)
- and many other minor ones...

**Dialogue Manager**

I came across this plugin, perfect for my needs. It's a very free, very customizable plugin. So I decided to use it for dialogue management.

I downloaded the plugin, took the test dialogue, and then slowly modified it to my liking. Many features were already present, such as the ability to let the player make choices. Here is what I did to adapt the plugin to my project:

1. I modified the texture of the preset box and used the same one I was using previously
2. I moved the user response section below the text box and modified it
3. I used the dialogue editing function to create the first phrases for one of my NPCs

I didn't have to change the code associated with the example dialogue balloon, but only scene elements and inspector settings.

**Modification 1**

By replacing the standard node with the NinePatchRect I had created, I applied the texture I had already set previously, but with the Dialogue Manager functionalities.
Then I just had to adjust all dimensions such as: text font, text margins, box height, box width.

**Modification 2**

At first, answers were shown in the top right part of the dialogue box, very small. I didn't like this option because in my game answers play a fundamental role, and it seemed more intuitive to show them below the question, at the bottom of the screen.

With this method, obviously, by not overlapping anything and showing them with a larger size, a large part of the screen is occupied, but for now, it's a flaw I've decided to accept. In the future, I might think about improving this solution.

To move it down, I added a VBoxContainer, which orders elements vertically, and set some margin between the two elements inside: the dialogue box and the question box.

I had to make two other changes.

The first is design: I created a design that was in harmony with all the elements already present. Practically identical to the dialogue box but smaller and with a version for the unselected element. This way, the selected box and the unselected ones could be better distinguished.

![user choices box](/foto_giocoinsetti/devlog5-foto1.png)

The last change was necessary because in my game there will be double and quadruple choices. I set the boxes with a 2x2 layout, so with 2 rows and two columns, to show the options as they are usually shown if outside the dialogue box.

I mean like this:

![correct layout](/foto_giocoinsetti/devlog5-foto4.png)

And not like this:

![wrong layout](/foto_giocoinsetti/devlog5-foto3.png)

And then I set the row expansion downwards. Let me explain better. When you have a dynamic box of this type, you set a position. This is the position of the first row.

Then the following rows can be placed above or below. In my case, obviously, it had to expand downwards.

Here is the final result:

![dialogue and user choices](/foto_giocoinsetti/devlog5-foto2.png)

**Modification 3**

I wrote some test dialogue lines to test the plugin syntax, and I found it very comfortable. Choices for the player can be created very simply. In the coming days, I will try to integrate local saves to test player choices across multiple saves as well.

See you in the next devlog :)
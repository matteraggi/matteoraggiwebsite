I've been putting it off until today, but the moment has unfortunately arrived.
The moment to try and create a Tilemap.

I've been postponing it because my doubts have always been many, and still are:

- Tilemap or freehand drawing?
- How to implement the Tilemap?
- How many Tilemap layers? And which elements go on which layers?

In this Devlog, I will try to solve some of these problems.

For now, I've decided to use a tilemap, which is certainly simpler to do well than freehand drawing, as I am not an artist. Also, I don't want to overcomplicate things. I already have high standards for other areas of this game.

So, I started creating a possible Tilemap. What I wanted to achieve above all was a pattern that didn't feel too regular. The game should look natural, even if created using the repetition of blocks.

However, the first attempt was not successful. I didn't know what I was doing.
I created blocks that were aesthetically pleasing, but too detailed, which was a problem for two reasons:

- Details are what show how repetitive a tilemap is
- A "background" tilemap cannot be detailed

![Attempt 1](/foto_giocoinsetti/devlog8-tentativo1.png)

Then I looked at some examples for inspiration. And I realized that the base layer, usually dirt or grass, is very simple in most cases. Sometimes it's just a single color. Then the game map is detailed through subsequent elements, whether they are paths, houses, or decorative items.

![Example 1](/foto_giocoinsetti/example1.jpg)

![Example 2](/foto_giocoinsetti/example2.webp)

![Example 3](/foto_giocoinsetti/example3.png)

I therefore decided to organize the element layers as follows:

- Base tilemap (dirt, grass, etc.)
- Alternative base tilemaps (macro patches, cracks, stains)
- Decoration tilemap (weeds, rocks, roots)
- Paths, roads tilemap
- Walls, borders, map limits tilemap
- Layer for larger elements (houses, trees, structures)
- Shadow layer

So I created a new base layer, which turned out like this:

![Final Attempt](/foto_giocoinsetti/devlog8-tilemapfinale.png)

I thought about making it a single color, completely without details, but for now, I will leave this version.

Afterward, I created details, drawing them freehand on a test file and subsequently moving them to a 16x16 tile in a decoration tilemap.
Creating them by hand first in a file where I imported all the assets used in the game is very useful for me to understand what the final result would look like.
I set the background with the base tilemap, the character assets, and then I drew the decorations on top.

This step was necessary because it showed me that the base tilemap wasn't terrible, but it was normal for it to look bad without any additional details.

The decorations I created are plants and stones.

![Decorations](/foto_giocoinsetti/devlog8-decorazioni.png)

Before showing you the final result, I want to talk about a thought I had shortly after creating the Tilemap, regarding the game's style.
In many cases, technical limitations in creating pixel art can be circumvented by using a simple but distinctive style. And one that is consistent with the game's theme.

Since I have never done pixel art, I should adopt a similar solution, instead of simply creating assets that cannot be at the same level as other games on the market.

For the moment, the game does not have particular style characteristics, other than being quite low resolution, and consequently having large pixels and the user's point of view quite close to the character.

But the identity that must be achieved if a very simple style is used is like that of Undertale. You immediately understand if a screenshot belongs to that game. The design is distinctive and unique.

That being said, for now, I have no precise ideas on how I could achieve this goal, and the current result is as follows:

![Final Result](/foto_giocoinsetti/devlog8-risultatofinale.png)
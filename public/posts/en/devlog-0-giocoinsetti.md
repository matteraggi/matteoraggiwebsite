This is the first Devlog of the realization of my new project: a top-down pixel-art game set in a fantasy world populated by insects.

First, I had to develop a basic idea of what the game could be like, mostly to identify the technologies to use and where to start.

After a few days, I came to a conclusion. From a graphical point of view, the various options were the following:

- 3D Graphics
- Drawn 2D (Hollow Knight style)
- Top-down 2D pixel art (Undertale or Pokemon Gen 1 style)

The choice, for obvious reasons of graphic skills, fell on the last option. Even regarding pixel art, I have no experience, but I believe the learning curve is more adequate.

The choice of a top-down structure instead of a classic side-scrolling platformer is due to what I want to achieve regarding the story and the player's immersion in the world.

The game will not be level-based and will not be a rogue-like either; I wanted to create an RPG (Role-Playing Game) with a well-curated story and the possibility of making certain choices. So yes, like Undertale.

The tech stack I decided to use is:

- Engine: Godot (widely used especially for 2D games)
- Pixel art editor: Aseprite
- Tilemap: Tiled (maybe)

Then I asked ChatGPT to generate some images to understand how a game of this type could look. It generated photos with a granular effect, probably unintended and a bit strange, but they are very beautiful, though almost impossible to replicate with pixel art.

They actually turned out too well, because surely even if I tried to replicate an environment of that type, I wouldn't succeed. But I will try.

Here are some of the photos it generated:

![photo 1](/foto_giocoinsetti/image5.png)

![photo 2](/foto_giocoinsetti/image6.png)

![photo 3](/foto_giocoinsetti/image7.png)

As you can notice, some important details, like the small path, are not realizable in pixels. If I realized them in the same way but with pixel art, the pixel grid would be much more visible.

But the biggest problem is another one. If I choose to create the background pixel art system in the traditional way, with a tilemap, then it will be impossible to generate environments with as much randomness and naturalness as those shown above.

**How the tilemap works**

Usually, a pixel art map, especially if quite extensive, is not created entirely freehand, but small components are created. First, you have to choose the pixel size of a single component, usually between 16x16 or 32x32, then you can move on to creating each of them. They must obviously be components that attach to each other and together can form all the structures of the game background.

The components together can be used to create infinite Tilemaps.

Pros of this solution:

- waaaaay less expensive than creating everything freehand
- easier to modify the map
- easier to manage collisions
- you don't have to decide the total size of the map beforehand

Cons of this solution:

- simpler and less immersive setting
- evident repetition of elements
- symmetries in the map, which makes it less realistic
- difficulty in creating a design that isn't boxy

Besides this, I also need to understand how to decide what goes in the background and what doesn't. Usually, a layer system is used, with background - decorative elements - NPCs...

See you in the next Devlog :)
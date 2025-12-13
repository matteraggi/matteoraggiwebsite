After a long summer break, I'm back to work on the project.

Although I hadn't made a vlog episode about it, I had created a first prototype of a house for the ant world—the first one we are building.

It still doesn't entirely convince me, but for now, it will stay as it is. Here is the result:

![House without light](/foto_giocoinsetti/devlog9_foto1.png)

After doing that, the list of possible things to do is very long. For example, I could create many other houses, or do the interiors of the first one.

Instead, I decided to experiment with lights before proceeding with other assets. And I must say I had a lot of fun; the result is better than I could have imagined.

I used a Godot built-in called `PointLight2D`, which then needs to be configured correctly. Now I'll explain step-by-step how I did it.

**PointLight2D Configuration**

First, you need to choose the **texture**.
It can either be imported from an image or configured with the ones already present in Godot. I found the second option better.

At first, I couldn't get the desired result because there are many configuration parameters, but once you understand how they work, it's quite flexible. The fact that you don't need to import other images if you want to slightly change the texture is convenient. So I recommend doing it this way.

Here are the parameters for the texture if you want to achieve a classic circular light that gradually dissolves:

1.  Choose the built-in texture "GradientTexture2D".
2.  Create a new gradient.
3.  Invert light and dark, i.e., black and white.
    Drag the white selector towards the black one and vice versa. This way, you will have the brightest point in the center, where the light source actually is.
4.  Move the selector (which will now be on black) a little more towards the center. This prevents the light from being cut off at the edges, forming a bright rectangle in the scene.
5.  Now you have already obtained a good light; all that remains is to change secondary parameters such as: the color of the light (I made it more yellow because I wanted a warm light) and the size of the texture.

There you have it—you have correctly configured a light source in Godot without using external assets, and with the possibility of easily modifying it in the future.

Lastly, to make the light more useful and enhance the game atmosphere, I reduced the overall brightness of the scene.

In the world 1 scene, I added a layer called `CanvasModulate`. When set with a black/dark grey gradient, it reduces the brightness of the scene by applying a layer over the entire game screen.

The final result is as follows:

![House with light](/foto_giocoinsetti/devlog9_foto2.png)

I really liked the result, so I created some streetlights to apply the light to them as well.

Streetlight Asset:

![Streetlights without light](/foto_giocoinsetti/devlog9_foto3.png)

Streetlights with light:

![Streetlights with light](/foto_giocoinsetti/devlog9_foto4.png)

I'd say the game atmosphere has changed drastically; it's now much gloomier and closer to what I wanted to create for this first world.
That's all for today :)
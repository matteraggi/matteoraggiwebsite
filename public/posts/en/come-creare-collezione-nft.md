Creating a collection of **10,000 NFTs** is the **fastest** way to enter this market; it is very **fun** and **simple** to do, just follow a few simple steps.

Much of the process will be done **automatically** and in no time you will have your **collection** ready to be uploaded to [**Opensea**](https://www.matteoraggiblog.com/opensea-come-funziona/).

To do this, however, you will have to use some special tools that you might not know.

## What are NFTs

**NFTs** are **Non-Fungible Tokens**, meaning **Non-Exchangeable Tokens**.

They are called Tokens because they are elements of the **Blockchain**.
They can be anything because **NFT technology** can be applied practically anywhere.

In our case, they will be images.

Just normal jpg or png images, for example, which however once uploaded to the **Blockchain** take on a **digital identity** becoming **unique and tracked Tokens**.

## Procedure in short

1. Choose the subject
2. Draw subject and accessories
3. Download HashLips and Node.js
4. Download Visual Studio Code
5. Edit the HashLips code using Visual Studio Code
6. Put the drawings in the code folder
7. Generate the NFTs
8. Extra: create a website
9. Extra: create social pages
10. Extra: create a community

## Choosing the subject of your NFT collection

The choice of the **subject** is fundamental in building your **collection**: it must be simple and impactful.

Before thinking about how to create the **1000 NFT collection**, it is essential to have a good idea of how the result you want to achieve should look graphically.

Obviously, it is the most important thing, being **digital art**.

The **market** must not already be saturated, as for example with apes.

It must be still little exploited but still **attractive:** it is easier with subjects that have been "**memed**" multiple times, like dogs: [**Doge**](https://dogecoin.com) and **Shiba Inu**. At the same time, it is very unlikely in these cases to be among the first.

It must be very simple to **represent** and understand for those who see it for the first time.

Example: [Cryptopunks](https://opensea.io/collection/cryptopunks) collection.

In addition to being a very simple and impactful subject, it must also have a very easy-to-recognize **style**.

The **Cryptopunks** collection is immediately recognizable: pixels and rectangular faces in the foreground.

## Create accessories for your NFT collection

If you want to create a collection of **10,000 NFTs** or even more, you will need many main subjects but also many accessories for them.

If you are for example representing a frog, you will need a series of hats to put on it, various types of shoes, something it will hold in its hand, and much more.

Each accessory must be **unique**, because thanks to a combination of them we will create many **NFTs** **different** from each other.

The more accessories you create, the more unique **subjects** you will have for your **collection**.

There must be some more particular and **rare** than others, which can therefore be more attractive and **expensive**.

You can make these productions of different types: **drawn**, **pixel**, or creations with **Photoshop**.

You will need a specific **program** to make them. Based on which technique you use, you will need different programs like:

* [**Adobe Sketch**](https://www.adobe.com/products/sketch.html) for freehand digital drawing (on Tablet)
* Any **pixel editor** like [**Lospec**](https://lospec.com/pixel-editor/) for a style like **Cryptopunks**
* [**Canva**](https://www.canva.com) or [**Photoshop**](https://www.adobe.com/it/products/photoshop.html) if you want to use the latter technique.

## How to create a 10,000 NFT collection

Once you have created: a base for your **NFTs** (so the bare subject) and a series of other **accessories**, you can proceed to the union.

Remember that the **size** of the **images** must always be the same and the position of the drawing with respect to the total size of the image is very important.

Basically, the two images (of the same size) must be **superimposable**.

If you create a hat it must be in the right position, so that when you **combine** the images it will be on the character's head.

And all the rest of the **image** must be transparent/empty (not white).

This is because the **code** simply creates **combinations of images**, superimposing them on each other.

It is obviously not able to understand that what you drew is a hat.

To **unite** the different subjects created with all the elements it is necessary to use a **random code** that by inserting your productions will generate complete products fully automatically.

You can find the code [**here**](https://github.com/HashLips/hashlips_art_engine), it's called **HashLips**.

It may be **modified** over time, in case I don't notice it you can contact me and I will provide to **update** the article.

To manage the code you will have to install **Node.js** on your computer, which you can download at [this link](https://nodejs.org/it/download/).

To install **Node.js** launch "Node.js command prompt" and paste on the **command line** cd + the path containing Index.js.

You can find the path at the top of **file explorer** when you are inside the folder in question.

Press enter and then type `npm install`.

Instead, to open the **code** and be able to modify it you have to download a **program**, I recommend [**Visual Studio Code.**](https://code.visualstudio.com/download)

Now step by step I explain what you have to **modify** in the code to use it with your creations.

First thing, open the downloaded folder on **Visual Studio Code**, clicking "open folder".

### Photos on Layers

To put the photos of your **creations** on the program you must access the folder you downloaded.

Each section inside the layers folder represents a type of **accessory** or **feature** that you decided to put.

To load your productions you do not have to access through the program but **externally**, in the "layers" folder.

For each section, upload all photos of that type, **renaming** them by writing at the end of the name: **#n**

Where n is a number from 0 to 100 indicating the **rarity** of the accessory. The higher the number, the more common it will be.

### Address + name and description of the NFT project

First thing you have to open the file called "**config.js**". In the parts highlighted in blue you must add in order: the name of your project, the description of your project, and the address of your profile on [Opensea](https://www.matteoraggiblog.com/opensea-come-funziona/).

The sections to edit usually look like this:

* `const namePrefix` for the name
* `const description` for the description
* `address` for the address

### Quantity of NFTs and layer names

Still in the "config.js" file, scrolling down, you will find the configuration for layers. In the first part, you will have to insert the **quantity of combinations**, therefore of unique NFTs, that you want to create. If you want to create **10000**, write 10000.

Below instead there are the slots corresponding to the **individual components** of your collection, which will then be **combined**. You can add some or remove others, but above all, you will have to rename those you will use, with the same name as the layers sections.

The sections to edit are:

* `growEditionSizeTo` for the quantity of NFTs you want to create
* `name` for each layer

### Finished NFTs

After all these modifications you can **run** the program (run>start debugging).

Once the **program** has finished its execution (which will take some time due to all the combinations of images it will create) you can find all **10000** **NFTs** in the folder, external to Visual Studio Code, of the code you downloaded earlier (subfolder **build**).

## NFT Collection created! What now?

Once the collection has been **created**, you will have all your NFTs, but to sell them you need much more than uploading them to Opensea and waiting.

What do you need to make your **10,000 NFT collection known?**

### Create a Website

If your intention is to create a **serious** **project** with substantial earning possibilities, then you will also have to create a **Website** to make it more reliable in the eyes of other people.

It serves mainly to make the **seriousness** of the project understood.

If you don't know how to create a website and don't know how to work with **WordPress** you can also contact someone to do it for you on [**Fiverr**](https://it.fiverr.com/) or similar.

Just open **Opensea** and look at the best-selling projects to understand that they all have a dedicated site.

Once the site is created, you can consider yourself already **better** than most competitors.

If you want to try building it yourself I recommend visiting YouTube tutorials or looking for some inexpensive course on [**Udemy**](https://www.udemy.com/).

Remember that these are **skills** useful even beyond this project, which may prove useful in the future (web design, web programming, WordPress use,...)

### Create the Instagram page and Twitter profile

I won't dwell particularly on this point, but know that a profile on these platforms is mandatory.

**Instagram** can bring free visits to your site and your project.

While **Twitter** will surely help you in building your community, in fact, it is widely used for NFT collections.

### Create a community

Creating a **community** in the long run is the most useful thing of all and is what will bring your project to **fame** and free **publicity**.

The platforms that help you most to create it are **Twitter, Telegram, and Discord**.

It will be useful for you to study some **marketing** operations to try to make the project known and also to connect more with people.

If you want to know how NFTs and Metaverse are connected, visit my article at [this link](https://www.matteoraggiblog.com/nft-metaverso/).

## Conclusion

On **Opensea** there are thousands of collections made like yours, through combinations of multiple elements, so it will be difficult to stand out among all.

Precisely for this reason, one must pay attention to details and focus also on making oneself known first outside the **platform**, it is the only way to sell.

Do not hope to sell **10,000** **NFTs** only because they are seen on the platform, much more is needed.

A great way to advertise is through **giveaways** or giving some to **influencers** in exchange for a story.

Remember to upload your **NFTs** to the platform very carefully, also using adjectives so as to have a classification for each of them and therefore also a different **rarity** for each specimen.

Also, the **website** plays an **important** role, so if you can't do it best by yourself, the right option might be to contact an **expert**.

Didn't understand some crypto term I used in this article? Read my article: [Crypto Terminology](https://www.matteoraggiblog.com/terminologia-crypto/)

If instead you want to get [free NFTs](https://www.matteoraggiblog.com/nft-gratis/), read my article about it.
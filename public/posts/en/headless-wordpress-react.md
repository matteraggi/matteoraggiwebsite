If you want to transform your WordPress site into a **React + WordPress** site, then this guide is for you. I myself had to face this problem after years of using only WordPress.

I made this decision because, after learning how to create **Web Applications**, I wanted more customization and control over my site.

It was more of a personal desire than a real necessity.

That said, we can start with the Guide.

## The problems to face

The **main problems** you will have to deal with are:

- **organizing files** in the correct folders on the Hosting platform
- redirects, DNS settings, **htaccess** and **index.php** files
- using WordPress as a backend (**API** calls)
- duplicate articles (**canonical** address)

But first of all, you will have to face the choice regarding **Hosting**. I'll tell you about my case, in which you might find yourself.

## Choosing Hosting

I paid for **Siteground** Hosting for 2 years. Siteground is a hosting used mainly for WordPress or WooCommerce sites. Very little used for sites built from scratch with direct access to code.

Despite this, it is among the most famous and mentioned hosting services. This is because it has an **Affiliate Marketing** strategy, and consequently, many YouTubers or Bloggers use the **referral** system to earn money.

Since it targets less experienced users and offers many comforts for the user, it is a very expensive service compared to alternatives for custom-built **Web Applications**.

If you are not paying for any Hosting, I recommend you switch to something else.

I didn't make this choice having recently paid the annual subscription. So I kept Siteground (which I will change when the subscription expires).

Another option could be to use one Hosting for the **WordPress backend** and one for the **frontend** in **React**. A valid solution and certainly more orderly. However, it can be more expensive.

What I did and what I recommend you do is structure everything on a single platform and therefore in a single **directory**.

Once you have made this choice, you will be ready to start.

## Hosting Directory Structure

The structure of your site will consist of a **public_html** containing all your WordPress files. The most complicated step will be changing the structure of this folder.

It is the only one that will be taken and analyzed by the Hosting to show your site on the **Web**.

So what will you have to do to manage to **connect** the two parts?

After creating your React site you will have to create a **build**.

Usually, the indicated command is: `npm run build`.

This command will generate a build folder. And that is the only one you will need to bring your application to the Hosting platform.

Go back to your Hosting's **file manager**. Now what you will have to do is move all the files present inside public_html into a folder that must have the name of the access **routing** you want WordPress to have. I'll give you an example of how the file structure should become.

`domainname.com/it/... -> public_html -> wordpressName -> all WordPress files`

Where each arrow leads to a **subfolder**.

So the **wordpress admin section** will have the following access address: `domainname.something/wordpressName/wp-admin`

But the public_html folder needs a **main html** file to work, or at least a file that starts the entire site.

It is precisely there that you will have to put all the files present in your **build** (which will most likely contain the html file I was talking about).

Once this is done, the file structure will be correct. However, something very important is still missing.

## Fundamental files to modify

There are two files that control access to your website. And they are:

- **.htaccess**
- **index.php**

These files will surely have already been **auto-generated** in your WordPress folder.

Take the files and COPY them (they must also remain in the wordpress folder) to the **main directory**. So where you have put all your **React** build files.

Once this is done you will have to **modify them** (only the copy in the main dir).

Open the **.htaccess** file in the main directory.

Replace the text with this:

```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>
```

Then open **index.php**, always in the main dir.

Replace with this:

```php
<?php
define('WP_USE_THEMES', true);
require('./wordpressName/wp-blog-header.php');
?>
```

At this point, your site should work correctly and you should find your React frontend under the **main domain**, while in the subroute the old WordPress site.

Attention: if you continue to have **problems** viewing your site it could be for one of the following reasons:

- Browser Cache
- Browser History
- Device used

Try changing these variables and check the site again.

## Using WordPress as Backend

How do you do it?

This happens in several steps:

1. choose between **REST** or **GRAPHQL** calls
2. make WordPress accessible with **API**
3. connect **React** to WordPress APIs
4. use the APIs

**Point 1:**

The most used method, and the one I chose, is to implement **GRAPHQL** APIs on WordPress. This technology is better suited to complex data like the ones you will have to extract from WordPress. Furthermore, it is also more **flexible** and composable.

**Point 2:**

You will have to download the **WPGraphQL** Plugin and automatically you will be able to make GraphQL calls to your WordPress site. If you choose REST calls instead, know that they are available directly without external **Plugins**.

**Point 3:**

**Connecting React** to WordPress GraphQL calls is not immediate. But it won't be complicated if you follow all these steps.

- Download **Apollo GraphQL** in your React application. You can do this by following this official page: [Start With ApolloClient](https://www.apollographql.com/docs/react/get-started).
- Go to your main file. If you use Vite it can be **App.tsx**. While if you use Nextjs **layout.tsx**
- Import from Apollo: `import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";`
- Start the Apollo **client**:

`const apollo = new ApolloClient ({ uri: API_URL, cache: newInMemoryCache() });`

Where **API_URL** must be the endpoint of your calls. It will probably be:

`"https://yourdomain.something/wordpressDir/graphql"`

- Create a **service.ts** file in a new "**lib**" folder in the main directory
- Import **gql** from Apollo: `import { gql } from "@apollo/client";` In this file, the **GraphQL API calls** will be made.

These are some standard calls you can make:

Request a **single post** passing a post Id:

```typescript
export const GET_POST_BY_SLUG = gql`
     query getPostBySlug($id: ID!) {
          post(id: $id, idType: SLUG) {
               title
               date
               content
               id
               databaseId
               author {
                   node {
                        name
                   }
               }
               categories {
                   nodes {
                        slug
                        name
                   }
               }
               featuredImage {
                   node {
                       sourceUrl
                   }
               }
          }
    }
`;
```

Request **all posts** present on the site:

```typescript
export const LIST_POST = gql`
  query FetchPosts($first: Int = 80) {
    posts(first: $first) {
      nodes {
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        slug
        title
        date
      }
    }
  }
`;
```

**Create a comment**:

```typescript
export const CREATE_COMMENT = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      success
      comment {
        id
        content
        author {
          node {
            name
          }
        }
      }
    }
  }
`;
```

**Delete a comment**:

```typescript
export const DELETE_COMMENT = gql`
  mutation DeleteComment($input: ID!) {
    deleteComment(input: $input) {
      deletedId
    }
  }
`;
```

These are some of the standard calls you can make. Then you can make others based on how you want to structure the **Blog**, such as a get of posts of only one **category**.

Now all you have to do is use these calls to show what you desire. And you can do it in a totally **customized** way, creating the FrontEnd of your site starting from zero with React.

You will have greater control of your site and you can manage the blog section with **content creation** in a separate section, keeping the rest of the site dedicated to something else.

You have just created the calls with graphql, now you have to use them (so actually **call them**) in the part of the code you desire.

1. Open the tsx file you want to use to show the Blog.
2. **Import** the call you need, with the following syntax: `import { CALL_NAME } from "...";`
3. Import **useQuery** from Apollo Client: `import { useQuery } from "@apollo/client";`
4. **Use the call** like this: `const { loading, error, data } = useQuery(LIST_POST);`
    - This method will allow you to easily manage errors and especially loading.
    - **Data** will contain, if the call was successful, all the data we need.
5. Use simple **if** statements to handle all different situations. For example `if(loading)` for loading. And in the base case, so when **loading** and **error** are false, show the data that is returned to you. To know the correct format in which they arrive you can use console.log.

Here is the final result:

```tsx
import { LIST_POST } from "../../lib/service";
import { PostBlock } from "./PostBlock";
import { useQuery } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";

const Blogpost = () => {
  const { loading, error, data } = useQuery(LIST_POST);

  if (loading)
    return (
      <p className="padding-top loading-screen">
        <CircularProgress />
      </p>
    );
  if (error) return <p className="padding-top">Error :( </p>;

  const postsFound = Boolean(data?.posts.nodes.length);
  if (!postsFound) {
    return <p>No posts found.</p>;
  }

  return (
    <div className="blog-box">
      <div className="container-blog">
        <h3 className="text-xl">All my articles ({data.posts.nodes.length})</h3>
        <div className="post-grid">
          {data.posts.nodes.map((post: any) => (
            <PostBlock key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
```

Well, at this point you should be able to finish the transformation of the site **independently**.

But the last part is still missing.

## Canonical URLs

**Canonical URLs** are mainly used for SEO. If you don't know what SEO is, you can read articles about it.

But briefly, I can explain it to you. **SEO**: Search Engine Optimization.

So optimization for **search engines**. In simple words, it is a set of techniques and good practices useful to position yourself in the best possible way on [search engines](https://matteoraggiblog.com/blog/motore-di-ricerca-cos-e/) (so mainly Google).

I'll give you an **example** to make you understand better:

- only one H1 per page
- title not too long
- keyword repeated a sufficient number of times
- **no duplicate content**
- ...

All these are things you will have to be careful about if you want your article to rank well on **Google**. And the last of these is the one that can cause you problems if you don't use **Canonical URLs**.

With the new site structure, **two identical articles** will be shown on the web. The first accessible with WordPress, and the second (the one you really want to show) accessible from the React site.

To fix this problem very simply, just take, for each article, its link in the **React Application**, and paste it into the "Canonical Url" slot of your WordPress site.

Where is this slot located? It depends on the **Plugin** you use for SEO. In any case, I recommend you install **Rank Math SEO**.

With this plugin installed, the slot is located, for each article, in its **Edit** page. Scroll down until you reach the "Rank Math SEO" section and click on "**Advanced**". Right there you will find the slot in which to paste the Link.

There you go! Your site has now been completely **transformed** and you are ready to give it a new life!

The **guide** ends here, I hope it was useful to you, if so leave a comment below 🙂
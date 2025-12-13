Se volete trasformare il vostro sito WordPress in un sito **React + WordPress**, allora questa guida fa per voi. Io stesso ho dovuto affrontare questo problema, dopo anni di solo WordPress.

Ho preso questa decisione perché, dopo aver imparato a creare **applicazioni Web**, mi è nata la voglia di avere più personalizzazione e più controllo sul mio sito.

Più per un desiderio personale che per una reale necessità.

Detto questo, possiamo iniziare con la Guida.

## I problemi da affrontare

I **problemi principali** con i quali avrai a che fare sono:

- **organizzare i file** nelle corrette cartelle sulla piattaforma di Hosting
- reindirizzamenti, impostazioni dns, file **htaccess** e **index.php**
- utilizzare wordpress come backend (chiamate **API**)
- articoli duplicati (**canonical** address)

Ma come prima cosa dovrai affrontare la scelta che riguarda l'**Hosting**. Ti racconto il mio caso, nel quale magari potrai ritrovarti.

## Scegliere Hosting

Ho pagato per 2 anni l'Hosting di **Siteground**. Siteground è un hosting utilizzato soprattutto per sito WordPress o WooCommerce. Molto poco usato per siti costruiti in scratch con diretto accesso al codice.

Nonostante ciò è tra gli hosting più famosi e nominati. Questo perché ha una strategia di **Marketing** che sfrutta l'affiliazione, e di conseguenza molti Youtuber o Blogger sfruttano il **referral** per guadagnare.

Dato che punta su un'utenza meno esperto e dato che offre molti confort per l'utilizzatore, è un servizio molto costoso rispetto ad alternative per **Applicazioni Web** costruite ad hoc.

Se non state pagando nessun Hosting vi consiglio quindi di passare ad altro.

Io non ho fatto questa scelta avendo pagato da poco l'abbonamento annuale. Ho quindi mantenuto Siteground (che però cambierò a scadenza abbonamento).

Un'altra opzione potrebbe essere quella di utilizzare un Hosting per il **backend WordPress** e uno per il **frontend** in **React**. Soluzione valida e sicuramente più ordinata. Può essere però più costosa.

Quello che ho fatto io e che ti consiglio di fare è strutturare il tutto su un'unica piattaforma e quindi in un'unica **directory**.

Una volta compiuta questa scelta sarai pronto ad iniziare.

## La struttura delle Directory di Hosting

La struttura del tuo sito sarà composta da un **public_html** contenente tutti i tuoi file WordPress. Il passo più complicato sarà proprio cambiare la struttura di questa cartella.

Essa è l'unica che verrà presa e analizzata dall'Hosting per mostrare il tuo sito sul **Web**.

Quindi cosa dovrai fare per riuscire a **collegare** le due parti?

Dopo aver creato il tuo sito React dovrai creare una **build**.

Solitamente il comando indicato è: `npm run build`.

Questo comando genererà una cartella di build. Ed essa è l'unica che ti servirà per portare la tua applicazione sulla piattaforma di Hosting.

Torna sulla **gestione file** del tuo Hosting. Adesso quello che dovrai fare è spostare tutti i file presenti dentro il public_html in una cartella che dovrà avere il nome del **routing** di accesso che vuoi che WordPress abbia. Ti faccio un esempio di come dovrà diventare la struttura dei file.

`nomedominio.com/it/... -> public_html -> nomeWordpress -> tutti i file WordPress`

Dove ogni freccia porta a una **sottocartella**.

Quindi la **sezione admin di wordpress** avrà il seguente indirizzo di accesso: `nomedominio.qualcosa/nomeWordpress/wp-admin`

Ma la cartella public_html per funzionare ha bisogno di un file **html principale**, o comunque di un file che faccia partire l'intero sito.

È proprio lì che dovrai andare a mettere tutti i file presenti nella tua **build** (che conterrà molto probabilmente il file html di cui ti parlavo).

Una volta fatto questo la struttura dei file sarà quella corretta. Manca ancora qualcosa di molto importante però.

## I file fondamentali da modificare

Ci sono due file che controllano l'accesso al tuo sito web. E sono:

- **.htaccess**
- **index.php**

Questi file saranno sicuramente già stati **auto-generati** nella tua cartella WordPress.

Prendi i file e COPIALI (devono rimanere anche nella cartella wordpress) nella **directory principale**. Quindi dove avrai messo tutti i tuoi file di build di **React**.

Fatto questo dovrai **modificarli** (solo la copia nella dir principale).

Apri il file **.htaccess** nella directory principale.

Sostituisci il testo con questo:

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

Poi apri **index.php**, sempre nella dir principale.

Sostituisci con questo:

```php
<?php
define('WP_USE_THEMES', true);
require('./nomeWordpress/wp-blog-header.php');
?>
```

A questo punto il tuo sito dovrebbe funzionare correttamente e dovresti trovare sotto il **dominio principale** il tuo frontend react, mentre nella subroute il vecchio sito WordPress.

Attenzione: se continui ad avere dei **problemi** a visualizzare il tuo sito potrebbe essere per uno dei seguenti motivi:

- Cache del Browser
- Cronologia del Browser
- Dispositivo utilizzato

Prova a cambiare queste variabile e controlla nuovamente il sito.

## Utilizzare WordPress come Backend

Come si fa?

Questo avviene in più passi:

1. scegliere tra chiamate **REST** o **GRAPHQL**
2. rendere WordPress accessibile con **API**
3. collegare **React** alle API di WordPress
4. utilizzare le API

**Punto 1:**

Il metodo più utilizzato, e quello che ho scelto io, è implementare le API **GRAPHQL** su WordPress. Questa tecnologia si adatta meglio a dati complessi come quelli che dovrai estrarre da WordPress. Inoltre è anche più **flessibile** e componibile.

**Punto 2:**

Dovrai scaricare il Plugin **WPGraphQL** e automaticamente sarai in grado di fare chiamate GraphQL al tuo sito WordPress. Se sceglierai invece le chiamate REST, sappi che esse sono disponibili direttamente senza **Plugin** esterni.

**Punto 3:**

**Collegare React** alle chiamate GraphQL di WordPress non è immediato. Ma non sarà complicato se se seguirai tutti questi passi.

- Scarica **Apollo GraphQL** nella tua applicazione React. Puoi farlo seguendo questa pagina ufficiale: [Start With ApolloClient](https://www.apollographql.com/docs/react/get-started).
- Vai nel tuo file principale. Se usi Vite può essere **App.tsx**. Mentre se usi Nextjs **layout.tsx**
- Importa da Apollo: `import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";`
- Fai partire il **client** di Apollo:

`const apollo = new ApolloClient ({ uri: API_URL, cache: newInMemoryCache() });`

Dove **API_URL** dovrà essere l'endpoint delle tue chiamate. Esso probabilmente sarà:

`"https://vostrodominio.qualcosa/dirWordpress/graphql"`

- Crea un file **service.ts** in una nuova cartella "**lib**" nella directory principale
- Importa **gql** da Apollo: `import { gql } from "@apollo/client";`  In questo file verranno fatte le **chiamate API GraphQL**.

Queste sono alcune chiamate standard che puoi fare:

Richiedere un **singolo post** passando un post Id:

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

Richiedere **tutti i post** presenti sul sito:

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

**Creare un commento**:

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

**Eliminare un commento**:

```typescript
export const DELETE_COMMENT = gql`
  mutation DeleteComment($input: ID!) {
    deleteComment(input: $input) {
      deletedId
    }
  }
`;
```

Queste sono alcune delle chiamate standard che puoi fare. Poi ne potrai fare altre in base a come si vuole strutturare il **Blog**, come per esempio una get di post di solo una **categoria**.

Ora non ti rimane che usare queste chiamate per mostrare ciò che desideri. E potrai farlo in modo totalmente **personalizzato**, creando il FrontEnd del tuo sito partendo da zero con React.

Avrai un maggior controllo del tuo sito e potrai gestire la sezione blog con la **creazione di contenuti** in una sezione a parte, mantenendo tutto il resto del sito dedicato ad altro.

Hai appena creato le chiamate con graphql, adesso devi utilizzarle (quindi effettivamente **chiamarle**) nella parte di codice che desideri.

1. Apri il file tsx che vuoi utilizzare per mostrare il Blog.
2. **Importa** la chiamata che ti serve, con la seguente sintassi: `import { NOME_CHIAMATA } from "...";`
3. Importa **useQuery** di Apollo Client: `import { useQuery } from "@apollo/client";`
4. **Usa la chiamata** in questo modo: `const { loading, error, data } = useQuery(LIST_POST);`
    - Questo metodo ti permetterà di gestire facilmente gli errori e soprattutto il caricamento.
    - **Data** conterrà, se la chiamata è andata a buon fine, tutti i dati che ci servono.
5. Usa dei semplici **if** per gestire tutte le diverse situazioni. Per esempio `if(loading)` per il caricamento. E nel caso base, quindi quando **loading** ed **error** saranno false, mostra i dati che ti vengono ritornati. Per sapere il formato corretto in cui ti arrivano puoi usare console.log.

Ecco il risultato finale:

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
        <h3 className="text-xl">Tutti i miei articoli ({data.posts.nodes.length})</h3>
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

Bene, a questo punto dovresti essere in grado di terminare la trasformazione del sito in **autonomia**.

Ma manca ancora l'ultima parte.

## I Canonical Url

I **Canonical Url** servono soprattutto dal lato SEO. Se non sai cos'è la SEO, puoi leggere [questo articolo](https://www.studiosamo.it/seo/) a riguardo.

Ma in breve te lo posso spiegare io. **SEO**: Search Engine Optimization.

Quindi ottimizzazione per i **motori di ricerca**. In parole povere si tratta di un insieme di tecniche e di good practice utili a posizionarsi in modo migliore possibile sui [motori di ricerca](https://matteoraggiblog.com/blog/motore-di-ricerca-cos-e/) (quindi principalmente Google).

Ti faccio un **esempio** per farti capire meglio:

- un solo H1 per pagina
- titolo non troppo lungo
- parola chiave ripetuta un numero sufficiente di volte
- **contenuto non duplicato**
- ...

Tutte queste sono cose a cui dovrai stare attento se vuoi che il tuo articolo venga posizionato bene da **Google**. E l'ultima di queste è quella che ti potrà causare dei problemi se non usi i **Canonical Url**.

Con la nuova struttura del sito verranno mostrati **due articoli identici** sul web. Il primo accessibile con WordPress, e il secondo (quello che vuoi realmente mostrare) accessibile dal sito React.

Per sistemare molto semplicemente questo problema basta prendere, per ogni articolo, il suo link nell'**Applicazione React**, e incollarlo nello slot "Canonical Url" del tuo sito WordPress.

Dove si trova questo slot? Dipende dal **Plugin** che usi per la SEO. Io in ogni caso ti consiglio di installare **Rank Math SEO**.

Con questo plugin installato lo slot si trova, per ogni articolo, nella sua pagina di **Edit**. Scrolla verso il basso fino a raggiungere la sezione "Rank Math SEO" e clicca su "**Advanced**". Proprio lì troverai lo slot nel quale incollare il Link.

Ecco fatto! Il tuo sito adesso è stato completamente **trasformato** e sei pronto a dargli una nuova vita!

La **guida** termina qui, spero ti sia stata utile, se così è stato lascia un commento qui sotto 🙂
import { Helmet } from "react-helmet-async";
export default function SEO({
  title,
  description,
  name,
  type,
  slug,
}: {
  title: string;
  description: string;
  name: string;
  type: string;
  slug: string;
}) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <link rel="canonical" href={`https://matteoraggiblog.com/blog/${slug}`} />
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}

import { Helmet } from "react-helmet-async";
import { baseUrl, faqs } from "../data/site";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

export function Seo({ title, description, path = "/", keywords = [], schema }: SeoProps) {
  const url = `${baseUrl}${path}`;
  const defaultSchema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "RMS Gold by Manimaran Oil Mill",
      url: baseUrl,
      image: `${baseUrl}/favicon.svg`,
      telephone: "+91 98765 43210",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "96"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer }
      }))
    }
  ];

  const jsonLd = schema ? [defaultSchema, schema].flat(2) : defaultSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${baseUrl}/favicon.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

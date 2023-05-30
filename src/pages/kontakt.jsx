import { GraphQLClient } from "graphql-request";
import { kontaktQuery } from "../modules/kontaktQuery";
import KontaktInformation from "../components/DatoCMS/kontakt/KontaktInformation";
import Footer from "../components/Footer";
import Head from "next/head";

// Frontend
export default function KontaktPage({ data }) {
  //console.log(data);
  const { main, footer } = data;

  return (
    <>
      <Head>
        <title>Kontakt | Kontakt mig her</title>
        <meta
          name="description"
          content="Ønsker du at komme i kontakt med Guldsmed Sabine Sørensen? Her finder du alle nødvendige oplysninger for at nå ud til Sabine, uanset om du er interesseret i at købe et unikt smykke, få repareret et elsket stykke eller har spørgsmål til hendes arbejde. Benyt kontaktformularen for direkte kommunikation, eller besøg i butikken i Fredensborg, Danmark, for en personlig oplevelse."
        ></meta>
      </Head>
      <main>
        {main[0].content.map((content) => {
          // render content on the page
          switch (content.__typename) {
            case "KontaktInformationRecord":
              return <KontaktInformation key={content.id} content={content} />;
          }
        })}
      </main>
      <Footer content={footer[0].content[0]} />
    </>
  );
}

// GET Request
export async function getStaticProps() {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });

  const graphQLData = await graphQLClient.request(kontaktQuery);
  //console.log(graphQLData);
  return {
    props: { data: graphQLData },
  };
}

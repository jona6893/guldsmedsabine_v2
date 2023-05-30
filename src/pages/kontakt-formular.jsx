import { GraphQLClient } from "graphql-request";
import { kontaktFormularQuery } from "../modules/kontaktFormularQuery";
import Kontakt from "../components/DatoCMS/kontakt/Kontakt";
import Footer from "../components/Footer";
import Head from "next/head";

// Frontend
export default function KontaktPage({ data }) {
  //console.log(data);
  const { main, footer } = data;

  return (
    <>
      <Head>
        <title>Kontakt Formular | Send mig en besked</title>
        <meta
          name="description"
          content="Har du et spørgsmål, ønsker du at bestille et unikt smykke, eller er du interesseret i et af mine services? Du er velkommen til at udfylde denne kontaktformular med dine oplysninger og beskrivelse af din anmodning. Jeg stræber efter at vende tilbage til dig så hurtigt som muligt for at imødekomme dine behov og hjælpe med at skabe dit drømmesmykke. Lad os starte dialogen her."
        ></meta>
      </Head>
      <main>
        {main[0].content.map((content, index) => {
          // render content on the page
          switch (content.__typename) {
            case "KontaktRecord":
              return <Kontakt key={content.id} content={content} />;
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

  const graphQLData = await graphQLClient.request(kontaktFormularQuery);
  //console.log(graphQLData);
  return {
    props: { data: graphQLData },
  };
}

import { GraphQLClient } from "graphql-request";
import { kontaktFeedbackQuery } from "../modules/kontaktFeedbackQuery";
import KontaktFeedback from "../components/DatoCMS/kontakt/KontaktFeedback";
import Footer from "../components/Footer";
import Head from "next/head";

// Frontend
export default function KontaktPage({ data }) {
  //console.log(data);
  const { main, footer } = data;

  return (
    <>
      <Head>
        <title>Kontakt Formular Bekræftigelse</title>
        <meta
          name="description"
          content="Opdag unikke, håndlavede smykker fra Sabine Sørensen. 
          Jeg tilbyder skræddersyede designs, smykke reparationer og personlig service i Fredensborg. 
          Lad din passion for æstetik møde min ekspertise i smykkedesign og giv dine gamle smykker nyt liv. 
          Besøg mig og oplev en uforglemmelig smykkeoplevelse."
        ></meta>
      </Head>
      <main>
        {main[0].content.map((content) => {
          // render content on the page
          switch (content.__typename) {
            case "KontaktFeedbackRecord":
              return <KontaktFeedback key={content.id} content={content} />;
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

  const graphQLData = await graphQLClient.request(kontaktFeedbackQuery);
  //console.log(graphQLData);
  return {
    props: { data: graphQLData },
  };
}

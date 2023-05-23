import { GraphQLClient } from "graphql-request";
import { kontaktQuery } from "../modules/kontaktQuery";
import KontaktInformation from "../components/DatoCMS/kontakt/KontaktInformation";
import Footer from "../components/Footer";

// Frontend
export default function KontaktPage({ data }) {
  //console.log(data);
  const { main, footer } = data;

  return (
    <>
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

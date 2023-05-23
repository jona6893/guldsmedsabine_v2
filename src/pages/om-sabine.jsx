import { GraphQLClient } from "graphql-request";
import { omSabineQuery } from "../modules/omSabineQuery";
import Hero from "../components/DatoCMS/omSabine/Hero";
import OmMig from "../components/DatoCMS/omSabine/OmMig";
import Galleri from "../components/DatoCMS/omSabine/Galleri";
import Informationer from "../components/DatoCMS/omSabine/Informationer";
import Footer from "../components/Footer";

export default function OmSabine({ data }) {
  //console.log(data);
  const { main, footer } = data;

  return (
    <>
      <main>
        {main[0].content.map((content) => {
          // render content on the page
          switch (content.__typename) {
            case "OmSabineHeroRecord":
              return <Hero content={content} />;
            case "MinHistorieRecord":
              return <OmMig content={content} />;
            case "OmSabineGalleriRecord":
              return <Galleri content={content} />;
            case "OmSabineInformationRecord":
              return <Informationer content={content} />;
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

  const graphQLData = await graphQLClient.request(omSabineQuery);
  //console.log(graphQLData);
  return {
    props: { data: graphQLData },
  };
}

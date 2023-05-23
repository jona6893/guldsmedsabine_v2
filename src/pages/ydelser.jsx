import { GraphQLClient } from "graphql-request";
import YdelserHero from "../components/DatoCMS/ydelser/YdelserHero";
import Ydelser from "../components/DatoCMS/ydelser/Ydelser";
import Question from "../components/DatoCMS/ydelser/Question";
import { ydelserQuery } from "../modules/ydelserQuery";
import Footer from "../components/Footer";

export default function YdelserPage({ data }) {
  console.log(data);
  const { main, footer } = data;

  return (
    <>
      <main>
        {main[0].content.map((content) => {
          // render content on the page
          switch (content.__typename) {
            case "YdelserHeroRecord":
              return <YdelserHero content={content} />;

            case "YdelserRecord":
              return <Ydelser key={content.id} content={content} />;
            case "SpoergsmaalRecord":
              return <Question key={content.id} content={content} />;
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

  const graphQLData = await graphQLClient.request(ydelserQuery);
  //console.log(graphQLData);
  return {
    props: { data: graphQLData },
  };
}

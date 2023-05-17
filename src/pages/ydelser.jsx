import { GraphQLClient } from "graphql-request";
import YdelserHero from "../components/DatoCMS/ydelser/YdelserHero";
import Ydelser from "../components/DatoCMS/ydelser/Ydelser";
import Question from "../components/DatoCMS/ydelser/Question";
import { ydelserQuery } from "../modules/ydelserQuery";

export default function YdelserPage({ data }) {
  console.log(data);
  return (
    <main>
      {data.content.map((content) => {
        // render content on the page
        switch (content.__typename) {
          case "YdelserHeroRecord":
            return <YdelserHero content={content} />;

          case "YdelserRecord":
            return <Ydelser content={content} />;
          case "SpoergsmaalRecord":
            return <Question content={content} />;
        }
      })}
    </main>
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
  const filteredGraphQLData = graphQLData.allPages[0];
  //console.log(filteredGraphQLData);
  return {
    props: { data: filteredGraphQLData },
  };
}

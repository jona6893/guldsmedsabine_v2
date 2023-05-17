import { GraphQLClient } from "graphql-request";
import SimpleText from "../components/DatoCMS/SimpleText";
import { forsideQuery } from "../Modules/forsideQuery";
import Event from "../components/DatoCMS/forside/Event";
import OmSabineForside from "../components/DatoCMS/forside/OmSabineForside";
import FindMigHer from "../components/DatoCMS/forside/FindMigHer";
import UdvalgteYdelser from "../components/DatoCMS/forside/UdvalgteYdelser";
import UdvalgteSmykker from "../components/DatoCMS/forside/UdvalgteSmykker";
import Parallax from "../components/DatoCMS/forside/Parallax";

// Frontend
export default function HomePage({ data }) {
  console.log(data);
  const event = data.content[2];

  return (
    <main>
      {/* <h1>Hello {data.name}</h1> */}
      {data.content.map((content) => {
        // render content on the page
        switch (content.__typename) {
          /*  case "SimpleTextRecord":
            return <SimpleText key={content.title} title={content.title} level={1} description={content.description} />; */
          case "OmSabineForsideRecord":
            return <OmSabineForside content={content} />;
          case "EventRecord":
            return <Event content={content} />;
          case "FindMigHerRecord":
            return <FindMigHer content={content} />;
          case "UdvalgteYdelserRecord":
            return <UdvalgteYdelser content={content} />;
          case "UdvalgteSmykkerRecord":
            return <UdvalgteSmykker content={content} />;
          case "ParallaxRecord":
            return <Parallax content={content} />;
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

  const graphQLData = await graphQLClient.request(forsideQuery);
  const filteredGraphQLData = graphQLData.allPages[0];
  //console.log(filteredGraphQLData);
  return {
    props: { data: filteredGraphQLData },
  };
}

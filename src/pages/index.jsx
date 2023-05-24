import { GraphQLClient } from "graphql-request";
import SimpleText from "../components/DatoCMS/SimpleText";
import { forsideQuery } from "../modules/forsideQuery";
import Event from "../components/DatoCMS/forside/Event";
import OmSabineForside from "../components/DatoCMS/forside/OmSabineForside";
import FindMigHer from "../components/DatoCMS/forside/FindMigHer";
import UdvalgteYdelser from "../components/DatoCMS/forside/UdvalgteYdelser";
import UdvalgteSmykker from "../components/DatoCMS/forside/UdvalgteSmykker";
import Parallax from "../components/DatoCMS/forside/Parallax";
import Footer from "../components/Footer";
import Head from "next/head";

// Frontend
export default function HomePage({ data }) {
  //console.log(data);
  const { main, footer } = data;
  const event = main[0].content[2];

  return (
    <>
      <Head>
        <title>Guldsmed Sabine - Håndlavet Smykker</title>
      </Head>
      <main>
        {/* <h1>Hello {data.name}</h1> */}
        {main[0].content.map((content) => {
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

  const graphQLData = await graphQLClient.request(forsideQuery);
  //console.log(graphQLData);
  return {
    props: { data: graphQLData },
  };
}

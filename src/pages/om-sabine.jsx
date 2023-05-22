import { GraphQLClient } from "graphql-request";
import { omSabineQuery } from "../modules/omSabineQuery";
import Hero from "../components/DatoCMS/omSabine/Hero";
import OmMig from "../components/DatoCMS/omSabine/OmMig";
import Galleri from "../components/DatoCMS/omSabine/Galleri";
import Informationer from "../components/DatoCMS/omSabine/Informationer";

export default function OmSabine({ data }) {
  const { content } = data;

  return (
    <div className="">
      <Hero content={content} />
      <OmMig content={content} />
      <Galleri content={content} />
      <Informationer content={content} />
    </div>
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
  const filteredGraphQLData = graphQLData.allPages[0];

  return {
    props: { data: filteredGraphQLData },
  };
}

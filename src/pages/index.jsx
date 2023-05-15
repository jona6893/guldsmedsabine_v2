import { GraphQLClient } from "graphql-request";
import SimpleText from "../components/DatoCMS/SimpleText";
import { forsideQuery } from "../modules/forsideQuery";

// Frontend
export default function HomePage({ data }) {
  console.log(data);

  return (
    <div>
      <h1>Hello {data.name}</h1>
      {data.content.map((content) => {
        // render content on the page
        switch (content.__typename) {
          case "SimpleTextRecord":
            return <SimpleText key={content.title} title={content.title} level={1} description={content.description} />;
        }
      })}
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

  const graphQLData = await graphQLClient.request(forsideQuery);
  const filteredGraphQLData = graphQLData.allPages[0];
  //console.log(filteredGraphQLData);
  return {
    props: { data: filteredGraphQLData },
  };
}

import { gql, GraphQLClient } from "graphql-request";
import YdelserHero from "../components/DatoCMS/YdelserHero";
import Ydelser from "../components/DatoCMS/Ydelser"

export default function YdelserPage({ data }) {
  console.log(data);
  return (
    <div>
      {data.content.map((content) => {
        // render content on the page
        switch (content.__typename) {
          case "YdelserHeroRecord":
            return <YdelserHero content={content} />;

          case "YdelserRecord":
            return <Ydelser content={content} />;
        }
      })}
    </div>
  );
}

// GraphQL Query
const page = "Ydelser";
const query = gql`
  query {
    allPages(filter: { name: { eq: "Ydelser" } }) {
      id
      name
      content {
        ... on YdelserHeroRecord {
          __typename
          id
          title
          paragraph
          heroImage {
            url
          }
        }
        ... on YdelserRecord {
          __typename
          id
          ydelser {
            title
            paragraph
            price
            photo {
              url
            }
          }
        }
      }
    }
  }
`;

// GET Request
export async function getStaticProps() {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });

  const graphQLData = await graphQLClient.request(query);
  const filteredGraphQLData = graphQLData.allPages[0];
  //console.log(filteredGraphQLData);
  return {
    props: { data: filteredGraphQLData },
  };
}

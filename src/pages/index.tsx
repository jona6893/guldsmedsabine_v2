import { gql, GraphQLClient } from "graphql-request";
import { GraphQLResponse } from "graphql-request/build/esm/types";

// Types
interface HomeProps {
  graphQLData: Data;
}

interface Data {
  page: Page;
}

interface Page {
  id: number;
  name: string;
}

// Frontend
export default function Home({ graphQLData }: HomeProps) {
  const { page: data }: Data = graphQLData;

  return (
    <div>
      <h1>Hello {data.name}</h1>
    </div>
  );
}

// GraphQL Query
const query = gql`
  query {
    page {
      id
      name
      content {
        ... on SimpleTextRecord {
          title
          description
        }
      }
    }
  }
`;

// GET Request
export async function getStaticProps() {
  const endpoint: string = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });

  const graphQLData: GraphQLResponse = await graphQLClient.request(query);
  console.log(graphQLData);
  return {
    props: { graphQLData },
  };
}

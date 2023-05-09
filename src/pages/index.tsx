// Import the necessary modules for GraphQL queries and their types
import { gql, GraphQLClient } from "graphql-request";
import { GraphQLResponse } from "graphql-request/build/esm/types";
// Import the SimpleText component from DatoCMS
import SimpleText from "@/components/DatoCMS/SimpleText";

// Define TypeScript types for the Home component's props
interface HomeProps {
  data: Data;
}

// Define TypeScript type for the data object
interface Data {
  id: number;
  name: string;
  content: any[];
}

// Define the Home component which receives data as a prop
export default function Home({ data }: HomeProps) {
  // Render the Home component
  return (
    <div>
      <h1>Hello {data.name}</h1>
      {data.content.map((content) => {
        // Iterate through the content array and render its items
        switch (content.__typename) {
          // Check if the content item is a SimpleTextRecord
          case "SimpleTextRecord":
            // Render the SimpleText component with the content item's properties
            return (
              <SimpleText
                key={content.title}
                title={content.title}
                level={1}
                description={content.description}
              />
            );
        }
      })}
    </div>
  );
}

// Define the GraphQL query to fetch data for the page
const page: string = "Forside";
const query: string = gql`
  query {
    allPages(filter: { name: { eq: ${page} } }) {
      id
      name
      content {
        ... on SimpleTextRecord {
          __typename
          title
          description
        }
      }
    }
  }
`;

// Define an async function to fetch data using the GraphQL query
export async function getStaticProps(): Promise<{ props: { data: any } }> {
  // Define the GraphQL endpoint
  const endpoint: string = "https://graphql.datocms.com/";
  // Initialize a new GraphQLClient instance with the endpoint and headers
  const graphQLClient: GraphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });

  // Perform the GraphQL request and store the response
  const graphQLData: GraphQLResponse | any = await graphQLClient.request(query);
  // Extract the relevant data from the GraphQL response
  const filteredGraphQLData = graphQLData.allPages[0];
  // Return the data as a prop for the Home component
  return {
    props: { data: filteredGraphQLData },
  };
}

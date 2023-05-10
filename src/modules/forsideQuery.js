import { gql } from "graphql-request";

//* Import af Inhold til forsiden
export const forsideQuery = gql`
  query {
    allPages(filter: { name: { eq: "Forside" } }) {
      id
      name
      content {
        ... on SimpleTextRecord {
          __typename
          id
          title
          description
        }
      }
    }
  }
`;

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
        ... on EventRecord {
          __typename
          id
          title
          smallTitle
          photo {
            url
          }
          time
          titleTwo
          titleTid
          titleLocation
          titleDate
          location
          date
          paragraph
          knapOne {
            url
            text
          }
          knapTwo {
            url
            text
          }
        }
      }
    }
  }
`;

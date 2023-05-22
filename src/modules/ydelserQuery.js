import { gql } from "graphql-request";

//* Import af Inhold til siden "Ydelser"
export const ydelserQuery = gql`
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
            broedtekst
            price
            photo {
              url
            }
          }
        }
        ... on SpoergsmaalRecord {
          __typename
          id
          title
          paragraph
          buttonOne {
            url
            text
          }
          buttonTwo {
            url
            text
          }
        }
      }
    }
  }
`;

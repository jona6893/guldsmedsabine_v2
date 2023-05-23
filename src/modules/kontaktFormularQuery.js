import { gql } from "graphql-request";

//* Import af Inhold til siden "Kontakt"
export const kontaktFormularQuery = gql`
  query {
    allPages(filter: { name: { eq: "Kontakt" } }) {
      id
      name
      content {
        ... on KontaktRecord {
          __typename
          id
          overskrift
          paragraf
          billede {
            id
            url
            width
            height
            alt
          }
          formular {
            navn
            email
            telefon
            besked
          }
        }
      }
    }
  }
`;

import { gql } from "graphql-request";

//* Import af Inhold til siden "Kontakt"
export const kontaktQuery = gql`
  query {
    allPages(filter: { name: { eq: "Kontakt" } }) {
      id
      name
      content {
        ... on KontaktRecord {
          __typename
          overskrift
          paragraf
          billede {
            url
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

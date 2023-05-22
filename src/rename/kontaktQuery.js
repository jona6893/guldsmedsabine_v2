import { gql } from "graphql-request";

//* Import af Inhold til siden "Kontakt"
export const kontaktQuery = gql`
  query {
    allPages(filter: { name: { eq: "Kontakt" } }) {
      id
      name
      content {
        ... on KontaktInformationRecord {
          __typename
          overskrift
          adresse
          telefon
          email
          cvr
          kort {
            latitude
            longitude
          }
        }
      }
    }
  }
`;

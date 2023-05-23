import { gql } from "graphql-request";

//* Import af Inhold til siden "Kontakt"
export const kontaktQuery = gql`
  query {
    main: allPages(filter: { name: { eq: "Kontakt" } }) {
      id
      name
      content {
        ... on KontaktInformationRecord {
          __typename
          id
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
    footer: allPages(filter: { name: { eq: "Footer" } }) {
      id
      name
      content {
        ... on FooterIndholdRecord {
          __typename
          logo {
            url
          }
          adresse
          telefonNummer
          email
          cvr
          socialMedie {
            icon {
              url
            }
            title
            link
          }
          undersider {
            overskrift
            link {
              titleLink
              link
            }
          }
        }
      }
    }
  }
`;

import { gql } from "graphql-request";

//* Import af Inhold til siden "Kontakt"
export const kontaktFormularQuery = gql`
  query {
    main: allPages(filter: { name: { eq: "Kontakt" } }) {
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

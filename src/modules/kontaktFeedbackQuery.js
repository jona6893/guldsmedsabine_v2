import { gql } from "graphql-request";

//* Import af Inhold til siden "Kontakt"
export const kontaktFeedbackQuery = gql`
  query {
    main: allPages(filter: { name: { eq: "Kontakt" } }) {
      id
      name
      content {
        ... on KontaktFeedbackRecord {
          __typename
          overskrift
          tekst
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

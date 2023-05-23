import { gql } from "graphql-request";

//* Import af Inhold til siden "Ydelser"
export const ydelserQuery = gql`
  query {
    main: allPages(filter: { name: { eq: "Ydelser" } }) {
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
            width
            height
            alt
          }
        }
        ... on YdelserRecord {
          __typename
          id
          ydelser {
            id
            title
            paragraph
            broedtekst
            price
            photo {
              url
              width
              height
              alt
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

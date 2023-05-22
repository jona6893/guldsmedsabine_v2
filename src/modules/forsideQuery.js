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
          knapper {
            ... on KnapRecord {
              text
              url
            }
            ... on EksternLinkRecord {
              text
              url
            }
          }
        }
        ... on OmSabineForsideRecord {
          __typename
          id
          fotos {
            url
          }
          underOverskrift
          overskrift
          paragraph
          knap {
            url
            text
          }
        }
        ... on FindMigHerRecord {
          __typename
          id
          kort {
            longitude
            latitude
          }

          overskrift
          broedtekst
          knap {
            url
            text
          }
        }
        ... on UdvalgteYdelserRecord {
          __typename
          udvalgteYdelser {
            overskrift
            broedtekst
            foto {
              url
            }
          }
          knap {
            text
            url
          }
          overskriften
        }
        ... on UdvalgteSmykkerRecord {
          __typename
          id
          udvalgteSmykker {
            id
            produktNavn
            produktBillede {
              url
            }
            pris
          }
          knap {
            text
            url
          }
          overskriften
        }
        ... on ParallaxRecord {
          __typename
          id

          fotoParallax {
            url
          }
        }
      }
    }
  }
`;

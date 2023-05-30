import { gql } from "graphql-request";

//* Import af Inhold til forsiden
export const forsideQuery = gql`
  query {
    main: allPages(filter: { name: { eq: "Forside" } }) {
      id
      name
      content {
        ... on ForsideHeroRecord {
          __typename
          id
          baggrundsvideo {
            url
          }
          mobileBaggrund {
            url
            height
            alt
            width
          }
          overskrift
          subOverskrift
          brDtekst
          knap {
            text
            url
          }
        }
        ... on EventRecord {
          __typename
          id
          title
          smallTitle
          photo {
            url
            width
            height
            alt
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
            width
            height
            alt
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
          id
          udvalgteYdelser {
            overskrift
            broedtekst
            id
            foto {
              url
              width
              height
              alt
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
              width
              height
              alt
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
            width
            height
            alt
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

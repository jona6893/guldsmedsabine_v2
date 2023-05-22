import { gql } from "graphql-request";

//* Import af Inhold til siden "Om Sabine"
export const omSabineQuery = gql`
  query {
    allPages(filter: { name: { eq: "Om Sabine" } }) {
      id
      name
      content {
        ... on OmSabineHeroRecord {
          __typename
          id
          title
          paragraph
          heroImage {
            url
          }
        }
        ... on MinHistorieRecord {
          __typename
          id
          title
          title2
          paragraph
          paragraph2
          knap {
            text
            url
          }
          sabinephoto {
            url
          }
        }
        ... on OmSabineGalleriRecord {
          id
          galleri {
            url
          }
        }
        ... on OmSabineInformationRecord {
          id
          heading
          subHeading
          paragraph
          knap {
            text
            url
          }
          lokation
          lokationHeading
          aabningstiderHeading
          tider
        }
      }
    }
  }
`;

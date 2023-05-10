//
//
//
//* Import af Inhold til siden "Ydelser"
export const ydelserIndhold = `query {
    allPages(filter: { name: { eq: "Ydelser" } }) {
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
          }
        }
        ... on YdelserRecord {
          __typename
          id
          ydelser {
            title
            paragraph
            price
            photo {
              url
            }
          }
        }
        ... on QuestionRecord {
          __typename
          id
          title
          paragraph
          knapOne {
            url
            text
          }
          knapTwo {
            url
            text
          }
        }
      }
    }
  }`;
//
//
//


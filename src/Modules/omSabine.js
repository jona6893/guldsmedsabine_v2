//
//
//
//* Import af Inhold til siden "Om Sabine"
export const omSabineIndhold = `  query {
    allPages(filter: { name: { eq: "Om Sabine" } }) {
      id
      name
      content {
        ... on OmSabineHeroRecord {
          id
          title
          paragraph
          heroImage {
            url
          }
        }
        ... on MinHistorieRecord {
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
      }
    }
  }`;
//
//
//


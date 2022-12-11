import { imageFragment } from "./imageFragment"
import { locationFrag } from "./locationFragment"

export const ComponentWebisteBlocksHomeBanner = `
...on ComponentWebisteBlocksHomeBanner{
    __typename
    homePageImg{
        ${imageFragment}
    }
    title
  }
`
export const ComponentWebisteBlocksPropertyListing = `
...on ComponentWebisteBlocksPropertyListing{
  __typename
  title
  cardStyle
  Property{
    pages_property{
      data{
        attributes{
          title
          Location{${locationFrag}}
          imgThumb{${imageFragment}}
          price
        }
      }
    }
  }
}
`

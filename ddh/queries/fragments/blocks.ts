import { imageFragment } from "./imageFragment"

export const ComponentWebisteBlocksHomeBanner = `
...on ComponentWebisteBlocksHomeBanner{
    __typename
    homePageImg{
        ${imageFragment}
    }
    title
  }
`
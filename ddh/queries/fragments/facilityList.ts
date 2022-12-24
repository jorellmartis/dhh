import { imageFragment } from "./imageFragment"
export const facilityList = `
data{
    attributes{
      title
      facilityIco{
        ${imageFragment}
      }
    }
  }
`
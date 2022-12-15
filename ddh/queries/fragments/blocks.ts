import { facilityList } from "./facilityList"
import { imageFragment } from "./imageFragment"
import { locationFrag } from "./locationFragment"

//PAGES SITEMAP BLOCKS
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
export const ComponentNavigationListOfLinks =`
...on ComponentNavigationListOfLinks{
  __typename
  listOfLinks{
  id
  enableUrlName
  urlName
  pages_sitemap{
      data{
      attributes{
          title
          slug
      }
      }
  }
  }
}
`
//PAGES PROPERTIES BLOCK
export const ComponentWebisteBlocksImageGallery = `
...on ComponentWebisteBlocksImageGallery{
  __typename
  swiper{
    swiperImg{${imageFragment}}
  }
}
`
export const ComponentWebisteBlocksPropertyDescription = `
...on ComponentWebisteBlocksPropertyDescription{
  __typename
  description
}
`
export const ComponentWebisteBlocksFacilities = `
...on ComponentWebisteBlocksFacilities{
  __typename
  title
  facility{
    facilityList{${facilityList}}
  }
}
`
export const ComponentWebisteBlocksExtraFacility = `
...on ComponentWebisteBlocksExtraFacility{
  __typename
  title
  extraFacility{
    facilityExtraList{${facilityList}}
  }
}
`
export const ComponentWebisteBlocksPropertyRules=`
...on ComponentWebisteBlocksPropertyRules{
  __typename
  propRules{
    title
  }
}
`
export const ComponentWebisteBlocksDistrictAndArea = `
...on ComponentWebisteBlocksDistrictAndArea{
  __typename
  title
  description
  nearbyAttractions
}
`



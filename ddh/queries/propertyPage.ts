import { gql } from "@apollo/client"
import { createDeflateRaw } from "zlib"
import { ComponentWebisteBlocksDistrictAndArea, ComponentWebisteBlocksExtraFacility, ComponentWebisteBlocksFacilities, ComponentWebisteBlocksImageGallery, ComponentWebisteBlocksPropertyDescription, ComponentWebisteBlocksPropertyRules } from "./fragments/blocks"
import { imageFragment } from "./fragments/imageFragment"
import { locationFrag } from "./fragments/locationFragment"

// export const GET_PROPERTY_DETAIL = gql`
// query GET_PROPERTY_DETAIL($slug : String){
// pagesProperties(filters:{
//     slug:{
//     eq: $slug
//     }
//     }){
//     data{
//     attributes{
//             title
//             slug
//             blocks{
//                 ${ComponentWebisteBlocksImageGallery}
//                 ${ComponentWebisteBlocksPropertyDescription}
//                 ${ComponentWebisteBlocksFacilities}
//                 ${ComponentWebisteBlocksExtraFacility}
//                 ${ComponentWebisteBlocksPropertyRules}
//                 ${ComponentWebisteBlocksDistrictAndArea
//             }
//         }
//     }
// }
// }
// `
export const GET_PROPERTY_LISTING = gql`
query GET_PROPERTY_LISTING($bedroom: ID){
    pagesProperties(filters:{
        list_bedroom:{
            id:{
                eq: $bedroom
            }
        }
    }){
        data{
        attributes{
            slug
            title
            imgThumb{${imageFragment}}
            Location{${locationFrag}}
        }
        }
    }
}
`
export const GET_FILTERS = gql`
query GET_FILTERS {
    listBedrooms{
        data{
        id
            attributes{
                __typename
                title
                noOfBedrooms
            }
        }
    }
}
`

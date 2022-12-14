import { gql } from "@apollo/client"
import { ComponentWebisteBlocksDistrictAndArea, ComponentWebisteBlocksExtraFacility, ComponentWebisteBlocksFacilities, ComponentWebisteBlocksPropertyDescription, ComponentWebisteBlocksPropertyRules } from "./fragments/blocks"
import { imageFragment } from "./fragments/imageFragment"
import { locationFrag } from "./fragments/locationFragment"

export const GET_PROPERTY_LISTING = gql`
query GET_PROPERTY_LISTING($bedroom: ID, $guest: ID, $location: ID){
    pagesProperties(filters:{
        list_bedroom:{
            id:{
                eq: $bedroom
            }
        },
        guest:{
            id:{
                eq: $guest
            }
        }
        Location:{
            id:{
                eq: $location
            }
        }
    }){
        data{
        attributes{
            slug
            title
            imgThumb{${imageFragment}}
            Location{${locationFrag}}
            price
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
    listGuests{
        data{
            id
            attributes{
            __typename
            title
            noOfGuest
            }
        }
    }
    listLocations{
        data{
            id
            attributes{
            __typename
            location
            }
        }
}
}
`
export const GET_PROPERTY_SLUG = gql`
query GET_PROPERTY_SLUG{
    pagesProperties{
        data{
            attributes{
                slug
            }
        }
    }
}
`
export const GET_PROPERTY_DETAIL= gql `
query GET_PROPERTY_DETAIL($slug : String){
    pagesProperties(filters:{
        slug:{
        eq: $slug
        }
    }){
        data{
        id
        attributes{
            title
            Location{${locationFrag}}
            list_bedroom{
            data{
                attributes{
                title
                }
            }
            }
            guest{
            data{
                attributes{
                title
                }
            }
            }
            imgGallery{
                swiper{
                    swiperImg{
                        ${imageFragment}
                    }
                }
            }
            blocks{
            ${ComponentWebisteBlocksPropertyDescription}
            ${ComponentWebisteBlocksFacilities}
            ${ComponentWebisteBlocksExtraFacility}
            ${ComponentWebisteBlocksPropertyRules}
            ${ComponentWebisteBlocksDistrictAndArea}
            }
        }
        }
    }
    }
    `

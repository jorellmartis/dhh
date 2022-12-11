import { gql } from "@apollo/client"
import { ComponentWebisteBlocksHomeBanner , ComponentWebisteBlocksPropertyListing } from "./fragments/blocks"

export const GET_PARENT_PAGES = gql`
    query ParentPages($slug: String){
        pagesSitemaps(filters:{
        slug:{
            eq: $slug
        }
        }){
        data{
            attributes{
            title
            blocks{
                ${ComponentWebisteBlocksHomeBanner}
                ${ComponentWebisteBlocksPropertyListing}
            }
            }
        }
        }
    }
`

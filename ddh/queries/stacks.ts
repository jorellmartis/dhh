import { gql } from "@apollo/client"
import { ComponentNavigationListOfLinks } from "./fragments/blocks"
export const GET_STACK_DATA = gql`
query GET_STACK_DATA($stackID: String){
    stacks(filters:{
        stackID:{
        eq: $stackID
        }
    }){
        data{
        attributes{
            blocks{
                ${ComponentNavigationListOfLinks}
            }
        }
        }
    }
    }
`

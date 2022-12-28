import { gql } from "@apollo/client"
export const CREATE_RESERV = gql`
    mutation CREATE_RESERV($startDate: Date, $endDate: Date, $propertyID: ID){
    createFormReservation(data:{
        startDate: $startDate
        endDate: $endDate
        pages_property: $propertyID
    }){
        data{
        attributes{
            startDate
            endDate
            pages_property{
            data{
                id
            }
            }
        }
        }
    }
}
`

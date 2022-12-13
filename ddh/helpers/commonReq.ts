import { GET_STACK_DATA } from '../queries/stacks';
import apolloClient from './apollo'

    export const stackData = async() =>{  
        let headerData = null;
        try {
            const { data } = await apolloClient.query({
                query:  GET_STACK_DATA,
                fetchPolicy: "no-cache",
                variables: {
                stackID: "header-navigation"
                }
            });
            headerData = data?.stacks?.data[0].attributes;
            console.log(headerData,"Stackkkiee")

        }
        catch (error) {
            console.log(error);
        }
        return{
            headerData
        }
    }
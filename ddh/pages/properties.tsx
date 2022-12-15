import React,{useState, useEffect} from 'react'
import FullBlockRender from '../components/FullBlockRenderer'
import PropertyListing from '../components/listings/PropertyListing'
import {stackData} from '../helpers/commonReq'
import apolloClient from '../helpers/apollo'
import { GET_PROPERTY_LISTING } from '../queries/propertyPage'


const properties = () => {
  const [propertyList, setPropertyList] = useState(null);
  useEffect(() => {
    getListOfProperties();
  }, []);
  useEffect(() => {
    console.log(propertyList)
  }, [propertyList]);

  const getListOfProperties = async () => {
    try {
      const { data } = await apolloClient.query({
        query: GET_PROPERTY_LISTING,
      });
      setPropertyList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    
    </>
  )
}
export default properties


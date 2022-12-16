import React,{useState, useEffect} from 'react'
import FullBlockRender from '../components/FullBlockRenderer'
import PropertyListing from '../components/listings/PropertyListing'
import {stackData} from '../helpers/commonReq'
import apolloClient from '../helpers/apollo'
import { FilterProp } from '../typings/typings'
import { GET_PROPERTY_LISTING, GET_FILTERS } from '../queries/propertyPage'
import { RoomFilters, FilterMenu } from "../styles/reusable/FlilterMenu";



const properties = ({filterData}:FilterProp) => {
  console.log(filterData,"==>filter")
  const [propertyList, setPropertyList] = useState(null);
  const [selectedBedroom, setselectedBedroom] = useState<string | null>(null);
  useEffect(() => {
    getListOfProperties();
  }, []);
  useEffect(() => {
    if(selectedBedroom)
    getListOfProperties();
}, [selectedBedroom]);

  const getListOfProperties = async () => {
    try {
      const { data } = await apolloClient.query({
        query: GET_PROPERTY_LISTING,
        variables: {
          ...(selectedBedroom ? {bedroom: selectedBedroom} : {}),
        }
      });
      console.log(data,"---___---")
      setPropertyList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <FilterMenu>
      <RoomFilters>
        <ul>
          {filterData?.listBedrooms?.data.map((filter , index) => (
            <li key={`filter-data-${filter?.id}`}>
            <input onChange={(e)=> setselectedBedroom(e.target.value)}  type="radio" value={filter?.id} name={filter?.attributes?.__typename} id={filter?.id} />
            <label htmlFor={filter?.id}>{index == 0 ? filter?.attributes?.noOfBedrooms+" Bedroom": filter?.attributes?.noOfBedrooms}</label>
          </li>
          ))}
        </ul>
      </RoomFilters>
      {/* <RoomFilters>
      <ul>
          <li>
            <input type="radio"  name="guest-prop" id="guest1" />
            <label onClick={(e) => console.log(e)} htmlFor="guest1">1 guest</label>
          </li>
          <li>
            <input type="radio"  name="guest-prop" id="guest2" />
            <label onClick={(e) => console.log(e)} htmlFor="guest2">2</label>
          </li>
          <li>
            <input type="radio"  name="guest-prop" id="guest3" />
            <label onClick={(e) => console.log(e)} htmlFor="guest3">3</label>
          </li>
          <li>
            <input type="radio"  name="guest-prop" id="guest4" />
            <label onClick={(e) => console.log(e)} htmlFor="guest4">4</label>
          </li>
          <li>
            <input type="radio"  name="guest-prop" id="guest5" />
            <label onClick={(e) => console.log(e)} htmlFor="guest5">5</label>
          </li>
          <li>
            <input type="radio"  name="room-prop" id="guest6" />
            <label onClick={(e) => console.log(e)} htmlFor="guest6">6</label>
          </li>
          <li>
            <input type="radio"  name="room-prop" id="guest7" />
            <label onClick={(e) => console.log(e)} htmlFor="guest7">7+</label>
          </li>
        </ul>
      </RoomFilters> */}
    </FilterMenu>
    <PropertyListing 
    propertyListingData={propertyList}/>
    </>
  )
}
export default properties

export const getStaticProps = async() =>{
  let filterData = null;
  try {
      const { data } = await apolloClient.query({
          query: GET_FILTERS,
      });
      filterData = data;   
  } 
  catch (error) {
      console.log(error)
  }
  // const commonData = await stackData();

  return {
      props: {
          filterData,
          // headerData: commonData?.headerData,
      },
  }
}


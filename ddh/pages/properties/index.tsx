import React,{useState, useEffect} from 'react'
import {PropertyListingBlock} from '../../components/listings/PropertyListing'
import apolloClient from '../../helpers/apollo'
import { FilterProp, PropertyCardType } from '../../typings/typings'
import { GET_PROPERTY_LISTING, GET_FILTERS } from '../../queries/propertyPage'
import { RoomFilters, FilterMenu } from "../../styles/reusable/FlilterMenu";
import PropertyCard from '../../components/elements/cards/PropertyCard'
import Link from 'next/link'
import {stackData} from '../../helpers/commonReq'



type propertyPageData = {
  pagesProperties:{
    data:Array<{
      attributes: PropertyCardType
    }>
  }
}
const Properties = ({filterData}:FilterProp) => {
  const [propertyList, setPropertyList] = useState<propertyPageData | null >(null);
  const [selectedBedroom, setselectedBedroom] = useState<string | null>(null);
  const [selectedGuest, setSelectedGuest] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  useEffect(() => {
    getListOfProperties();
  }, []);
  useEffect(() => {
    if(selectedBedroom)
    getListOfProperties();
    console.log(propertyList,"fetched data")
}, [selectedBedroom]);
useEffect(() => {
  if(selectedGuest)
  getListOfProperties();
  console.log(propertyList,"fetched data")
}, [selectedGuest]);

  const getListOfProperties = async () => {
    try {
      const { data } = await apolloClient.query({
        query: GET_PROPERTY_LISTING,
        variables: {
          ...(selectedBedroom ? {bedroom: selectedBedroom} : {}),
          ...(selectedGuest ? {guest: selectedGuest} : {}),
        }
      });
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
          {filterData?.listBedrooms?.data?.map((bedroom , index) => (
            <li key={`bedroom-data-${bedroom?.id}`}>
            <input onChange={(e)=> setselectedBedroom(e.target.value)}  type="radio" value={bedroom?.id} name={bedroom?.attributes?.__typename} id={bedroom?.attributes?.title} />
            <label htmlFor={bedroom?.attributes?.title}>{index == 0 ? bedroom?.attributes?.noOfBedrooms+" Bedroom": bedroom?.attributes?.noOfBedrooms}</label>
          </li>
          ))}
        </ul>
      </RoomFilters>
      <RoomFilters>
      <ul>
        {filterData?.listGuests?.data?.map((guest , index) => (
        <li key={`filter-data-${guest?.id}`}>
          <input type="radio" onChange={(e)=> setSelectedGuest(e.target.value)} value={guest?.id} name={guest?.attributes?.__typename} id={guest?.id} />
          <label htmlFor={guest?.id}>{index == 0 ? guest?.attributes?.noOfGuest+" Guest": guest?.attributes?.noOfGuest}</label>
        </li>
        ))} 
      </ul>
      </RoomFilters>
    </FilterMenu>
    <div style={{padding:'20px 36px', maxWidth:'1440px', margin:'auto'}}>
    <PropertyListingBlock>
      {propertyList?.pagesProperties?.data?.map((property ,index) =>(
        <Link key={`link-${index}`} style={{display:'contents'}} href={`properties/${property?.attributes?.slug}`}>
        <PropertyCard 
        key={`property-id-${new Date().getTime}-${index}`}
        propertyCardData = {{
          ...property,
          isBlock: false
        }}
        />
        </Link>
      ))}

    </PropertyListingBlock>
    </div>
    </>
  )
}
export default Properties

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
  const commonData = await stackData();

  return {
      props: {
          filterData,
          headerData: commonData?.headerData,
      },
  }
}


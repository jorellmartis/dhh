import React from 'react'
import styled from 'styled-components'
import PropertyCard from '../elements/cards/PropertyCard'
import {PropertyListType} from '../../typings/typings'

type PropertyListCompType = {
  propertyListingData? : PropertyListType | null 
}

export const PropertyListingBlock = styled.div`
    display: flex;
    overflow-x: hidden;
    flex-direction: row;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    flex-wrap: wrap;
`
const PropertyListing = ({propertyListingData}: PropertyListCompType) => {
  console.log(propertyListingData,"==>Listing Data")
  return (
    <>
    <div style={{padding:'20px 36px', maxWidth:'1440px', margin:'auto'}}>
    <h2>{propertyListingData?.title}</h2>
    <PropertyListingBlock>
      {propertyListingData?.pagesProperties?.map((property ,index) =>(
        <PropertyCard 
        key={`property-id-${new Date().getTime}-${index}`}
        propertyCardData = {property}
        />
      ))}

    </PropertyListingBlock>
    </div>
    </>
  )
}

export default PropertyListing
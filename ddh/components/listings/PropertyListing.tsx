import React from 'react'
import styled from 'styled-components'
import PropertyCard from '../elements/cards/PropertyCard'
import {PropertyListType} from '../../typings/typings'

type PropertyListCompType = {
  propertyListingData? : PropertyListType
}

const PropertyListingBlock = styled.div`
    display: flex;
    overflow-x: hidden;
    flex-direction: row;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    flex-wrap: wrap;
`
const PropertyListing = ({propertyListingData}: PropertyListCompType) => {
  return (
    <>
    <div style={{padding:'2% 5%'}}>
    <h2>{propertyListingData?.title}</h2>
    <PropertyListingBlock>
      {propertyListingData?.Property?.map((property ,index) =>(
        <PropertyCard 
        key={`property-id-${new Date().getTime}-${index}`}
        propertyCardData = {property}
        />
      ))}
        <PropertyCard/>
    </PropertyListingBlock>
    </div>
    </>
  )
}

export default PropertyListing
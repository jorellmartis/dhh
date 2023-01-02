import React from 'react'
import styled from 'styled-components'
import PropertyCard from '../elements/cards/PropertyCard'
import {PropertyListType} from '../../typings/typings'
import { WrapperContainer } from '../../styles/reusable/WrapperContainer'

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
  const styleType = propertyListingData?.cardStyle
  return (
    <>
    <WrapperContainer>
    <h2>{propertyListingData?.title}</h2>
    <PropertyListingBlock>
      {propertyListingData?.pagesProperties?.map((property ,index) =>(
        <PropertyCard
        key={`property-id-${new Date().getTime}-${index}`}
        propertyCardData = {{
          ...property,
          isBlock: true,
          styleType
        }}
        />
      ))}
    </PropertyListingBlock>
    </WrapperContainer>
    </>
  )
}

export default PropertyListing
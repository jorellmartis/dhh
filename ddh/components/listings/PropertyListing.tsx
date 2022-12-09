import React from 'react'
import styled from 'styled-components'
import PropertyCard from '../elements/cards/PropertyCard'

const PropertyListingBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: auto;
    background: black;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
const PropertyListing = () => {
  return (
    <PropertyListingBlock>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
    </PropertyListingBlock>
  )
}

export default PropertyListing
import React, { Component } from 'react'
import { CompBlockData } from '../../../typings/typings'
import PropertyListing from '../../listings/PropertyListing'

const ComponentWebisteBlocksPropertyListing = ({compBlockData}: CompBlockData) => {
  return (
    <>
      <PropertyListing
        propertyListingData = {compBlockData}
      />
    </>
  )
}

export default ComponentWebisteBlocksPropertyListing
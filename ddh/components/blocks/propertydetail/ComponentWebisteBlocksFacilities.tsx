import React from 'react'
import { FacilityProp } from '../../../typings/typings'
import Facility from '../../properties/Facility'

type compBlockData = {
    compBlockData: FacilityProp
}
const ComponentWebisteBlocksFacilities = ({compBlockData}: compBlockData) => {
  return (
    <Facility facilityData = {compBlockData}/>
  )
}

export default ComponentWebisteBlocksFacilities
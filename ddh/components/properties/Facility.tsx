import React from 'react'
import { getStrapiMedia } from '../../helpers/strapi'
import { TwoColumnList } from '../../styles/reusable/TwoColumnList'
import { FacilityProp } from '../../typings/typings'

type facilityCompProp = {
    facilityData : FacilityProp
}


const Facility = ({facilityData}: facilityCompProp) => {
  return (
    <>
    <h3>{facilityData?.title}</h3>
    <TwoColumnList>
    <ul>
        {facilityData?.facility?.map((facility, index) => (
            <li style={{listStyle:'none'}} key={`facility-${index}`}>
                <img src={getStrapiMedia(facility?.facilityList?.data?.attributes?.facilityIco)}/>
                {facility?.facilityList?.data?.attributes?.title}
            </li>
        ))}
    </ul>
    </TwoColumnList>
    </>
)
}

export default Facility
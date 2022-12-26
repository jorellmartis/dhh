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
    <h3 style={{marginTop:'2%'}}>{facilityData?.title}</h3>
    <TwoColumnList>
    <ul style={{width: '50%'}}>
        {facilityData?.facility?.map((facility, index) => (
            <li style={{listStyle:'none'}} key={`facility-${index}`}>
                <i style={{paddingRight:'15px'}}>
                <img style={{width:'16px'}} src={getStrapiMedia(facility?.facilityList?.data?.attributes?.facilityIco)}/>
                </i>
                {facility?.facilityList?.data?.attributes?.title}
            </li>
        ))}
    </ul>
    </TwoColumnList>
    </>
)
}

export default Facility
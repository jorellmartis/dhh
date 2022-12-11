import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import {PropertyCardType} from '../../../typings/typings'
import {getStrapiMedia} from '../../../helpers/strapi'
import { type } from 'os';

type PropertyCardCompType = {
  propertyCardData?: PropertyCardType
}
type Props = {
  cardStyle : string
}
const PropertyCardElem = styled.div`
display: flex;
flex-direction: column;
width: 22%;
margin-bottom: 2%;
margin-right: 2%;
`

const PropertyCard = ({propertyCardData}: PropertyCardCompType) => {
  console.log(getStrapiMedia(propertyCardData?.pages_property?.data?.attributes?.imgThumb))
  return (
    <PropertyCardElem>
    <Image 
    style={{position: 'relative' , width:'100%', height:'100%'}}
    width = {318}
    height = {280}
    // src={ getStrapiMedia(propertyCardData?.pages_property?.data?.attributes?.imgThumb)} 
    src={'/CardImage.jpg'} 
    alt={`Property Image`}
    objectFit='contain'
    loading='lazy'/>
    <h3>{propertyCardData?.pages_property?.data?.attributes?.title}</h3>
    <h4>{propertyCardData?.pages_property?.data?.attributes?.Location?.data?.attributes?.location}</h4>
    <span>From <b>{propertyCardData?.pages_property?.data?.attributes?.price}</b> per night</span>
    <span>Ratings</span>

    </PropertyCardElem>
  )
}

export default PropertyCard
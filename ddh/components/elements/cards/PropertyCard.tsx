import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import {PropertyCardType} from '../../../typings/typings'
import {getStrapiMedia} from '../../../helpers/strapi'

type PropertyCardCompType = {
  propertyCardData?:{
    pages_property?:{
      data?:{
        attributes: PropertyCardType
      } 
    } 
  }
}
type PropertyCardPageType = {
  propertyCardData?:{
    isBlock?: boolean
    attributes?: PropertyCardType

  }
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
  span{
    white-space: nowrap;
    overflow: hidden ;
    text-overflow: ellipsis;
  }
`

const PropertyCard = ({propertyCardData}: PropertyCardCompType & PropertyCardPageType) => {
  console.log(propertyCardData,"proproprop")
  return (
    
    <>
    <PropertyCardElem>
    {propertyCardData?.isBlock 
    ? 
    <>
    <div>
    <Image 
    style={{position: 'relative' , width:'100%', height:'100%'}}
    width = {318}
    height = {280}
    // src={ getStrapiMedia(propertyCardData?.pages_property?.data?.attributes?.imgThumb)} 
    src={'/CardImage.jpg'} 
    alt={`Property Image`}
    objectFit='contain'
    loading='lazy'/></div>
    <span>{propertyCardData?.pages_property?.data?.attributes?.title}</span>
    <span>{propertyCardData?.pages_property?.data?.attributes?.Location?.data?.attributes?.location}</span>
    <span>From <b>{propertyCardData?.pages_property?.data?.attributes?.price}</b> per night</span>
    <span>Ratings</span>
    </> 
    :
    <>
    <div>
    <Image 
    style={{position: 'relative' , width:'100%', height:'100%'}}
    width = {318}
    height = {280}
    // src={`/${getStrapiMedia(propertyCardData?.pages_property?.data?.attributes?.imgThumb)}`} 
    src={'/CardImage.jpg'} 
    alt={`Property Image`}
    objectFit='contain'
    loading='lazy'/></div>
    <span>{propertyCardData?.attributes?.title}</span>
    <span>{propertyCardData?.attributes?.Location?.data?.attributes?.location}</span>
    <span>From <b>{propertyCardData?.attributes?.price}</b> per night</span>
    <span>Ratings</span>
    </>
    }
    </PropertyCardElem>
    </>
  )
}

export default PropertyCard
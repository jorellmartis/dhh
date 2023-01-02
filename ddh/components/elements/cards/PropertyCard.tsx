import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import {PropertyCardType} from '../../../typings/typings'
import {getStrapiMedia} from '../../../helpers/strapi'
import { Typography } from '../../Typography';


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
    styleType?: string | undefined
    attributes?: PropertyCardType

  }
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
    <PropertyCardElem
    // style={propertyCardData?.styleType=="Trio_Card"?? {width:'31%'}}
    >
    {propertyCardData?.isBlock 
    ? 
    <>
    <div>
    <Image 
    style={{position: 'relative' , width:'100%', height:'100%'}}
    width = {318}
    height = {280}
    src={`${getStrapiMedia(propertyCardData?.pages_property?.data?.attributes?.imgThumb)}`} 
    alt={`Property Image`}
    objectFit='contain'
    loading='lazy'/></div>
    <span><Typography level={'subHeader2'}>
    {propertyCardData?.pages_property?.data?.attributes?.title}
    </Typography>
    </span>
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
    src={`${getStrapiMedia(propertyCardData?.attributes?.imgThumb)}`} 
    // src={'/CardImage.jpg'} 
    alt={`Property Image`}
    objectFit='contain'
    loading='lazy'/></div>
    <span><Typography level={'subHeader2'}>{propertyCardData?.attributes?.title}</Typography></span>
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
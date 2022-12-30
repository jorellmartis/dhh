import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { getStrapiMedia } from '../../../helpers/strapi'
import { WrapperContainer } from '../../../styles/reusable/WrapperContainer'
import { CityCardProp } from '../../../typings/typings'

const CityCardBlock = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 2%;
  margin-right: 2%;
  span{
    white-space: nowrap;
    overflow: hidden ;
    text-overflow: ellipsis;
  }
  h2{
    position: absolute;
    bottom: 10%;
    color: white;
    font-size: 3rem;
    margin-left: 10px;
  }
  p{
    position: absolute;
    bottom: 5%;
    margin-left: 10px;
    color: #fff;
    opacity: .8;
  }
`
const CityCardListing = styled.div`
  display: flex;
`
type CityCardCompProp = {
  cityCardData : CityCardProp
}
const CityCard = ({cityCardData}: CityCardCompProp) => {
  return (
    <WrapperContainer>
    <h2>{cityCardData?.title}</h2>
    <CityCardListing>
    {cityCardData?.cityCard?.map((card , index) => (
    <CityCardBlock key={`city-card-id-${index}`}>
        <div>
        <h2>{card?.title}</h2>
        <p>{card?.description}</p>
        <Image 
        style={{width:'100%', height:'100%', minHeight:'450px'}}
        width = {318}
        height = {400}
        src={`${getStrapiMedia(card?.imgThumb)}`} 
        alt={`Property Image`}
        objectFit='contain'
        loading='lazy'/>
        </div>
    </CityCardBlock>
    ))}
    </CityCardListing>
    </WrapperContainer>
  )
}

export default CityCard
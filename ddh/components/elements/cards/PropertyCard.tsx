import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import { relative } from 'path';

const PropertyCardElem = styled.div`
display: flex;
flex-direction: column;
background-color: red;
width: 22%;
margin-bottom: 2%;
`


const Content = styled.div`
text-align: center`;

const PropertyCard = () => {
  return (
    <PropertyCardElem>
    <Image 
    style={{position: 'relative' , width:'100%', height:'100%'  }}
    width = {318}
    height = {280}
    src={`/CardImage.jpg`} 
    alt={`Property Image`}
    objectFit='contain'
    loading='lazy'/>
    <h3>Property Name</h3>
    <h4>Location</h4>
    <h4>From <b>price</b>per night</h4>
    <span>Ratings</span>

    </PropertyCardElem>
  )
}

export default PropertyCard
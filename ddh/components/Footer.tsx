import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    min-height: 200px;
    flex-direction: column;
    position: relative;
`
const UpperFooter = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    background: red;
`
const LowerFooter = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    background: blue;
`
const FooterLogo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 10%;
    background: pink;
    align-items: center;
    justify-content: center;
`
const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 20%;
    span{
        width: 100%;
        text-align: center;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        li{
            list-style: none;
            width: 50%;
        }
    }   
`
const FooterLinks2 = styled.div`
    display: flex;
    width: 20%;
    background: yellow;
`
const Footer = () => {
  return (
    <footer>
    <StyledFooter>
    <UpperFooter>
        <FooterLogo>
            <img src="/logo.svg" width={48} height={34} alt="" />
            <span>Best Places And Prices</span>
        </FooterLogo>
        <FooterLinks>
            <ul>
            <span>Driven Holiday Homes</span>
                <li>Link 1</li>
                <li>Link 1</li>
                <li>Link 1</li>
                <li>Link 1</li>
                <li>Link 1</li>
                <li>Link 1</li>
                <li>Link 1</li>
                <li>Link 1</li>
            </ul>
        </FooterLinks>
        <FooterLinks2>
            yok
        </FooterLinks2>
    </UpperFooter>
    <LowerFooter>
    Footer Items
    </LowerFooter>
    </StyledFooter>
    </footer>
  )
}

export default Footer
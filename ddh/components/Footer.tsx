import Link from 'next/link'
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
            text-align: center;
        }
    }
    &:nth-child(3){
        width: 20%;
        span{
            text-align: none;
        }
        li{
            width: 100%;
        }
    }
    &:nth-child(4){
        width: 10%;
    }
    &:nth-child(5){
        li{
            width: 100%;
        }
    }   
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
        <span>Driven Holiday Homes</span>
            <ul>
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
        <FooterLinks>
        <span>We&apos;re at</span>
        <ul>
            <li>Link 1</li>
        </ul>
        </FooterLinks>
        <FooterLinks>
        <span>Are you a property owner?</span>
        <Link href={'/'}>
            <button>List Property</button>
        </Link>
        </FooterLinks>
        <FooterLinks>
        <span>Follow us?</span>
            <ul>
                <li>Instagram</li>
                <li>Facebook</li>
            </ul>
        </FooterLinks>
        <FooterLinks>
        <span>Contact Us</span>
            <ul>
                <li><Link href={''}>@blabal</Link></li>
            </ul>
        </FooterLinks>
    </UpperFooter>
    <LowerFooter>
    Footer Items
    </LowerFooter>
    </StyledFooter>
    </footer>
  )
}

export default Footer
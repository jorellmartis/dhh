import Link from 'next/link'
import React, {useContext} from 'react'
import styled from 'styled-components'
import index from '../pages'
import { AppContext } from '../pages/_app'
import {ListOfLinkType} from '../typings/typings'



const StyledNav = styled.div`
    display: flex;
    width: 100vw;
    height: 79px;
`
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-left: 12px;
    img{
        width: 48px;
        height: 34px;
    }
    h6{
        font-weight: 900;
        line-height: .73;
        font-size: 1.125rem;
        padding: 0 8px 0 20px;
        white-space: nowrap;
    }
`
const NavMenu = styled.div`
    width: 100%;
    height: 100%;
    padding: 0% 0% 0% 20%;
    ul{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-evenly;
        align-items: center;
        li{
            list-style: none;
        }
    }
`
type context = {
    headerLinks?:Array<ListOfLinkType>
}

const Header = () => {
    const context : context = useContext(AppContext)
    return (
        <header style={{position: 'absolute' , zIndex:'10', top:'0', left:'0', background:'#ffffff'}}>
            <nav>
                <StyledNav>
                <Link href={'/'}>
                    <Logo>
                        <img src="/logo.svg" alt="" width={48} height={34} />
                        <h6>Driven Holiday Homes</h6>
                    </Logo>
                </Link>
                <NavMenu>
                    <ul>
                    {context?.headerLinks![0]?.listOfLinks?.map((link , index) => (
                        // link?.pages_sitemap?.data?.attributes?.slug=="homepage" && {link?.pages_sitemap?.data?.attributes?.slug="#"}
                        link?.enableUrlName ? <Link key={`link-index-${index}`} href={`/${link?.pages_sitemap?.data?.attributes?.slug}`}><li key={link?.id}>{link?.urlName}</li></Link> : <Link key={`link-index-${index}`} href={`/${link?.pages_sitemap?.data?.attributes?.slug}`}><li key={link?.id}>{link?.pages_sitemap?.data?.attributes?.title}</li></Link>
                    ))}
                    </ul>
                </NavMenu>
                </StyledNav>
            </nav>
        </header>
    )
}

export default Header
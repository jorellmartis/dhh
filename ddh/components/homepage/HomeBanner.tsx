import React from 'react'
import styled from 'styled-components'
import { Typography } from '../Typography'
import { HomeBannerType } from '../../typings/typings'
import { getStrapiMedia } from '../../helpers/strapi'

type HomeBannerCompType = {
    homeBannerData? : HomeBannerType
}
const HomeBannerBlock = styled.div`
    display: flex;
    width: 100vw;
    height: 95vh;
    padding-top: 80px;
    background: linear-gradient(180deg,#ececec,#f7f3f3);
    justify-content: center;
    align-items: center;
    position: relative;
    video{
        position: absolute;
        object-fit: cover;
        inset: 0;
    }
`
const HomeBannerContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
`
const BannerSearch = styled.div`
    display: flex;
    width: 100%;
    height: min-content;
    justify-content: space-evenly;
`
const BannerSearchItem = styled.div`
    background: red;
`

const HomeBanner = ({homeBannerData}: HomeBannerCompType ) => {
    return (
        <HomeBannerBlock>
            <video autoPlay muted loop style={{ width: '100%', height: '100%' }} src={getStrapiMedia(homeBannerData?.homePageImg)}/>
            <HomeBannerContent>
                <Typography level={1} fontFamily='pacifico'>
                    <h1>{homeBannerData?.title}</h1>
                </Typography>
                <BannerSearch>
                    <BannerSearchItem>
                        box
                    </BannerSearchItem>
                    <BannerSearchItem>
                        box
                    </BannerSearchItem>
                    <BannerSearchItem>
                        box
                    </BannerSearchItem>
                    <BannerSearchItem>
                        box
                    </BannerSearchItem>
                </BannerSearch>
            </HomeBannerContent>
        </HomeBannerBlock>
    )
}

export default HomeBanner
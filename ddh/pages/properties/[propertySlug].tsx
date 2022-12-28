import React from 'react'
import SwiperComp from '../../components/elements/SwiperComp'
import FullBlockRender from '../../components/FullBlockRenderer'
import apolloClient from '../../helpers/apollo'
import { GET_PROPERTY_DETAIL, GET_PROPERTY_SLUG } from '../../queries/propertyPage'
import { PropertyDetailProp } from '../../typings/typings'
import styled from 'styled-components'
import {stackData} from '../../helpers/commonReq'
import ReserveProp from '../../components/properties/ReserveProp'
import PropRules from '../../components/properties/PropRules'

const DetailBlock = styled.div`
  display: flex;
  width: 100%;
${(props) => props.theme.wrapperGlob.custom(0,19) }
`
const PageHeading = styled.div`
${(props) => props.theme.wrapperGlob.custom(4,0)}
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  span{

  }
  h1{
    line-height: 1;
    font-weight: 900;
    letter-spacing: -.4px;
    font-size: 2.75rem;
  }
  ul{
    display: flex;
    li{
      margin-right: 6%;
    }
  }

`
const PropertyDetialPage = ({pageData, pageID}: PropertyDetailProp) => {
  console.log(pageData,"why empty")
  return (
    <>
    <SwiperComp swiperData= {pageData?.imgGallery}/>
    <DetailBlock>
    <div style={{width:'50%'}}>
    <PageHeading>
      <div>
        <span>1 bedroom</span>
        <h1>{pageData?.title}</h1>
        <p>{pageData?.Location?.data?.attributes?.location}</p>
      </div>
      <div>
        <span>{pageData?.list_bedroom?.data?.attributes?.title}</span>
        <ul>
          <li>{pageData?.list_bedroom?.data?.attributes?.title}</li>
          <li>{pageData?.guest?.data?.attributes?.title}</li>
          <li>3 bedroom</li>
          <li>1 bed</li>
        </ul>
      </div>
    </PageHeading>
    <FullBlockRender blocks={pageData?.blocks}/>
    </div>
    <ReserveProp
    pageID = {pageID}
    />
    </DetailBlock>
    </>
  )
}

export default PropertyDetialPage

export const getStaticPaths = async () => {
  let paths:any[] = []
  const { data } = await apolloClient.query({
    query: GET_PROPERTY_SLUG,
    fetchPolicy: "no-cache"
  })
  data?.pagesProperties?.data?.map((property: any) => {
    paths = [
      ...paths,
      {
        params: {
          propertySlug: property?.attributes?.slug,
        },
      },
    ];
  });
  return {
    paths,
    fallback: true,
  };
}

type params= {
  params:{
    propertySlug: string
  }
}

export const getStaticProps = async ({ params}:params) => {
  console.log(params);
  let pageData = null;
  let pageID = null;
  try {
    const { data } = await apolloClient.query({
      query: GET_PROPERTY_DETAIL,
      fetchPolicy: "no-cache",
      variables: {
        slug: params?.propertySlug,
      },
    });
    console.log(data,"data")
    pageID = data?.pagesProperties.data[0].id
    pageData = data?.pagesProperties.data[0].attributes
  } catch (error) {
    console.log(error);
  }
  const commonData = await stackData();
  return {
    props: {
      pageID,
      pageData,
      headerData: commonData?.headerData,
    }, // will be passed to the page component as props
  };   
};

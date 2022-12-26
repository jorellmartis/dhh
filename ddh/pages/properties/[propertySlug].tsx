import React from 'react'
import SwiperComp from '../../components/elements/SwiperComp'
import FullBlockRender from '../../components/FullBlockRenderer'
import apolloClient from '../../helpers/apollo'
import { GET_PROPERTY_DETAIL, GET_PROPERTY_SLUG } from '../../queries/propertyPage'
import { PropertyDetailProp } from '../../typings/typings'
import styled from 'styled-components'
import {stackData} from '../../helpers/commonReq'

const PageHeading = styled.div`
${(props) => props.theme.wrapperGlob.custom(4,0)}
  display: flex;
  flex-direction: column;
  width: 100vw;
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
      margin-right: 2%;
    }
  }

`
const PropertyDetialPage = ({pageData}: PropertyDetailProp) => {
  console.log(pageData,"why empty")
  return (
    <>
    <SwiperComp swiperData= {pageData?.imgGallery}/>
    <div style={{padding: "0% 38% 0% 10%"}}>
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
  data?.pagesProperties?.data?.map((property) => {
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


export const getStaticProps = async ({ params }) => {
  console.log(params);
  let pageData = null;

  try {
    const { data } = await apolloClient.query({
      query: GET_PROPERTY_DETAIL,
      fetchPolicy: "no-cache",
      variables: {
        slug: params?.propertySlug,
      },
    });
    console.log(data,"data")
    pageData = data?.pagesProperties.data[0].attributes
  } catch (error) {
    console.log(error);
  }
  const commonData = await stackData();
  return {
    props: {
      pageData,
      headerData: commonData?.headerData,
    }, // will be passed to the page component as props
  };   
};

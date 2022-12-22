import React from 'react'
import FullBlockRender from '../../components/FullBlockRenderer'
import apolloClient from '../../helpers/apollo'
import { GET_PROPERTY_DETAIL, GET_PROPERTY_SLUG } from '../../queries/propertyPage'

const PropertyDetialPage = ({pageData}) => {
  console.log(pageData,"why empty")
  return (
    <>
    <FullBlockRender blocks={pageData?.blocks}/>
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
  return {
    props: {
      pageData
    }, // will be passed to the page component as props
  };   
};

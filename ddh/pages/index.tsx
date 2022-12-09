import Head from 'next/head'
import FullBlockRender from '../components/FullBlockRenderer'
import apolloClient from '../helpers/apollo'
import { GET_PARENT_PAGES } from '../queries/parentPage'
import { NextPage } from 'next'
import { imageType } from '../typings/typings'

export type homeBlocksTyping = {
    blocks: Array<{
    __typename?: string;
    homePageImg? : imageType
    title?: string
  }>
}
export type PageDataProp = {
  pageData: {
      title: string;
      blocks: homeBlocksTyping
    }
  }

  const index = ({pageData}:PageDataProp) => {
    return (
      <>
      <Head>
        <title>{pageData?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullBlockRender blocks ={pageData?.blocks}/>
    </>
  )
  }
  export default index

export const getStaticProps = async () => {
  let pageData = null;
  try {
    const { data }  = await apolloClient.query({
      query: GET_PARENT_PAGES,
      variables: {
        slug: "homepage"
      }
    });
    pageData = data?.pagesSitemaps?.data[0].attributes;
  }
  catch (error) {
    console.log(error);
    
  }
  return{
    props: {
      pageData
    }
  }
}
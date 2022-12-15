import React from "react";
import ComponentWebisteBlocksHomeBanner from './blocks/homepage/ComponentWebisteBlocksHomeBanner'
import ComponentWebisteBlocksPropertyListing from "./blocks/homepage/ComponentWebisteBlocksPropertyListing";
import {AllHomeBlocksType} from '../typings/typings'

type AllComponentBlockType = {
    blocks: Array<AllHomeBlocksType>
}

const FullBlockRender  = ({blocks} :AllComponentBlockType ) => {
    const getComponent = (block:any , index: number ) => {
        switch (block.__typename) {
            case "ComponentWebisteBlocksHomeBanner":
                return <ComponentWebisteBlocksHomeBanner 
                compBlockData = {block}
                key = {`section-block-${index}`}
                />
                break;
            case "ComponentWebisteBlocksPropertyListing":
                return <ComponentWebisteBlocksPropertyListing 
                compBlockData = {block}
                key = {`section-block-${index}`}
                />
                break;
            default:
                break;
        }

    }
    return <>
        {blocks?.map(( block , index : number) => 
        getComponent( block, index)
        )}
        </>
}

export default FullBlockRender
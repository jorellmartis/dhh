import React from "react";
import ComponentWebisteBlocksHomeBanner from './blocks/homepage/ComponentWebisteBlocksHomeBanner'
import ComponentWebisteBlocksPropertyListing from "./blocks/homepage/ComponentWebisteBlocksPropertyListing";
import {AllHomeBlocksType} from '../typings/typings'
import ComponentWebisteBlocksImageGallery from "./blocks/propertydetail/ComponentWebisteBlocksImageGallery";
import ComponentWebisteBlocksPropertyDescription from "./blocks/propertydetail/ComponentWebisteBlocksPropertyDescription";

type AllComponentBlockType = {
    blocks: Array<AllHomeBlocksType>
}

const FullBlockRender  = ({blocks} :AllComponentBlockType ) => {
    const getComponent = (block:any , index: number ) => {
        switch (block.__typename) {
            //homepageblocks
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
            //property detail page blocks
            case "ComponentWebisteBlocksImageGallery":
                return <ComponentWebisteBlocksImageGallery
                compBlockData={block}
                key = {`section-block-${index}`}
                />
            case "ComponentWebisteBlocksPropertyDescription":
                return <ComponentWebisteBlocksPropertyDescription
                compBlockData={block}
                key = {`section-block-${index}`}
                />
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
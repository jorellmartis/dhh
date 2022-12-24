import React from "react";
import ComponentWebisteBlocksHomeBanner from './blocks/homepage/ComponentWebisteBlocksHomeBanner'
import ComponentWebisteBlocksPropertyListing from "./blocks/homepage/ComponentWebisteBlocksPropertyListing";
import {AllHomeBlocksType, AllPropDetailBlock} from '../typings/typings'
import ComponentWebisteBlocksPropertyDescription from "./blocks/propertydetail/ComponentWebisteBlocksPropertyDescription";
import ComponentWebisteBlocksFacilities from "./blocks/propertydetail/ComponentWebisteBlocksFacilities";
import ComponentWebisteBlocksPropertyRules from "./blocks/propertydetail/ComponentWebisteBlocksPropertyRules";
import ComponentWebisteBlocksDistrictAndArea from "./blocks/propertydetail/ComponentWebisteBlocksDistrictAndArea";


type AllComponentBlockType = {
    blocks: Array<AllHomeBlocksType> & Array<AllPropDetailBlock>
}

const FullBlockRender  = ({blocks} :AllComponentBlockType ) => {
    const getComponent = (block: any , index: number ) => {
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
            case "ComponentWebisteBlocksPropertyDescription":
                return <ComponentWebisteBlocksPropertyDescription
                compBlockData={block}
                key = {`section-block-${index}`}
                />
            case "ComponentWebisteBlocksFacilities":
                return <ComponentWebisteBlocksFacilities
                compBlockData={block}
                key = {`section-block-${index}`}
                />
            case "ComponentWebisteBlocksPropertyRules":
                return <ComponentWebisteBlocksPropertyRules
                compBlockData={block}
                key = {`section-block-${index}`}
                />
            case "ComponentWebisteBlocksDistrictAndArea":
            return <ComponentWebisteBlocksDistrictAndArea
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
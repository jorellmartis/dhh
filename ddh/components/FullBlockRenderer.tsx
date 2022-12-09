import React from "react";
import { homeBlocksTyping } from "../pages";
import ComponentWebisteBlocksHomeBanner from './blocks/ComponentWebisteBlocksHomeBanner'



const FullBlockRender  = ({blocks}: homeBlocksTyping ) => {

    const getComponent = (block , index: number ) => {
        switch (block.__typename) {
            case "ComponentWebisteBlocksHomeBanner":
                return <ComponentWebisteBlocksHomeBanner 
                compBlockData = {block}
                key = {`section-block-${index}`}
                />
                break;
            default:
                break;
        }

    }
    return <>{blocks?.map(( block , index : number) => 
        getComponent(block, index)
        )}</>
}

export default FullBlockRender
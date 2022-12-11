export interface imageType{
    data:{
        attributes:{
            url?: string
            alternativeText?: string
        }
    }
}
export interface LocationType{
    data:{
        attributes:{
            location?: string
        }
    }
}
export interface HomeBannerType {
        __typename?: string
        homePageImg? : imageType
        title?: string
    }
export interface PropertyCardType{
        pages_property?:{
            data?:{
                attributes?:{
                    Location?: LocationType
                    title: string
                    imgThumb: imageType
                    price: string
                }
            }
        }
    }
export interface PropertyListType{
        __typename: string;
        title?: string
        cardStyle: string
        Property?: Array<PropertyCardType>
    }
export interface AllHomeBlocksType extends HomeBannerType, PropertyListType{
}
export interface CompBlockData {
        compBlockData?:  HomeBannerType & PropertyListType
    }


    //create a interface with all home blocks data.
    //this interface will have an or opertaor for each block data on that page. 
    //assign compblock data to each page data with or operator

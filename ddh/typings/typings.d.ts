export interface imageType{
    data:{
        attributes:{
            url?: string;
            alternativeText?: string;
        }
    }
}
export interface LocationType{
    data:{
        attributes:{
            location?: string;
        }
    }
}
export interface HomeBannerType {
        __typename?: string;
        homePageImg? : imageType;
        title?: string;
    }
export interface PropertyCardType{
    Location?: LocationType;
    title: string;
    imgThumb: imageType;
    price: string;  
    slug: string         
}
export interface SwiperProp{
    swiper: Array<{
        swiperImg: imageType
    }>
}

export interface DetailDescProp{
    description: string
}

export interface FilterProp{
    filterData:{
        listBedrooms:{
            data:Array<{
                id: string
                attributes:{
                    __typename: string
                    noOfBedrooms: number
                    title: string
                }
            }>
        }
        listGuests:{
            data:Array<{
                id: string
                attributes:{
                    __typename: string
                    noOfGuest: number
                    title: string
                }
            }>
        }
    }
}
export interface PropertyListType{
        __typename: string;
        title?: string;
        cardStyle: string;
        pagesProperties?: Array<PropertyCardType>;
    }
export interface AllHomeBlocksType extends HomeBannerType, PropertyListType{
}

//index page props
export type PageDataProp = {
    pageData: {
        title: string;
        blocks: Array<AllHomeBlocksType> 
    }
    headerData: {
    blocks: AllStackBlocks
    }
}

export interface ListOfLinkType{
    listOfLinks: Array<ListofLinkCompType>
}
export interface ListofLinkCompType{
        id: string
        enableUrlName : boolean
        urlName?: string
        pages_sitemap:{
            data:{
                attributes:{
                    slug: string
                    title: string
                }
            }
        }   
}
export interface CompBlockData {
        compBlockData?:  HomeBannerType & PropertyListType
    }
export interface AllStackBlocks extends Array<ListOfLinkType>{}

    //create a interface with all home blocks data.
    //this interface will have an or opertaor for each block data on that page. 
    //assign compblock data to each page data with or operator

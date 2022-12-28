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

//Property Detail Typings
export interface SwiperProp{
    swiper: Array<{
        swiperImg: imageType
    }>
}

export interface DetailDescProp{
    description: string
}

export interface FacilityProp{
    title: string
    facility: Array<{
        facilityList:{
            data:{
                attributes:{
                    facilityIco: imageType
                    title: string
                }
            }
        }
    }>
}
export interface PropRulesProp{
    propRules: Array<{
        title: string
    }>
}
export interface DistricAreaProp{
    title: string
    description: string
    nearbyAttractions: string
}
interface BedroomProp{
        id?:string
        attributes:{
            __typename?: string
            noOfBedrooms?: number
            title: string
        }
}

interface GuestProp{
        id?:string
        attributes:{
            __typename?: string
            noOfGuest?: number
            title: string
        }
}
export interface FilterProp{
    filterData:{
        listBedrooms:{
            data: Array<BedroomProp>
        }
        listGuests: {
            data: Array<GuestProp>
        }
    }
}
export interface PropertyListType{
        __typename: string;
        title?: string;
        cardStyle?: string;
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

//property detail page props
export type PropertyDetailProp = {
    pageData: {
        title: string;
        Location: LocationType
        guest:{
            data: GuestProp
        } 
        blocks: Array<AllPropDetailBlock>
        imgGallery: SwiperProp 
        list_bedroom: {
            data: BedroomProp
        }
    }
    pageID:{
        id: number
    }
    // headerData: {
    // blocks: AllStackBlocks
    // }
}

export interface AllPropDetailBlock extends DistricAreaProp, PropRulesProp, FacilityProp, DetailDescProp, SwiperProp {
}

//Stack Typings
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

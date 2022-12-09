import {imageType} from '../typings/typings'
export const getStrapiMedia = (imageData: imageType) => {
    const imageAttributes = imageData?.data?.attributes
    return `http://localhost:1337${imageAttributes?.url}`
}
export const getStrapiMediaUrl = (imageData : imageType) => {
    const imageAttributes = imageData?.data?.attributes?.alternativeText
    return imageAttributes
}
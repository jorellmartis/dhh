interface imageFragment{
    url: string;
    alternativeText: string
}
export const imageFragment  = `
    data{
        attributes{
            url
            alternativeText
        }
    }
`;
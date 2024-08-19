export interface fontTypes{
    id:number,
    bold: string,
    semiBold:string,
    medium:string,
    regular: string,
    weight:{
        bold: string,
        semiBold:string,
        medium:string,
        regular: string,
    }
}
export interface colorTypes{
    id:number,
    primaryColor: string,
    secondaryColor: string,
    tirtaryColor:string,
}
export interface appMainSettings {
    fontFamily?: fontTypes;
    themes?: colorTypes[];
    themeColors?:colorTypes
    fontFamilies?:fontTypes[]
  }
  

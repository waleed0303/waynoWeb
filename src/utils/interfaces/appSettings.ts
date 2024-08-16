export interface fontTypes{
    regular: string,
    bold: string,
    semiBold:string,
    medium:string,
}
export interface colorTypes{
    id:any,
    primaryColor: string,
    secondaryColor: string,
    tirtaryColor:string,
}
export interface appMainSettings {
    fontFamily: fontTypes;
    themes: colorTypes[];
    themeColors:colorTypes
    fontFamilies:fontTypes[]
  }
  

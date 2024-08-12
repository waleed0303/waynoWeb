export interface fontTypes{
    regular: String,
    bold: String,
    medium:String,
}
export interface colorTypes{
    id:any,
    primaryColor: String,
    secondaryColor: String,
    tirtaryColor:String,
}
export interface appSettings {
    fontFamily: fontTypes;
    themes: colorTypes[];
    appTheme:colorTypes
  }

export interface fontTypes {
  id: number;
  bold: string;
  semiBold: string;
  medium: string;
  regular: string;
  weight: {
    bold: string;
    semiBold: string;
    medium: string;
    regular: string;
  };
}
export interface colorTypes {
  id: number;
  name:string;
  primaryColor: string;
  secondaryColor: string;
  tirtaryColor: string;
  whiteColor?: string;
  blackColor?: string;
  offWhite?: string;
  greyShade?: string;
}

export interface langInterface{
  id:string|number,
  name:string,
  fontIdtoUse:string|number,
  layout:string,
  readFrom:{
    [key:string]: string|number
  }
}

export interface appMainSettings {
  fontFamily?: fontTypes;
  themes?: colorTypes[];
  themeColors?: colorTypes;
  fontFamilies?: fontTypes[];
  languages?:langInterface[];
  lang?:langInterface
}



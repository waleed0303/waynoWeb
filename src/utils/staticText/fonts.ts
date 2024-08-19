import {fontTypes} from "../interfaces/appSettings";

const primaryFont:fontTypes = {
    id:0,
    bold:'BoldFont',
    semiBold:'SemiBold',
    medium: 'MediumBold',
    regular: 'Regularfont',
    weight:{
        bold:"700",
        semiBold:"500",
        medium:"400",
        regular:"300"
    }
}

const secondaryFont:fontTypes = {
    id: 1,
    bold: "BoldArabic",
    semiBold: "SemiBoldArabic",
    medium: "MediumFontArabic",
    regular: "RegularfontArabic",
    weight: {
        bold: "700",
        semiBold: "500",
        medium: "400",
        regular: "300",
    }
}

export {primaryFont, secondaryFont}
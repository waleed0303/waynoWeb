import { fontTypes } from "../interfaces/appSettings";

const primaryFont: fontTypes = {
  id: 0,
  bold: "BoldPoppins",
  semiBold: "SemiBoldPoppins",
  medium: "MediumFontPoppins",
  regular: "RegularfontPoppins",
  weight: {
    bold: "500",
    semiBold: "300",
    medium: "200",
    regular: "100",
  },
};

const secondaryFont: fontTypes = {
  id: 1,
  bold: "BoldFont",
  semiBold: "SemiBold",
  medium: "MediumBold",
  regular: "Regularfont",
  weight: {
    bold: "700",
    semiBold: "500",
    medium: "400",
    regular: "300",
  },
};

const tirtaryFont: fontTypes = {
  id: 2,
  bold: "BoldArabic",
  semiBold: "SemiBoldArabic",
  medium: "MediumFontArabic",
  regular: "RegularfontArabic",
  weight: {
    bold: "700",
    semiBold: "500",
    medium: "400",
    regular: "300",
  },
};

export { primaryFont, secondaryFont, tirtaryFont };

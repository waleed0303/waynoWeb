import { fontTypes } from "../interfaces/appSettings";

const primaryFont: fontTypes = {
  id: 0,
  bold: "SevBold",
  semiBold: "SevSemiBold",
  medium: "SevMedium",
  regular: "SevReg",
  weight: {
    bold: "700",
    semiBold: "500",
    medium: "400",
    regular: "300",
  },
};

const secondaryFont: fontTypes = {
  id: 1,
  bold: "NotoBold",
  semiBold: "NotoSemiBold",
  medium: "NotoMedium",
  regular: "NotoRegular",
  weight: {
    bold: "700",
    semiBold: "500",
    medium: "400",
    regular: "300",
  },
};

const poppingFont: fontTypes = {
  id: 2,
  bold: "PopBold",
  semiBold: "PopSemiBold",
  medium: "PopMedium",
  regular: "PopRegular",
  weight: {
    bold: "700",
    semiBold: "500",
    medium: "400",
    regular: "300",
  },
};

export { primaryFont, secondaryFont, poppingFont };

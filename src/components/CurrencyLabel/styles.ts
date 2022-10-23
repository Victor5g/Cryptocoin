import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageArea: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  boxText: {
    marginLeft: SIZES.base,
  },
  textCurrency: {
    ...FONTS.h3,
  },
  textCode: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
});

export default styles;

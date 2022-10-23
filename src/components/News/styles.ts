import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.secondary,
  },
  titleNew: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  detailNew: {
    marginTop: SIZES.base,
    color: COLORS.white,
    ...FONTS.body4,
    lineHeight: 18,
  },
  buttonRedirect: {
    marginTop: SIZES.base,
  },
  labelButtonRedirect: {
    textDecorationLine: "underline",
    color: COLORS.green,
    ...FONTS.h3,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default styles;

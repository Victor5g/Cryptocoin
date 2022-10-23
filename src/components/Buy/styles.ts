import { StyleSheet } from "react-native";

import { SIZES, COLORS, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.radius,
    padding: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.radius,
  },
  contentCurrency: {
    flex: 1,
  },
  contentAmount: {
    flexDirection: "row",
    alignItems: "center",
  },
  textArea: {
    marginRight: SIZES.base,
  },
  labelValue: {
    ...FONTS.h3,
  },
  legendAbout: {
    textAlign: "right",
    color: COLORS.gray,
    ...FONTS.body4,
  },
  imageArea: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray,
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

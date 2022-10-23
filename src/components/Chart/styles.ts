import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.radius,
    alignItems: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  headerChart: {
    flexDirection: "row",
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  contentLabel: {
    flex: 1,
  },
  textAmount: {
    ...FONTS.h3,
  },
  changesGood: {
    color: COLORS.green,
    ...FONTS.body3,
  },
  changesNotGood: {
    color: COLORS.red,
    ...FONTS.body3,
  },
  containerOption: {
    height: 30,
    width: 60,
    borderRadius: 15,
  },
  contentOptions: {
    width: "100%",
    paddingHorizontal: SIZES.padding,
    flexDirection: "row",
    justifyContent: "space-between",
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

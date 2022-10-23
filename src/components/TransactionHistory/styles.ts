import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  containerRender: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SIZES.base,
  },
  imageArea: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
  contentTexts: {
    flex: 1,
    marginLeft: SIZES.radius,
  },
  textDescription: {
    ...FONTS.h3,
  },
  textDate: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
  contentDetails: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  textDetail: {
    ...FONTS.h3,
  },
  iconArrow: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray,
  },
  containerTrasaction: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  transactionTitle: {
    ...FONTS.h2,
  },
  containerList: {
    marginTop: SIZES.radius,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.lightGray,
  },
  itemColorInput: {
    color: COLORS.green,
  },
  itemColorOutput: {
    color: COLORS.black,
  },
});

export default styles;

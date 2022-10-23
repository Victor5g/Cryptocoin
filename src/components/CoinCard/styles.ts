import { StyleSheet } from "react-native";

import { SIZES, COLORS, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: 180,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    marginRight: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  iconCoin: {
    marginTop: 5,
    width: 25,
    height: 25,
  },
  contentText: {
    marginLeft: SIZES.base,
  },
  labelCurrency: {
    ...FONTS.h2,
  },
  labelCode: {
    color: COLORS.gray,
    ...FONTS.body3,
  },
  labelAmount: {
    ...FONTS.h2,
  },
  contentValue: {
    marginTop: SIZES.radius,
  },
  goodChange: {
    color: COLORS.green,
    ...FONTS.h3,
  },
  notGoodChange: {
    color: COLORS.red,
    ...FONTS.h3,
  },
});

export default styles;

import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.padding * 4.5,
    marginLeft: SIZES.padding,
    marginRight: SIZES.padding,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
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
  iconBell: {
    width: 30,
    height: 30,
  },
  contentText: {
    flex: 1,
    marginLeft: SIZES.radius,
  },
  labelText: {
    ...FONTS.h3,
  },
  subLabelText: {
    ...FONTS.body4,
  },
  iconRight: {
    width: 25,
    height: 25,
    tintColor: COLORS.gray,
  },
});

export default styles;
